import { sequelize } from "../services/pg_sequelize.js";

export const getLoginUnicoModel = async (id) => {
    const data = await sequelize.query("select * from login where id = :id_l", {
        replacements : {
            id_l: id
        }
    });
    return data[0]
}