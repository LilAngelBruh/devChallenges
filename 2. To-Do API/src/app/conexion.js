import {Sequelize} from 'sequelize';
import 'dotenv/config'

const HOST = process.env.DB_HOST
const DB = process.env.DB_NAME
const PASS = process.env.DB_PASS
const USER = process.env.DB_USER

const sequelize = new Sequelize(DB, USER, PASS, {host: HOST, dialect: "mysql"})

export default sequelize