import { request } from "http";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    
    const checkAuth = false;

    if(checkAuth) {
        return NextResponse.next();
    }

    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
}

export const config = {
    matcher: "/posts",
}