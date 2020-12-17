require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require("./routes");
const app = express();

const db = require("./config/db");
db.sequelize.sync();

const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(routes);



app.listen(PORT, () => {
    console.log(`Application running in ${PORT} port`);
});