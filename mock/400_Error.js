const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const mockData = require('/Users/takahashitooru/ReactPrograms/cms-nextjs-nexui/mock/res/400_Error.json');

app.use(express.json());
app.use(cors());

app.get('/api/getUserInfo', (req, res) => {
    // 获取查询参数 userId
    const userId = req.query.userId;


    // 检查 userId 是否无效（例如，没有提供或不是数字）
    if (!userId || isNaN(Number(userId))) {
        res.status(400).json(mockData);
        return;
    }

    // res.json(mockData);
});

app.listen(port, () => {
    console.log(`Mock server is running on port ${port}`);
});
