import db from "@/prisma"
import { connectToDb } from "@/utilities/db"
import { NextResponse } from "next/server"

export const GET = async (request, { params: { shiftId } }) => {
    try {
        await connectToDb()

        const shift = await db.shift.findFirst({
            where: { id: shiftId }
        })

        if(!shift) return NextResponse.json({ message: "Shift does not exist.", success: false }, { status: 404 })

        return NextResponse.json({ shift: shift, success: true }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "Something went wrong!", success: false }, { status: 500 })
    }
}

export const PUT = async (request, { params: { shiftId } }) => {
    try {
        const body = await request.json()

        await connectToDb()

        const shift = await db.shift.findFirst({
            where: { id: shiftId }
        })

        if(!shift) return NextResponse.json({ error: "Shift does not exist.", success: false }, { status: 404 })

        const updatedShift = await db.shift.update({
            data: { ...body },
            where: { id: shiftId }
        })

        return NextResponse.json({ shift: updatedShift, success: true }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong!", success: false }, { status: 500 })
    }
}

export const DELETE = async (request, { params: { shiftId } }) => {
    try {
        await connectToDb()

        const shift = await db.shift.findFirst({
            where: { id: shiftId }
        })

        if(!shift) return NextResponse.json({ error: "Shift does not exist.", success: false }, { status: 404 })

        await db.shift.delete({
            where: { id: shiftId }
        })

        return NextResponse.json({ message: "Shift deleted successfuly!", success: true }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong!", success: false }, { status: 500 })
    }
}