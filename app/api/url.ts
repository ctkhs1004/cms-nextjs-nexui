// API Route
interface keyMap {
    [key: string]: string;
}

// API Endpoint
const url: keyMap = {
    getUserInfo: '/api/getUserInfo',
    getUserAuth: '/api/getUserAuth',
    getContents: '/api/getContents',
    getCurrentUserInfo: '/api/getUserAuth/:email',
    getUserList: '/api/getUserList',
    getChartsData: '/api/getChartsData',
    postUserKey: '/api/postUserKey/',
    getUserBio: '/api/getUserBio/:key'
};

export default url;