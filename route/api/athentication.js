const express = require('express');
const router = express.Router();
// Middleware to parse JSON bodies

router.use(express.json());

router.post('/registration', (req, res) => {
    console.log('Received a registration POST request!');
    res.send('Registration successful!');
});

module.exports = router;
