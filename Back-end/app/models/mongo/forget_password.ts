import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IForgetPassword extends mongoose.Document {
    email: string;
    token: string,
    modelType: 'users' | 'admins',
    expireAt: Date,
    // _doc?: any // to remove password after created admin in controller
}

export const ForgetPasswordSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    token: {
        type: String,
        required: true,
    },
    modelType: {
        type: String,
        enum: ['users', 'admins'],
        required: true
    },
    expireAt: {
        type: Date,
        required: true
    },
    // attempts {}
 
}, {
    timestamps: false
});


ForgetPasswordSchema.plugin(paginate);

const ForgetPassword = mongoose.model<IForgetPassword, mongoose.PaginateModel<IForgetPassword>>('forget_password', ForgetPasswordSchema);

export default ForgetPassword;
