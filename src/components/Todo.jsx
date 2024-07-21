import Footer from "./Footer";
import Form from "./Form";
import ToDoList from "./ToDoList";
import { useState } from "react";

export default function Todo(){
    
    const [todos, setTodos] = useState([]);
    const completed = todos.filter((todo)=>todo.done).length
    return <div>
        <Form todos={todos} setTodos={setTodos}/>
        <ToDoList todo_objs={todos} setTodos={setTodos}/>
        <Footer completed={completed} todos={todos}/>
    </div>;
}