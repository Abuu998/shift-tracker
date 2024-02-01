import db from "@/prisma"
import { connectToDb } from "@/utilities/db"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        await connectToDb()

        const select = {
            id: true,
            name: true,
            email: true,
            image: true
        }

        const allUsers = await db.user.findMany()

        return NextResponse.json({ data: allUsers, success: true }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong!", success: false }, { status: 500 })
    }
}