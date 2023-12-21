
import fs from 'fs';
import path from "path";
import StorageConfig, { IDisksNames, IDiskBase, IDiskMultiple } from "../../config/storage.js";
import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import RandStr from '../../helpers/randStr.js';

class Storage {

    public single(diskName: keyof IDisksNames, withMiddleware = true) {
        const DISK = StorageConfig.disks[diskName] as IDiskBase;
        const _multer = multer({
            storage: multer.diskStorage({
                destination(req, file, callback) {
                    let _uploadPath = "";
                    _uploadPath = path.join(StorageConfig.baseUploadPath[DISK.visibility], DISK.root);
                    if (!fs.existsSync(_uploadPath)) fs.mkdirSync(_uploadPath, { recursive: true });

                    callback(null, _uploadPath);
                },
                filename: function (request: Request, file: Express.Multer.File, callback): void {
                    callback(null, Date.now() + "-" + RandStr(10) + file.originalname.substring(file.originalname.indexOf('.')))
                }
            }), limits: {
                fileSize: DISK.validator?.maxSizeInMB ? DISK.validator.maxSizeInMB * 1000000 : 5000000,
                fieldSize: 20000,
            },
            fileFilter(req, file, cb) {
                // No Validator is present
                if (!DISK.validator) return cb(null, true);
                // Image Validator
                if (DISK.validator.fileType === "image") {
                    const filetypes = /jpeg|jpg|png/;
                    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
                    const mimetype = filetypes.test(file.mimetype);
                    if (mimetype && extname) return cb(null, true);
                    else return cb(null, false);
                }
                return cb(null, true);
                // return cb(new Error('Only pdfs are allowed'))
            },
        });
        if (withMiddleware) return this.makeMulterUploadMiddleware(_multer.single(DISK.fileName));
        else return _multer.single(DISK.fileName);
    }

    public array(diskName: keyof IDisksNames, withMiddleware = true) {
        const DISK = StorageConfig.disks[diskName] as IDiskMultiple;
        const _multer = multer({
            storage: multer.diskStorage({
                destination(req, file, callback) {
                    let _uploadPath = "";
                    _uploadPath = path.join(StorageConfig.baseUploadPath[DISK.visibility], DISK.root);
                    if (!fs.existsSync(_uploadPath)) fs.mkdirSync(_uploadPath, { recursive: true });
                    callback(null, _uploadPath);
                },
                filename: function (request: Request, file: Express.Multer.File, callback): void {
                    callback(null, Date.now() + "-" + RandStr(10) + file.originalname.substring(file.originalname.indexOf('.')))
                }
            }), limits: {
                fileSize: DISK.validator?.maxSizeInMB ? DISK.validator.maxSizeInMB * 1000000 : 5000000,
                fieldSize: 20000,
            },
            fileFilter(req, file, cb) {
                // No Validator is present
                if (!DISK.validator) return cb(null, true);
                // Image Validator
                if (DISK.validator.fileType === "image") {
                    const filetypes = /jpeg|jpg|png/;
                    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
                    const mimetype = filetypes.test(file.mimetype);
                    if (mimetype && extname) return cb(null, true);
                    else return cb(null, false);
                }
                return cb(null, true);
                // return cb(new Error('Only pdfs are allowed'))
            },
        });
        if (withMiddleware) return this.makeMulterUploadMiddleware(_multer.array(DISK.fileName, DISK.maxFiles));
        else return _multer.array(DISK.fileName, DISK.maxFiles);
    }

    public makeMulterUploadMiddleware = (multerUploadFunction: any) => {
        return (req: Request, res: Response, next: NextFunction) =>
            multerUploadFunction(req, res, function (err: any) {
                // handle Multer error
                if (err && err.name && err.name === 'MulterError') {
                    return res.Json.validationError({ file: [err?.message], e: err });
                }

                // handle other errors
                else if (err) return res.Json.error(err?.message);
                else return next();
            });
    }
}

export default new Storage;