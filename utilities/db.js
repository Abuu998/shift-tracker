import db from "@/prisma"


export const connectToDb = async () => {
    try {
        await db.$connect()
    } catch (err) {
        return err.message
    }
} 