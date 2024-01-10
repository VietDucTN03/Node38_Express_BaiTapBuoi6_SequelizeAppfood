import express from 'express';
import likeResRoutes from './likeResRoutes.js';
import rateResRoutes from './rateResRoutes.js';
import ordersRoutes from './ordersRoutes.js';

const rootRoutes = express.Router();

rootRoutes.use("/like-res", likeResRoutes);
rootRoutes.use("/rate-res", rateResRoutes);
rootRoutes.use("/order", ordersRoutes);

export default rootRoutes;