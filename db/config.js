import {config} from "dotenv";

config();

export default {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USUARIO,
    password: process.env.PASSWORD,
    port: process.env.PORT
};