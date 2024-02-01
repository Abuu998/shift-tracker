import db from "@/prisma";
import { compare } from "bcrypt";
import { connectToDb } from "@/utilities/db";
import { NextResponse } from "next/server";
import { generateAccessToken, generateRefreshToken } from "@/utilities/utils";

export const POST = async (req) => {
    try {
        const { email, password } = await req.json()

        await connectToDb()

        const user = await db.user.findUnique({
            where: { email },
        })

        if(!user) return NextResponse.json({ error: "Invalid credentials", success: false }, { status: 403 })

        const isPass = await compare(password, user.password)

        if(!isPass) return NextResponse.json({ error: "Invalid email or password", success: false }, { status: 403 })

        const userPayload = {
            id: user.id,
            name: user.name,
        }

        const accessToken = generateAccessToken(userPayload)
        const refreshToken = generateRefreshToken(userPayload)

        await db.user.update({
            data: {
                ...user,
                refreshToken
            },
            where: {
                email: user.email
            }
        })

        const returnedUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            token: accessToken
        }

        return NextResponse.json({ user: returnedUser, message: "Login successful" , success: true }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong", success: false }, { status: 500 })
    }
}