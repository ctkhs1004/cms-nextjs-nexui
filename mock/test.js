const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.get('/api/data', (req, res) => {
    const mockData = require('/Users/takahashitooru/ReactPrograms/cms-nextjs-nexui/mock/res/test01.json');
    res.json(mockData);
});

app.listen(port, () => {
    console.log(`Mock server is running on port ${port}`);
});