const mongoose = require('mongoose');

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        console.log('MONGO CONECTADO')
    }
    catch(err) {
        console.log(err)
        throw new Error ('Error al conectar la base de datos')
    }
}

module.exports = {dbConnection};