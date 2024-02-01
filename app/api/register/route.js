import { NextResponse } from "next/server";
import db from "@/prisma";
import { connectToDb } from "@/utilities/db";
import { hash } from "bcrypt";

export const POST = async (request) => {
    try {
        const { name, email, password } = await request.json()

        await connectToDb()

        const existUser = await db.user.findUnique({ where: { email } })

        if(existUser) return NextResponse.json({ error: "Email belongs to another account!", success: false }, { status: 409 })

        const hashed = await hash(password, 10) 

        await db.user.create({
            data: {
                name, 
                email,
                password: hashed
            }
        })

        return NextResponse.json({ message: "User created Successfuly", success: true }, { status: 201 })
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong!", success: false }, { status: 500 })
    }
}