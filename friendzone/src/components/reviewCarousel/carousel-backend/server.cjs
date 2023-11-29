const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3003;

// Aggiungi il middleware cors all'inizio
 const corsOptions = {
  origin: 'http://localhost:5173', // Sostituisci con l'URL del tuo frontend React
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
 

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

const reviewSchema = new mongoose.Schema({
  img: String,
  name: String,
  paragraph: String,
});

const Review = mongoose.model('Review', reviewSchema, 'reviews');

app.use(express.json());

// Endpoint per ottenere tutte le recensioni
// Endpoint per ottenere tutte le recensioni
app.get('/api/reviews', async (req, res) => {
  try {
    console.log('Before Review.find()'); // Aggiunto log
    const reviews = await Review.find(); 

    console.log('Reviews:', reviews); // Log per verificare i dati
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Avvio del server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
