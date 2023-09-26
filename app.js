import express from 'express';
import { foroRouter } from './src/routes/routes.js';
import { dbStart } from './src/config/foro_db.js';
import  cors  from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const port = 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname);

app.use(express.json());
app.use(cors())
app.use('/', foroRouter);
app.use(express.static(path.join(__dirname, "src", "public")))
app.set('views', path.join(__dirname, "src", "views"))




app.listen(port, () => {
    console.log(`Server Listening http://localhost:${port}`);
    dbStart();
})

// Servidor Básico
//app.get('/',(req,res) => {
//    res.send('SERVIDOR PREPARADO');
//})
