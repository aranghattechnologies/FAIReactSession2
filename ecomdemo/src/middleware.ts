import { NextRequest, NextResponse } from "next/server";

import { isUserLoggedIn } from "./lib/access/util";

export async function middleware(request:NextRequest){
    let isAuthenticated = await isUserLoggedIn();

    if(!(request.url.includes("/login") 
        || request.url.includes("/register")
        || request.url.includes(".css")))
    {
        if(!isAuthenticated)
             return NextResponse.redirect(new URL("/login",request.url));
    }

}

export const config = {
    matcher : ""
}