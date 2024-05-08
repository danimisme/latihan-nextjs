import { request } from "http";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    let checkAuth = false;
    
    const checkToken = request.cookies.get("accessToken");
    if (checkToken) {
        checkAuth = true;
    }

    if(checkAuth) {
        return NextResponse.next();
    }

    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
}

export const config = {
    matcher: "/posts",
}