import express from 'express';
import { postOrder } from '../controllers/orderControllers.js';

const ordersRoutes = express.Router();

ordersRoutes.post("/create-order", postOrder);

export default ordersRoutes;

