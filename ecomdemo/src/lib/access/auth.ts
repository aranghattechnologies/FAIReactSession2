"use server";
import { cookies } from "next/headers";
import { http } from "../common/http";
import jwt from "jsonwebtoken";

export async function login(preState:any, data:FormData) {
    
    let email    = data.get("email");
    let password = data.get("password");

    let response = await http.get("/users?email="+email+"&password="+password);
    if(response.length > 0)
    {
        //User login is successful
        console.log("User login is successful");
        let user  = response[0];
        let token = jwt.sign({id:user.id,name : user.name},"secretkey",{expiresIn:"1h"});

        //Store the token cookie
        cookies().set("token",token,{httpOnly:true});

        return { status : "success"}
    }

    return { status : "failed"}
}

export async function getSession()
{
    const token = cookies().get("token");
    if(token)
    {
        try{
            let session = jwt.verify(token.value,"secretkey");
            return session
        }catch(e)
        {
            console.log("Invalid token",e);
            return {status:"failed"};
        }
    }
    else
        console.log("No token found");

    return null;
}