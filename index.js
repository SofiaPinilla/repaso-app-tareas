const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const { dbConnection } = require("./config/config");
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')
app.use(express.json());

dbConnection();

app.use('/tasks',require('./routes/tasks'))

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))
app.listen(port, () => console.log("Servidor levantado en el puerto " + port));
