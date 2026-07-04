import { apiClient } from "./client";

export const login = async () => {
    try {
        const response = await apiClient.post('/auth/login');

        return response.data
    } catch(error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}