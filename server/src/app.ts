import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer'; // For handling file uploads
import { imageRoutes } from './routes/imageRoutes';

// Initialize express app
const app = express();
const port = process.env.PORT || 5000; // Set the port

// Initialize multer for file uploads
// Configure storage (In memory storage for this example)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Apply middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support URL-encoded bodies

// Routes
app.use('/api/images', imageRoutes(upload)); // Pass 'upload' to handle file uploads in routes

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Image Prediction API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

