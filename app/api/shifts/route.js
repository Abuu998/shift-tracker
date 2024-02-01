import { NextResponse } from "next/server";
import db from "@/prisma";
import { connectToDb } from "@/utilities/db";

// CREATE NEW SHIFT
export const POST = async (request) => {
    try {
        const { workerId } = await request.json()

        await connectToDb()

        const findUser = await db.user.findFirst({ where: { id: workerId } })

        if(!findUser) return NextResponse.json({ error: "Unauthorized", success: false }, { status: 403 })

        const newShift = await db.shift.create({
            data: {
                workerId
            }
        })

        return NextResponse.json({ data: newShift, success: true }, { status: 201 })
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong!", success: false }, { status: 500 })
    }
}

export const GET = async () => {
    try {
        await connectToDb()

        const allShifts = await db.shift.findMany()

        return NextResponse.json({ data: allShifts, success: true }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong!", success: false }, { status: 500 })
    }
}