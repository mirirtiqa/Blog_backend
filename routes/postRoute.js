import express from "express"
import { createPost,deletePost,fetchPost,fetchPostTitles } from "../controller/postController.js";
const postRoute = express.Router();

postRoute.post("/create",createPost)
postRoute.delete("/delete/:postId",deletePost)
postRoute.get("/getTitles",fetchPostTitles)
postRoute.get("/posts/getPost",fetchPost)


export default postRoute;