export class http{
    static baseUrl:string = "http://localhost:8080";

    static async get(url:string){
        return await fetch(this.baseUrl + url,{"cache" : "no-cache"});
    }

    static async post(url:string,data:any){
        return await fetch(this.baseUrl + url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    }

}