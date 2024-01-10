import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const getRateResID = async (req, res) => {
    try {
        let {resID} = req.params;
        let rateRes = await conn.rate_res.findAll({
            where: {
                res_id: resID,
            },
            // include: [
            //     {
            //         model: conn.users,
            //         as: 'user',
            //         attributes: ['user_id', 'full_name'],
            //     },
            //     {
            //         model: conn.restaurant,
            //         as: 're',
            //         attributes: ['res_id', 'res_name'],
            //     },
            // ]
        });
        res.send(rateRes);
    } catch(error) {
        res.send(`BE error: ${error}`);
    }
};

const getRateUserID = async (req, res) => {
    try {
        let { userID } = req.params;
        let rateUser = await conn.rate_res.findAll({
            where: {
                user_id: userID,
            },
        });
        res.send(rateUser);
    } catch(error) {
        res.send(`BE error: ${error}`);
    }
}

const postRateRes = async (req, res) => {
    try {   
        let {user_id, res_id, amount, date_rate} = req.body;
        let newRateRes = {
            user_id,
            res_id,
            amount,
            date_rate
        }
        await conn.rate_res.create(newRateRes)
        res.send("Create review successfull!");
    } catch(error) {
        res.send(`BE error: ${error}`);
    }
}

export {
    getRateResID,
    getRateUserID,
    postRateRes,
}