import { apiClient } from "./client";

export const getAllUserStables = async () => {
    try {
        const response = await apiClient.get('/stables');

        return response.data
    } catch(error) {
        console.error('Error getting users stables:', error);
        throw error;
    }
}