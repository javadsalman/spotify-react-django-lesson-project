import axios from "axios";

const baseURL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000' : 'https://my-domain.com'

const iaxios = axios.create({
    baseURL: baseURL,
});

export default iaxios