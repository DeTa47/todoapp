export default function ToDoList({todo_objs}){
    return (
        <>
        {
            todo_objs.map((item)=><h3  key-={item} className={item}>{item}</h3>)
        }
        </>
    )
}