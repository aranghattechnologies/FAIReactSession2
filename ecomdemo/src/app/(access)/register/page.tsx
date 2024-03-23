"use client";

import { registerUser } from "@/lib/access/register";
import { useEffect, useState } from "react";

export default function Register() {

    let [email,setEmail] = useState("");
    let [emailExist,setEmailExist] = useState(false);

    useEffect(()=>{
        if(email.length >=3)
        {
            fetch(`/api/users/${email}`)
            .then(response=>response.json())
            .then(data=>{
                setEmailExist(data.userexist);
            });
        }

    },[email]);

    return (
        <main className="container">
            <h1>Register</h1>
            <form action={registerUser}>
            <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" required className="form-control" id="name" name="name" placeholder="Enter Your Name" />
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="email">Email *</label>
                    <input type="email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    required className="form-control" id="email" name="email" placeholder="Enter email" />
                    {emailExist && <div className="text-danger mt-2">Email already exist</div>}
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="password">Password *</label>
                    <input type="password" required className="form-control" id="password" name="password" placeholder="Password" />
                </div>
            
                <button type="submit" disabled={emailExist} className="btn btn-primary mt-4">Register</button>
            </form>
        </main>
    );
}