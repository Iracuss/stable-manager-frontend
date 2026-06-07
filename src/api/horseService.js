import { apiClient } from "./client";

export const getAllHorses = async () => {
    try {
        const response = await apiClient.get('/horses');

        return response.data
    } catch(error) {
        console.error('Error fetching horses:', error);
        throw error;
    }
};