import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Rota raiz FIXA (solução definitiva para o erro "Cannot GET /")
app.get('/', (req, res) => {
    console.log("Rota / acessada"); // Para debug no terminal
    res.json({
        date: new Date().toLocaleDateString('pt-BR'),
        time: new Date().toLocaleTimeString('pt-BR'),
        status: 'API funcionando!'
    });
});

const PORT = 3001; // Mudamos para evitar conflitos
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});