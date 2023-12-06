const Review = require('../models/modelCarousel.cjs'); 


const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find();

        console.log('Reviews:', reviews); // Log per verificare i dati
        res.json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// controllerCarousel.cjs
const newReview = async (req, res) => {
    try {
        const { name, paragraph } = req.body;
        const newReview = new Review({ name, paragraph });
        const savedReview = await newReview.save();
        res.status(201).json({ msg: 'New review added', review: savedReview });
    } catch (error) {
        console.error('Error adding new review:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const updateByID = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const { name, paragraph } = req.body; // Fix the object destructuring

        // Use findById to find the review by ID
        const findReview = await Review.findById(reviewId);

        // Check if the review exists
        if (!findReview) {
            return res.status(404).json({ error: 'Review not found' });
        }

        // Update the review fields
        findReview.name = name;
        findReview.paragraph = paragraph;

        // Save the updated review to the database
        const updatedReview = await findReview.save();

        res.json(updatedReview);
    } catch (error) {
        console.error('Error updating review:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// controllerCarousel.cjs
const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        // Filtra le recensioni che non corrispondono all'id da eliminare
        const updatedReviews = Review.filter((rev) => rev.id !== Number(id));
        // Sovrascrivi l'array Review con quello aggiornato
        Review = updatedReviews;
        res.status(200).json({ msg: "Review deleted." });
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = { getReviews,  updateByID, newReview, deleteReview };