import axios from "axios";

axios.defaults.baseURL = `http://localhost:3000/api`

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

export function formatDate(dateString="") {
    const datetime = dateString
    
    const theDate = new Intl.DateTimeFormat(undefined, { dateStyle: "long" }).format(new Date(datetime))
    const theWDay = new Intl.DateTimeFormat(undefined, { weekday: "long" }).format(new Date(datetime))
    
    return `${theWDay}, ${theDate}`
}


export function formatHours(dateString="") {
    const datetime = dateString
    
    const theWDay = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" }).format(new Date(datetime))

    return theWDay
}


export function hoursDifference(start, end) {
    const hourStart = new Date(start).getTime()
    const hourEnd = new Date(end).getTime()

    const diffMs = Math.abs(hourEnd - hourStart)
    const totalMinute = Math.floor(diffMs / (1000 * 60))
    
    const days = Math.floor(totalMinute / (24 * 60))
    const hours = Math.floor((totalMinute - (days * 24 * 60)) / 60)
    const minutes = totalMinute - (days * 24 * 60) - (hours * 60)

    return `${makeTwoDigits(hours)} hours ${makeTwoDigits(minutes)} minutes`
}


function makeTwoDigits(number) {
    const strNumber = number.toString()

    if(strNumber.length === 1) {
        return `0${strNumber}`
    } else {
        return strNumber
    }
}
