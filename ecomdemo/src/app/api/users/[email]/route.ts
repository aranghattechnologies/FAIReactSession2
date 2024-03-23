import { checkIfEmailExist } from "@/lib/access/register";

export async function GET(req:Request,{params}:{params:{email:string}}){
    var isUserExist = await checkIfEmailExist(params.email);
    return Response.json({userexist:isUserExist});
}

