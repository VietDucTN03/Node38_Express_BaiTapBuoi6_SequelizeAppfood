// express, mysql2, sequelize, sequelize-auto, nodemon, cors

import express from 'express';
import rootRoutes from './src/routes/rootRoutes.js';
import cors from "cors"

const app = express();
const port = 8082;

app.use(express.json());
app.use(cors());
app.use(rootRoutes);

app.get('/', (req, res) => {
    res.send('Hello Node 38 Sequelize App food');
});

app.listen(port, () => {
    console.log("Server running on port 8082");
});