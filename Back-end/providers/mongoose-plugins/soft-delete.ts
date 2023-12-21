import mongoose, { Schema, Document, Model } from "mongoose";

export type TWithSoftDeleted = {
    deletedAt?: null | Date;
};

export interface IUserDocument extends TWithSoftDeleted, Document {
    setPassword: (password: string) => Promise<void>;
    checkPassword: (password: string) => Promise<boolean>;
}


export interface IUserModel extends Model<IUserDocument> {
    withTrashed: (username: string) => Promise<IUserDocument>;
}


export type TDocument = TWithSoftDeleted & mongoose.Document;

// Schema<IUserDocument> schema type

const softDeletePlugin = (schema: mongoose.Schema) => {
    schema.add({
        deletedAt: {
            type: Date,
            default: null,
        },
    });

    type typesFindQueryMiddlewareType = 'find' | 'findOne' | 'findOneAndDelete' | 'findOneAndUpdate' | 'updateOne' | 'updateMany' | 'count' | 'countDocuments';

    const typesFindQueryMiddleware: typesFindQueryMiddlewareType[] = ['find', 'findOne', 'findOneAndDelete', 'findOneAndUpdate', 'updateOne', 'updateMany', 'count', 'countDocuments'];

    const excludeInFindQueriesIsDeleted = async function (this: mongoose.Query<TDocument[], TDocument>, next: any) {
        this.where({ deletedAt: null });
        next();
    };

    // const excludeInDeletedInAggregateMiddleware = async function (this: mongoose.Aggregate<any>, next: any) {
    //     this.pipeline().unshift({ $match: { deletedAt: null } });
    //     return next();
    // };

    // const setDocumentIsDeleted = async (doc: TDocument) => {
    //     doc.deletedAt = new Date();
    //     await doc.save();
    // };


    // schema.pre('deleteOne', async function (this: TDocument, next: any) {
    //     await setDocumentIsDeleted(this);
    //     return;
    // });


    typesFindQueryMiddleware.forEach((type: typesFindQueryMiddlewareType) => {
        schema.pre(type, excludeInFindQueriesIsDeleted);
    });

    // schema.pre('aggregate', excludeInDeletedInAggregateMiddleware);

};

export {
    softDeletePlugin,
};
