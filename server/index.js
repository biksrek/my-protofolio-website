const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.post('/api/contact', (req, res) => {
    const { name, email, type, message } = req.body;

    // Here you would typically send an email or save to database
    console.log('New Contact Form Submission:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Type: ${type}`);
    console.log(`Message: ${message}`);

    // Simulate success
    res.status(200).json({ success: true, message: 'Message received successfully!' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
