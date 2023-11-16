import axios from 'axios'
const API_URL = 'https://data.jsdelivr.com/v1'

export const fetchPackages = async (params) => {
    try {
        const response = await axios.get(`${API_URL}/stats/packages`, {
            params: params
        })
        return response
    } catch (error) {
        console.error('Error fetching packages:', error)
        throw error
    }
}
