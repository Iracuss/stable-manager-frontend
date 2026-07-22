import { apiClient } from "./client";

export const getAllUserStables = async () => {
    try {
        // Check if we have a token first but for test this is fine
        const response = await apiClient.get('/stables');

        return response
    } catch(error) {
        console.error('Error getting users stables:', error);
        throw error;
    }
}