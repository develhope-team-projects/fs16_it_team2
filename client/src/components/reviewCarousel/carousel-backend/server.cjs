const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { getReviews, updateByID, newReview, deleteReview } = require('./controllers/controllerCarousel.cjs'); // Adjust the path as needed
const app = express();
const port = 3030;

// Aggiungi il middleware cors all'inizio
 const corsOptions = {
  origin: 'http://localhost:5173', // Sostituisci con l'URL del tuo frontend React
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const connectToMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/friendzone', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

// Chiamata alla funzione di connessione asincrona
connectToMongoDB();

// Endpoint per ottenere tutte le recensioni
// Endpoint per ottenere tutte le recensioni
app.get('/api/reviews', getReviews );

app.post('/api/reviews/', newReview);

app.patch('/api/reviews/:id', updateByID);

app.delete('/api/reviews/:id', deleteReview);

// Avvio del server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
