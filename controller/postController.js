import { ProfilingLevel } from "mongodb";
import Post from "../models/postModel.js"



export const createPost = async(req,res)=>{
    console.log("I am here in createPost")

    try{

        const postData = req.body
       

        const augmentedPostData = new Post({
            createdAt: postData.createdAt,
            title: postData.title,
            content: postData.content, 
            comments: [],
            likes: 0,
        })

        const savedPost = await augmentedPostData.save();
        res.status(200).json(savedPost);

    }
    catch{
        res.status(500).json({error:"Internal error"});
    }
   
}

export const deletePost = async(req,res)=>{
    try{
        const {postId} = req.params

        const post = Post.findByIdAndDelete(postId)
        if(!post){
            return res.status(400).json("Post not found")
        }
        return res.status(200).json("Post deleted")
    }
    catch{
        return res.status(500).json("Internal Error")
    }
}

export const updatePostContent = async(req,res)=>{

    try{
        const {postId} = req.params 
        const {postContent} = req.body
        const updatedPost = await Post.findByIdAndUpdate(postId,
            {$set:{content:postContent}},
            {new:true}  
        )
        if(!updatedPost){
            return res.status(400).json("Could not update")
        }
        res.status(200).json(updatedPost)
    }
    catch{
        res.status(500).json({error:"Internal error"});
    }
   
}

export const fetchPost = async(req,res)=>{
    try{
        const {postId} = req.query;
        const post = await Post.findById(postId)
        if(!post){
            res.status(400).json({error:"invalid post id"});
        }

        res.status(200).json(post);
    }
    catch{
        res.status(500).json({error:"Internal error"});
    }
}

export const fetchPostTitles = async(req,res)=>{
    try{
       
        const posts = await Post.find({},
            { 
            _id: 1, 
            title: 1,  
            createdAt: 0,
            content: 0,
            comments: 0
            });
        if(!posts){
            res.status(400).json({error:"Could not retrieve posts"});
        }

        res.status(200).json(posts);
    }
    catch{
        res.status(500).json({error:"Internal error"});
    }
}

