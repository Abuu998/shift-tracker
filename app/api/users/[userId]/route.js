import db from "@/prisma"
import { connectToDb } from "@/utilities/db"
import { NextResponse } from "next/server"

export const GET = async (request, { params: { userId } }) => {
    try {
        await connectToDb()

        const user = await db.user.findFirst({
            where: { id: userId }
        })

        if(!user) return NextResponse.json({ error: "User does not exist.", success: false }, { status: 404 })

        const foundUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image
        }

        return NextResponse.json({ user: foundUser, success: true }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong!", success: false }, { status: 500 })
    }
}

export const PUT = async (request, { params: { userId } }) => {
    try {
        const body = await request.json()

        await connectToDb()

        const user = await db.user.findFirst({
            where: { id: userId }
        })

        if(!user) return NextResponse.json({ error: "User does not exist.", success: false }, { status: 404 })

        const updatedUser = await db.user.update({
            data: { ...body },
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                image: true
            }
        })

        return NextResponse.json({ user: updatedUser, success: true }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong!", success: false }, { status: 500 })
    }
}

export const DELETE = async (request, { params: { userId } }) => {
    try {
        await connectToDb()

        const user = await db.user.findFirst({
            where: { id: userId }
        })

        if(!user) return NextResponse.json({ error: "User does not exist.", success: false }, { status: 404 })

        await db.user.delete({
            where: { id: userId }
        })

        return NextResponse.json({ message: "User deleted successfuly!", success: true }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong!", success: false }, { status: 500 })
    }
}