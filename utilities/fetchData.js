import axios from "@/axios.config";


export const getUserById = async (userId) => {
    try {
        const res = await axios.get(`/users/${userId}`)

        return res.data
    } catch (err) {
        return null
    }
}

export const startNewShift = async (userId) => {
    try {
        await axios.post("/shifts", {
            workerId: userId
        }, {
            headers: {
                Accept: "application/json"
            }
        })
    } catch (err) {
        return null
    }
}