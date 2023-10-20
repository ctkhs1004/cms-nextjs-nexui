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

//認証用
app.get('/api/getUserAuth', (req, res) => {
    const mockData = require('./res/db.json');
    res.status(200).json(mockData);
})

//ログインユーザー取得用
app.get('/api/getUserAuth/:email', (req, res) => {
    const userId = req.params.id;
    const mockData = require('./res/db.json');
    res.status(200).json(mockData);
})

//コンテンツデータ取得用
app.get('/api/getContents', (req, res) => {
    const mockData = require('./res/contentsData.json');
    res.status(200).json(mockData);
})

app.listen(port, () => {
    console.log(`Mock server is running on port ${port}`);
});

