import db from "@/prisma";
import { connectToDb } from "@/utilities/db";
import { NextResponse } from "next/server";
import { generateAccessToken, verifyAccessToken, verifyRefreshToken } from "@/utilities/utils";
import { cookies } from "next/headers";

export const POST = async (req) => {
    try {
        
        const cookieStore = cookies()
        const accToken = cookieStore.get("shiftTrackerAcc")
        console.log(accToken)

        // const { token, id } = await req.json()

        // if(!token) return NextResponse.json({ error: "Unauthorized", success: false }, { status: 403 })

        // const payload = verifyAccessToken(token)

        // if(!payload) {
        //     await connectToDb()

        //     const findUser = await db.user.findFirst({ where: { id } })

        //     if(!findUser) return NextResponse.json({ error: "Unauthorized", success: false }, { status: 403 })

        //     const isRefresh = verifyRefreshToken(findUser.refreshToken)

        //     if(!isRefresh) return NextResponse.json({ error: "Please Log in again", success: false }, { status: 400 })

        //     const accessToken = generateAccessToken({
        //         id: findUser.id,
        //         name: findUser.name,
        //     })

        //     return NextResponse.json({ token: accessToken, success: true }, { status: 200 })
            
        // }

        // const accessToken = generateAccessToken(payload)
        
        // return NextResponse.json({ token: accessToken, success: true }, { status: 200 })
        return NextResponse.json({ token: accToken, success: true }, { status: 200 })

    } catch (err) {
        NextResponse.json({ error: "Something went wrong", success: false }, { status: 500 })
    }
}
