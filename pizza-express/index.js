import express from 'express';
import cors from 'cors'; // uvoz cors paketa
const app = express();
const PORT = 3000;
// Postavljanje CORS opcija
const corsOptions = { 
origin: 'http://localhost:5173'
};

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
res.send('Dobrodošli u Pizza Express poslužitelj!');
});

import pizzeRouter from './routes/pizze.js';
app.use('/pizze', pizzeRouter); // dodavanje prefiksa "/pizze" za svaki endpoint iz pizze.js Routera

import narudzbeRouter from './routes/narudzbe.js';
app.use('/narudzbe', narudzbeRouter); // dodavanje prefiksa "/narudzbe" za svaki endpoint iz narudzbe.js Routera






app.listen(PORT, () => {
console.log(`Pizza poslužitelj sluša na portu ${PORT}`);
});

