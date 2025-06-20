'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

// Configurar Pug como el motor de plantillas
app.set('view engine', 'pug');
// Especificar la carpeta de vistas (relativa al directorio del proyecto)
app.set('views', './views/pug');
fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/').get((req, res) => {
  // res.render('index'); // Renderiza views/pug/index.pug //01
  res.render('index', { title: 'Hello', message: 'Please log in' }); //02
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Usa el puerto ' + PORT);
});

