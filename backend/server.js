const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors'); 


// Importando as rotas de clientes
const clientRoutes = require('./routes/clientRoutes');

// Middleware para parsear JSON
app.use(express.json());

// Middleware CORS para permitir solicitações somente da origem 5173
app.use(cors({
    origin: '*'
  }));

// Rota básica para verificar se o servidor está funcionando
app.get('/', (req, res) => {
    res.send('Servidor rodando!');
});

// Conectando ao MongoDB
mongoose.connect('mongodb+srv://kauesantos:NYxKoTTBU3DKHh6Q@cluster0.9q82plf.mongodb.net/')
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.log('Erro ao conectar com o MongoDB:', err));

// Usando as rotas de clientes
app.use('/api/clients', clientRoutes);

// Configurando a porta que o servidor vai escutar
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server rodando em http://localhost:${PORT}`));
