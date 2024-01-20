import axios from "@/axios.config";


export const getUserById = async (userId) => {
    try {
        const res = await axios.get(`/users/${userId}`)
    } catch (err) {
        
    }
}