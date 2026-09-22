const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        nome: 'Teclado Mecânico',
        preco: 199.90,
        categoria: 'Periféricos'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});