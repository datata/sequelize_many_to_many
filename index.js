const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/welcome', (req, res) => {
    return res.send('Welcome to my app');
})

app.listen(3000, () => console.log('Server running'));