import mongoose, { Schema } from 'mongoose';

const LinkSchema = new Schema({
    hash:{type:string, required:true},
    userId:{type:Schema.Types.ObjectId, ref:'User', required:true},
})
const Link = mongoose.model('Link', LinkSchema);
export default Link;