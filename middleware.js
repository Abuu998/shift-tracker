
export function middleware(req) {

    if(req.method === 'OPTIONS') {
        return new Response({}, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': `https://shift-tracker.netlify.app`,
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
            },
        })
    }
}


export const config = {
    matcher: "/api/:path*"
}
