// API Route
interface keyMap {
    [key: string]: string;
}

// API Endpoint
const url: keyMap = {
    getUserInfo: '/api/getUserInfo',
    getUserAuth: '/api/getUserAuth',
    getContents: '/api/getContents',
    getUserContents: '/api/getUserContents/',
    getCurrentUser: '/api/getCurrentUser/',
    getUserList: '/api/getUserList',
    getChartsData: '/api/getChartsData',
    postUserKey: '/api/postUserKey/',
    getUserBio: '/api/getUserBio/'
};

export default url;