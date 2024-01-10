import express from 'express';
import { deleteLikeRes, getLikeResID, getLikeUserID, postLikeRes } from '../controllers/likeResControllers.js';

const likeResRoutes = express.Router();

likeResRoutes.get("/get-likeResID/:resID", getLikeResID);
likeResRoutes.get("/get-likeUserID/:userID", getLikeUserID);
likeResRoutes.post("/create-like-res", postLikeRes);
likeResRoutes.delete("/delete-like-res/:likeID", deleteLikeRes);

export default likeResRoutes;