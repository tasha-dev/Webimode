import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IExample extends mongoose.Document {
    createdAt: Date,
    updatedAt: Date,
}

export const ExampleSchema = new mongoose.Schema({
    // fullName: {
    //     type: String,
    //     required: true,
    //     index: { unique: true, sparse: true },
    //     trim: true,
    //     ref: 'users',
    //     enum: ['super-admin', 'author'],
    //     set: (v: string) => {
    //         return v;
    //     }
    // },
}, {
    timestamps: true
});


ExampleSchema.plugin(paginate);
const Example = mongoose.model<IExample, mongoose.PaginateModel<IExample>>('Example', ExampleSchema);

export default Example;
