import { getLoginUnicoModel } from "../models/login.model.js";

export const getLoginUnico = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await getLoginUnicoModel(id);
        if (data && data.length > 0) {
            res.json(data[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export default {
    getLoginUnico
};