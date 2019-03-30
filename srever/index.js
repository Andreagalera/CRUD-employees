const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//Configuración servidor
//Puerto
app.set('port', process.env.PORT || 3000);

//Middlewares: procesar datos
app.use(morgan('dev'));
    //servidor entienda formato json
app.use(express.json());

//Routes
app.use('/api/employees',require('./routes/employee.routes'));

//Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});