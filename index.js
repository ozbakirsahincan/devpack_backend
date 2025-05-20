import express from 'express';
import dotenv from 'dotenv';
import applyMiddlewares from './src/middlewares/globalMiddlewares.js';
import { AppDataSource } from './config/db/data-source.js';

dotenv.config();

const app = express();

// Ortak middleware'leri uygula
applyMiddlewares(app);

app.get('/', (req, res) => {
  res.send('DevPack Backend API çalışıyor 🚀');
});

AppDataSource.initialize()
    .then(() => {
        console.log('Database connection established successfully');

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`API ${PORT} portunda ayakta`);
        });
    })
    .catch((error) => {
        console.error('Database connection failed:', error);
        process.exit(1); // Uygulamayı durdur
    });
