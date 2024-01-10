import express from 'express';
import { getRateResID, getRateUserID, postRateRes } from '../controllers/rateResControllers.js';

const rateResRoutes = express.Router();

rateResRoutes.get("/get-rateResID/:resID", getRateResID);
rateResRoutes.get("/get-rateUserID/:userID", getRateUserID);
rateResRoutes.post("/create-review", postRateRes);

export default rateResRoutes;