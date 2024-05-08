import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json();
    if (data) {
        if (data.email === "msubhanr53@gmail.com" && data.password === "test123") {
            cookies().set("accessToken", "test123");
            return await NextResponse.json({succes: "Login Success"});
        }   
    }
    return await NextResponse.json({error: "Login Failed"},{status: 400});
}