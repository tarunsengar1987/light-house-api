const db = require("../config/db");
const MockData = db.mockData;
const Op = db.Sequelize.Op;

exports.getClients = async (req, res) => {
    try {
        const response = await MockData.findAll({ group: 'client', attributes: ['client'] });
        return res.status(200).send({ status: true, data: response, message: 'Clients fetched successfully' });
    } catch (err) {
        return res.status(500).send({
            status: false,
            message: err.message || "Some error occurred while retrieving clients."
        });
    };
}

exports.getChartData = async (req, res) => {

    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    const client = req.query.client ? req.query.client : "";
    try {
        const where = { client };
        if (startDate && endDate) {
            where['timestamp'] = { [Op.between]: [startDate, endDate] }
        }
        const response = await MockData.findAll({ where, raw: true });
        return res.status(200).send({ status: true, data: response, message: 'Chart data fetched successfully' });
    } catch (err) {
        return res.status(500).send({
            status: false,
            message: err.message || "Some error occurred while retrieving charts data."
        });
    };
}