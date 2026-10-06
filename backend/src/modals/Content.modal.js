import mongoose, { Schema } from 'mongoose';

const ContentSchema = new Schema({

    title:{type:String, required:true},
    link:String,
    type:['X','Youtube','Instagram'],
    userId:{type:Schema.Types.ObjectId, ref:'User', required:true},
    tags:{type:Schema.Types.ObjectId, ref:'Tag', required:true},
})

const Content = mongoose.model('Content', ContentSchema);
export default Content;