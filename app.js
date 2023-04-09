require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
  });

  app.listen(process.env.PORT, () => {
    console.log(`La aplicación está corriendo en el puerto ${process.env.PORT}`);
  });