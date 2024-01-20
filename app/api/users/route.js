import db from "@/prisma"
import { connectToDb } from "@/utilities/db"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        await connectToDb()

        const allUsers = await db.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                image: true
            }
        })

        return NextResponse.json(allUsers, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong!" }, { status: 500 })
    }
}