import { NextResponse } from "next/server";
import NextCors from 'nextjs-cors';
// import corsMiddleware from "./middleware/cors";

export function middleware(req) {
    // retrieve the current response
    // const res = NextResponse.next()

    // await NextCors(req, res, {
    //     // Options
    //     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    //     origin: 'http://localhost:5173',
    //     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    // });

    if(req.method === 'OPTIONS') {
        return new Response({}, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': `${process.env.ALLOWED_ORIGIN}`,
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
            },
        })
    }
}


export const config = {
    matcher: "/api/:path*"
}
