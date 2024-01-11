import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const getLikeResID = async (req, res) => {
    try {
        let { resID } = req.params;
        let likeRes = await conn.like_res.findAll({
            where: {
                res_id: resID,
            },
            include: [
                {
                    model: conn.users, 
                    as: 'user',
                    attributes: ['user_id', 'full_name', 'email', 'password'], 
                }
            ],
        });
        res.send(likeRes);
    } catch(error) {
        res.send(`BE error: ${error}`);
    }
};

const getLikeUserID = async (req, res) => {
    try {
        let { userID } = req.params;
        let likeUser = await conn.like_res.findAll({
            where: {
                user_id: userID,
            },
            include: [
                {
                    model: conn.restaurant,
                    as: 're',
                    attributes: ['res_id', 'res_name', 'image', 'description'],
                }
            ]
        });
        res.send(likeUser);
    } catch(error) {
        res.send(`BE error: ${error}`);
    }
}

const postLikeRes = async (req, res) => {
    try {
        let {user_id, res_id, date_like} = req.body;
        let newLikeRes = {
            user_id,
            res_id,
            date_like,
        }
        await conn.like_res.create(newLikeRes);
        res.send("Create like res successfull!");
    } catch(error) {
        res.send(`BE error: ${error}`);
    }
};

const deleteLikeRes = async (req, res) => {
    try {
        let {likeID} = req.params;
        await conn.like_res.destroy({
            where: {
                like_id: likeID,
            }
        });
        res.send("Delete video successfull!");
    } catch(error) {
        res.send(`BE error: ${error}`);
    }
};

export {
    getLikeResID,
    getLikeUserID,
    postLikeRes,
    deleteLikeRes,
}