// API Route
interface keyMap {
    [key: string]: string;
}
// API Endpoint
const url: keyMap = {
    getUserInfo: '/api/getUserInfo',
    getUserAuth: '/api/getUserAuth',
    getUserKey: '/api/getUserKey',
    getCurrentUserInfo: '/api/getUserAuth/:email'
};

export default url;