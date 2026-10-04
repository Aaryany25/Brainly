import LinkModel from '../modals/Link.modal.js'
import ContentModel from '../modals/Content.modal.js'
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

const getNote = async(req,res)=>{
    const hash = req.params.shareId

    const link = await LinkModel.findOne(hash)

    if(!link){
        res.status(411).json({
            message:"Sorry Incorrect Input"
        })
        return
    }
    else{
        const content = await ContentModel.find({userId:link.userId})
    }
}
export {ShareNote}