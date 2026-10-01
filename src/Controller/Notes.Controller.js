import { ContentSchema } from "../validators/validation.js";
import Content from "../modals/Content.modal.js";
import Tag from "../modals/Tags.modal.js";


// Add content Functionality 

const Addcontent = async(req,res)=>{
    try{
        const {title,link,type,tags} =ContentSchema.parse(req.body);
        if(!title || !link ){
            return res.status(400).json({message:"Title and link are required",success:false})
        }

        // if(!type){
        //     await Tag.create({
        //         name:tags,
        //         user:req.user._id
        //     })
        // }
        const content = await Content.create({title,link,type,tags})
        return res.status(201).json({message:"Content added successfully",success:true,content})
        
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error",success:false,error:error.message})
    }
}

const GetContent = async(req,res)=>{
    try{
        const userId= req.user._id;
        if(!userId){
            return res.status(404).json({message:"user Id is missing",success:false})
        }

       

        const content = await Content.find({user:userId}).skip(skip).limit(limit)
        return res.status(200).json({message:"Content fetched successfully",success:true,content})
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error",success:false,error:error.message})
    }
}

export {Addcontent,GetContent}