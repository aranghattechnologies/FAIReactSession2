import { useState } from "react";
import { set } from "react-hook-form";

type ToDoItem = {
    title: string;
    isComplete: boolean;
}

export default function ToDo(){

    let [toDoList,setToDoList] = useState<ToDoItem[]>([]);
    let [currentTask,setCurrentTask] = useState<string>("");    

    function addTask() {
        if(currentTask === "")
            return;

        setToDoList([...toDoList, {title: currentTask, isComplete: false}]);
        setCurrentTask("");
    }

    function setItemToCompleted(index: number) {
        let item = toDoList[index];
        item.isComplete = true;
        setToDoList([...toDoList]);
    }

    function deleteItem(index: number) {
        toDoList.splice(index,1);
        setToDoList([...toDoList]);
    }

    return (
        <div className="container">
            <div className="input-group mt-4">
            <input type="text" placeholder="Enter the task"
             className="form-control"
            onChange={(event) => {setCurrentTask(event.target.value)}}
        />
        <div className="input-group-append">
            <button type="button" className="btn btn-primary" onClick={addTask}>Add</button>
        </div>
            </div>
            <select>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
            </select>
            <ul className="list-group mt-4">
                {toDoList.map((item, index) => {
                    return <li key={"todo_" + index} className="list-group-item">
                         <div className="row">
                            <div className="col">
                               <h4> {item.title}</h4>
                            </div>
                            <div className="col">
                                <div className={item.isComplete ? "text-success" : "text-danger"}>
                                    {item.isComplete ? "Completed" : "Pending"}
                                </div>
                            </div>
                            <div className="col-auto">
                                { !item.isComplete && 
                                    <button type="button" className="btn btn-success" onClick={()=>setItemToCompleted(index)}>
                                        Mark as Complete
                                    </button>
                                }
                            </div>
                            <div className="col-auto">
                                <button type="button" className="btn btn-danger"
                                onClick={()=>deleteItem(index)}
                                >
                                    <i className="bi bi-trash"></i> Delete
                                </button>
                            </div>
                         </div>
                      </li>
                })}
            </ul>
        </div>
    );
}