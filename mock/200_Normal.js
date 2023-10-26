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
    const mockData = require('./res/db.json');
    res.status(200).json(mockData);
})

app.post('/api/postUserKey/', (req, res) => {
    const response = require('./res/key.json');
    console.log("req -> ", req.body.key)
    console.log("res -> ", response.data.key)
    if (req.body.key !== response.data.key) {
        throw new Error("Error Request parameter")
    }
    res.status(200).json(response);
});

//コンテンツデータ取得用
app.get('/api/getContents', (req, res) => {
    const mockData = require('./res/contentsData.json');
    res.status(200).json(mockData);
})

app.get('/api/getContents/:id', (req, res) => {
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
    console.log("req -> ", req.params.id)
    const mockDataLists = require('./res/contentsData.json');
    let mockArray = mockDataLists.contents
    const result = mockArray.filter(mockData => mockData.id === req.params.id);
    console.log("result -> ", result)
    res.status(200).json(result);
});

app.get('/api/getUserBio/:id', (req, res) => {
    const mockData = require('./res/key.json')
    res.status(200).json(mockData);
})
app.get('/api/getUserBio', (req, res) => {
    const key = req.params.id
    const mockData = require('./res/key.json')
    res.status(200).json(mockData);
})

// userList
app.get('/api/getUserList', (req, res) => {
    const mockData = require('./res/userInfo.json');
    res.status(200).json(mockData);
});

// userList
app.get('/api/getChartsData', (req, res) => {
    const mockData = require('./res/chartsData.json');
    res.status(200).json(mockData);
});

app.listen(port, () => {
    console.log(`Mock server is running on port ${port}`);
});



