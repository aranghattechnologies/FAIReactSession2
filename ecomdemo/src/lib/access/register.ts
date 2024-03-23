"use server";

import { redirect } from "next/navigation";
import { http } from "../common/http";

export async function registerUser(data:FormData) {
    //Create the register user object
    let user = {
        email: data.get("email"),
        password: data.get("password"),
        name: data.get("name")
    };
    
    console.log(user);

    try{
        //Send the user object to the server
        await http.post("/users", user);
       
    } catch (error) {
        console.error(error);
    }

    redirect("/login");
}

export async function checkIfEmailExist(email:string){
    var response = await http.get(`/users?email=${email}`);
    return response.length > 0;
}