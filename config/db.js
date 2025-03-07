require('dotenv').config(); //carga las variables de entorno NUEVO DE CUANDO HA METIDO LAS CREDENTIALS DE ENV

//es la lógica que tenemos en server y solo va a la base de datos
const mongoose = require('mongoose');

//const MONGO_URI = 'mongodb://localhost:27017/sensores';
const MONGO_URI = process.env.MONGO_CREDENTIALS || 'mongodb://localhost:27017/sensores'; //o coge la variable de entorno o la configuración estándar, para que funcione en cualquier situación

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Conexión a MongoDB establecida');
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
