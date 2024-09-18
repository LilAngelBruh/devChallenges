import sequelize from '../app/conexion.js';

export async function isAlive() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}