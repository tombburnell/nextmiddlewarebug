import {NextRequest, NextResponse} from "next/server";



export async function middleware(request: NextRequest) {
    let response = NextResponse.next()

    console.log("MIDDLEWARE RESPONSE", response);

    return response
}