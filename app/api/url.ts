// API Route
interface keyMap {
    [key: string]: string;
}
// API Endpoint
const url: keyMap = {
    getUserInfo: '/api/getUserInfo',
    getUserAuth: '/api/getUserAuth',
    getContents: '/api/getContents',
    getCurrentUserInfo: '/api/getUserAuth/:email'
};

export default url;