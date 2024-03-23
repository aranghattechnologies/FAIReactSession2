'use client';

import { login } from "@/lib/access/auth"
import { Suspense, useEffect } from "react";
import { useFormState } from "react-dom"

export default function Login(){

    let [state,formState] = useFormState(login,{status:""});

    useEffect(()=>{
        if(state.status == "success")
        {
            window.location.href = "/";
        }
    },[state]);

    return(
        <main className="container">
            <h1>Login</h1>
                <form action={formState}>
                    {state.status == "failed" && <div className="p-1 text-center alert alert-danger text-danger">Invalid email or password</div>}
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" required className="form-control" id="email" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="password">Password *</label>
                        <input type="password" required className="form-control" id="password" name="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Login</button>
                </form>
        </main>
    )
}