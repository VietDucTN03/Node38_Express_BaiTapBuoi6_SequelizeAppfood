import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const postOrder = async (req, res) => {
    try {
        let {user_id, food_id, amount, code, arr_sub_id} = req.body;
        let newOrder = {
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id,
        }
        await conn.orders.create(newOrder);
        res.send("Create order successfull!");
    } catch(error) {
        res.send(`BE error: ${error}`);
    }
}

export {
    postOrder,
}