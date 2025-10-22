import axios from "axios"
import { LANGUAGE_API_URL } from "./constants"

const axiosMaster = axios.create({
    baseURL: LANGUAGE_API_URL
})

axiosMaster.interceptors.request.use(
    config => {
    const token = localStorage.getItem("access");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config
    },
    error => {
        return Promise.reject(error);
    }
)

export default axiosMaster;