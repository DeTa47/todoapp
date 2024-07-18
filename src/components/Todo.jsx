import Form from "./Form";
import ToDoList from "./ToDoList";
import { useState } from "react";

export default function Todo(){
    
    const [todos, setTodos] = useState([]);
    return <div>
        <Form todos={todos} setTodos={setTodos}/>
        <ToDoList todo_objs={todos}/>
    </div>;
}