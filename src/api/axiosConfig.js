import axios from 'axios';

export default axios.create({
    baseURL:'https://3a42-123-24-59-112.ngrok-free.app/',
    headers:{"ngrok-skip-browser-warning": "true"}
});