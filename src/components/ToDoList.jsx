import styles from './todolist.module.css';

export default function ToDoList({todo_objs, setTodos}){
   //let sortedTodos = todo_objs.slice().sort((a,b)=>Number(a.done)-Number(b.done));
    
    function handleDelete(item){
        setTodos(todo_objs.filter((todos)=>todos!==item)
        );
    }

    function handleCLick(item){
            setTodos(todo_objs.map((todo)=>todo.name === item.name?{...todo, done: !item.done}: todo))  
    }

    
    return (
        <>
        {
            todo_objs.map(
                (item)=><h3 className={styles.list} key={item.name}>
                            
                            <span onClick={()=>{handleCLick(item)}} className={item.done? styles.Completed : ""} >{item.name}</span>

                            <span ><button className={styles.deleteButton} onClick={()=>handleDelete(item)}>X</button></span>

                        </h3>)
        }
        </>
    )
}