import db from "@/prisma"
import { connectToDb } from "@/utilities/db"
import { NextResponse } from "next/server"

export const GET = async (request, { params: { userId } }) => {
    try {
        await connectToDb()

        const user = await db.user.findFirst({
            where: { id: userId }
        })

        if(!user) return NextResponse.json({ error: "User does not exist." }, { status: 404 })

        const foundUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image
        }

        return NextResponse.json(foundUser, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong!" }, { status: 500 })
    }
}

export const PUT = async (request, { params: { userId } }) => {
    try {
        const body = await request.json()

        await connectToDb()

        const user = await db.user.findFirst({
            where: { id: userId }
        })

        if(!user) return NextResponse.json({ error: "User does not exist." }, { status: 404 })

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

        return NextResponse.json(updatedUser, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong!" }, { status: 500 })
    }
}

export const DELETE = async (request, { params: { userId } }) => {
    try {
        await connectToDb()

        const user = await db.user.findFirst({
            where: { id: userId }
        })

        if(!user) return NextResponse.json({ error: "User does not exist." }, { status: 404 })

        await db.user.delete({
            where: { id: userId }
        })

        return NextResponse.json({message: "User deleted successfuly!" }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong!" }, { status: 500 })
    }
}