// API Route
interface keyMap {
    [key: string]: string;
}
// API Endpoint
const url: keyMap = {
    getUserInfo: '/api/getUserInfo',
    getUserAuth: '/api/getUserAuth'
};

export default url;