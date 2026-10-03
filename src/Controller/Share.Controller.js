import LinkModel from '../modals/Link.modal.js'
import { random } from '../utils.js'
const ShareNote = async(req,res)=>{
    const share = req.body

    if(share){
       await LinkModel.create({
            userId:req.user._id,
            hash:random(10)
        })
    }else{
        await LinkModel.deleteOne({userId:req.user._id})
    }
    res.json({message:"success"})
}