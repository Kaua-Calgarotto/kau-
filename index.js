
import express from 'express';
const app = express();

const port = 8080;
//npm install nodemon --save-dev
app.get('/', (req, res) => {
    res.json({ "Mesagem": "Hello Worçd!" });
})
app.listen(port, () => {
    let data = new Date();
    console.log(`Servidor iniciado em: ${data}`)
})