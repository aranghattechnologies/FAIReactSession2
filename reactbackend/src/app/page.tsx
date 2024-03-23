import Image from "next/image";
import { http } from "./services/http";
import Link from "next/link";
import { loadToDoItems } from "./services/ToDoServices";


export default async function Home() {

   throw new Error("Sorry could not load the data");
   let toDoItems = await loadToDoItems();

  return (
    <main className="container">
      <Link href="/todo" className="btn btn-primary mt-4">Add New Task</Link>
       <div  className="list-group mt-4">
      {toDoItems.map((item:any) => (
       
           <div key={item.id} className="list-group-item">{item.title}</div>
       
      ))} </div>
    </main>
  );
}
