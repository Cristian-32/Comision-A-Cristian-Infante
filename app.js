import express from 'express';
import { foroRouter } from './src/routes/routes.js';

const app = express();

const port = 3000;

app.use('/', foroRouter);


// Servidor Básico
//app.get('/',(req,res) => {
//    res.send('SERVIDOR PREPARADO');
//})

app.listen(port, () => {
    console.log('Server Listening http://localhost:',port);
})

