import axios from "@/axios.config";


export const getUserById = async (userId) => {
    try {
        const res = await axios.get(`/users/${userId}`)

        return res.data
    } catch (err) {
        return null
    }
}

export const getAllUsersShifts = async (userId) => {
    try {
        const res = await axios.get(`/users/${userId}/shifts`)

        return res.data
    } catch (err) {
        return null
    }
}

export const startShift = async (shiftId) => {
    try {
        await axios.put(`/shifts/${shiftId}`, {
            start: new Date().toUTCString(),
            status: "IN_PROGRESS"
        }, {
            headers: {
                Accept: "application/json"
            }
        })
    } catch (err) {
        return null
    }
}

export const endShift = async (shiftId) => {
    try {
        await axios.put(`/shifts/${shiftId}`, {
            end: new Date().toUTCString(),
            status: "ENDED"
        }, {
            headers: {
                Accept: "application/json"
            }
        })
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