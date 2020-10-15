import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path'
import db from './models';
import apiRoutes from './api/api.routes'
import compression from 'compression'

const config = require('./config').config;


const app = express();

const node_env = process.env.NODE_ENV || "development";
const PORT = +process.env.PORT || config.port;

//comprime todos los response
app.use(compression())

//middleware Body Parser
app.use(bodyParser.json())

//ej:localhost:3000/api/auth?email=jnjnd@lkd.com&password=ddiweiewwe
app.use(bodyParser.urlencoded({ extended: true }));
//middleware cors
app.use(cors());

app.use('/api', apiRoutes);
app.get('/', (req, res) => {
    res.send('welcome to me api');
});


//Conexcion a DB Sequelize 
db.sequelize
    .sync()
    .then((data) => {
        console.log('DB connection has been established successfully: \x1b[32m%s\x1b[0m', 'online');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

const server = app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Express server corriendo en el port ${PORT}: \x1b[32m%s\x1b[0m`, 'online');
    }
});