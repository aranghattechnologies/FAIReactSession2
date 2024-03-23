'use client'

import { saveFormData } from "../services/ToDoServices";
import { useFormState } from "react-dom";

export default function EditToDo() {

    throw new Error("Sorry could not load the data");
    const [state,formState] = useFormState(saveFormData, {message : ""});

   function showMessageAtClient(){
            alert("Data Saved Successfully");
    }
    return (
        <main className="container">
            <h1>Edit To Do</h1>
            {state.message && <div className="alert alert-success">{state.message}</div>}
            <form action={formState}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title" className="form-control" id="title" required />
                </div>    
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <button type="button" onClick={showMessageAtClient}>
                Show Message
            </button>
        </main>
    );
}