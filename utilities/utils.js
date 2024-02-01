import { sign, verify } from "jsonwebtoken";

const accessSecret = process.env.ACCESS_SECRET
const refreshSecret = process.env.REFRESH_SECRET


export const generateAccessToken = (payload={}) => {
    return sign(payload, accessSecret, { expiresIn: 30 })
}


export const generateRefreshToken = (payload={}) => {
    return sign(payload, refreshSecret, { expiresIn: "1m" })
}


export const verifyAccessToken = (token="") => {
    return verify(token, accessSecret)
}


export const verifyRefreshToken = (token="") => {
    return verify(token, refreshSecret)
}
