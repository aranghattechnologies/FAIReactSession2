"use server"

import { http } from "./http";

export async function saveFormData(preState:any,formData:FormData)
{
    let data = {
        title: formData.get("title"),
        completed: false
    }

    console.log(data);
    try{
    await http.post("/todo",data);
    }
    catch(e){
        throw new Error(JSON.stringify({message : "Sorry could not save the data",type : "apiError"}));
    }
    //redirect("/");
    return {message : "Data saved successfully"};

}

export async function loadToDoItems()
{
    let response  = await http.get("/todo");
    return await response.json();
}
