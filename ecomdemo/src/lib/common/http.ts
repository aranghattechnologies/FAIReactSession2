export class http {

    static baseUrl:string = "http://localhost:8080";

    static async get(url:string) {
        const response = await fetch(`${http.baseUrl}${url}`,{ "cache": "no-store" });
        return await response.json();
    }

    static async post(url:string, data:any) {
        const response = await fetch(`${http.baseUrl}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    static async put(url:string, data:any) {
        const response = await fetch(`${http.baseUrl}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    static async delete(url:string) {
        const response = await fetch(`${http.baseUrl}${url}`, {
            method: 'DELETE'
        });
        return await response.json();
    }

}