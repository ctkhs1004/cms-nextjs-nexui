const express = require('express');
const cors = require('cors');
const mockData = require("./res/400_Error.json");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get('/api/getUserInfo', (req, res) => {
    const mockData = require('./res/200_Normal.json');
    res.status(200).json(mockData);
});
app.get('/api/getUserAuth', (req, res) => {
    const mockData = require('./res/db.json');
    res.status(200).json(mockData);
})

app.get('/api/getUserKey', (req, res) => {
    const mockData = require('./res/key.json');
    res.status(200).json(mockData);
})

app.listen(port, () => {
    console.log(`Mock server is running on port ${port}`);
});
