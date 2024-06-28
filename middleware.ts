import { NextResponse } from "next/server"

const middleware = (request:any) => {
    // return new NextResponse("Hello, Next.js!") 
    // return NextResponse.redirect(new URL("/", request.url)) 
}

export default middleware;

export const config = {
    matcher: ['/todos'],
}