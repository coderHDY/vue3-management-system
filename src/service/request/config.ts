let BASE_URL = '';
const TIME_OUT = 2000;
if (process.env.NODE_ENV === 'production') {
    BASE_URL = '生产环境url';
} else if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:8888';
} else {
    BASE_URL = '测试环境url';
}

export { BASE_URL, TIME_OUT };
