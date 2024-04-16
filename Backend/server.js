const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

// API endpoint to get users
app.get('/users', (req, res) => {
    db.getUsers((err, users) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(users);
    });
});

// Define other API endpoints and CRUD operations here

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
