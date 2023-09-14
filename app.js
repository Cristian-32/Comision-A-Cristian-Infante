import express from 'express';

const app = express();

const port = 3000;

// Servidor Básico

app.get('/',(req,res) => {
    res.send('SERVIDOR PREPARADO');
})

app.listen(port, () => {
    console.log('Server Listening http://localhost:',port);
})

