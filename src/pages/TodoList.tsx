import { useContext, /*useEffect*/ } from "react"
import imageLogin from "../assets/pngwing.com (1).png"
import Context from "../context/Context"
import {Todo} from "../../api/todoApi"

function TodoList() {

    const {user, todos, getTodos, loading} = useContext(Context)

    // useEffect(() => {
    //     if(!todos.length) {
    //         getTodos();
    //     }
    // }, []);

    // [] => funciona na montagem do componente
    // [valor] => funciona como um didUpdate, que observa o valor no array de dependencias
    // sem nada => qualque atualização no estado desse componente roda o código do useEffect

    const handleCheck = (task:Todo) => {
        console.log(task);
        
    }

    return(
        <main className="todolist-container">
            <h1>Welcome {user}</h1>
            <img src={imageLogin} />
            <button type="button">Add new task</button>
            <section>
                Daily Tasks
                <ul>
                    {
                    todos.map((task) => {
                        return <li key={task.id}>
                            <input type="checkbox" value={task.value} checked={task.checked} onChange={()=>handleCheck(task)}/>
                            {task.value}
                        </li>
                    })
                    }
                </ul>
            </section>
        </main>
    )
}

export default TodoList