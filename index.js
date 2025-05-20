import express from 'express';
import dotenv from 'dotenv';
import applyMiddlewares from './src/middlewares/globalMiddlewares.js';

dotenv.config();

const app = express();

// Ortak middleware'leri uygula
applyMiddlewares(app);

app.get('/', (req, res) => {
  res.send('DevPack Backend API çalışıyor 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API ${PORT} portunda ayakta`);
});
