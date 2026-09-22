const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json([
        {
    nome: "Apex Pro TKL",
    preco: 999.90,
    categoria: "Teclados Gamer",
    imagem: "https://content1.rozetka.com.ua/goods/images/big/531569576.jpg"
},
        {
            nome: "Mouse Gamer",
            preco: 149.90,
            categoria: "Periféricos",
            imagem: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=500&q=80"
        },
        {
            nome: "Headset Gamer",
            preco: 249.90,
            categoria: "Áudio",
            imagem: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=500&q=80"
        }
    ]);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});