import express from 'express';
import { foroRouter } from './src/routes/routes.js';
import { dbStart } from './src/config/foro_db.js';
import  cors  from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

const port = 3000;

// Servidor Básico
//app.get('/',(req,res) => {
//    res.send('SERVIDOR PREPARADO');
//})

app.use('/', foroRouter);

app.listen(port, () => {
    console.log('Server Listening http://localhost:',port);
    dbStart();
})

