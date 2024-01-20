import axios from "@/axios.config";

export const signupUser = async (formData={}) => {
    try {
        const res = await axios.post("/register", {...formData}, {
            headers: {
                Accept: "application/json"
            }
        })

        return res.data
    } catch (err) {
        return err
    }
} 

export const sanitizeData = (formData={}) => {
    const name = formData.name.split(' ').map(ch => `${ch.slice(0, 1).toUpperCase()}${ch.slice(1).toLowerCase()}`).join(' ')
    const email = formData.email.toLowerCase()

    return {
        name,
        email,
        password: formData.password
    }
}