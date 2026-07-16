import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt_token');

    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
})

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if(error.response && error.response.status == 401) {
            console.error("Token expired. Logging out...");
            localStorage.removeItem("jwt_token");
            localStorage.removeItem("user_info");
            window.location.href = "/auth";
        }
        return Promise.reject(error);
    }
)