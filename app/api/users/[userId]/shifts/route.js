import db from "@/prisma"
import { connectToDb } from "@/utilities/db"
import { NextResponse } from "next/server"

export const GET = async (request, { params: { userId } }) => {
    try {
        await connectToDb()

        const userShifts = await db.shift.findMany({
            where: { workerId: userId }
        })

        return NextResponse.json({ shifts: [...userShifts], success: true }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong!", success: false }, { status: 500 })
    }
}
