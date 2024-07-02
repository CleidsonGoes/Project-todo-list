import { useContext, /*useEffect*/ } from "react"
import imageLogin from "../assets/pngwing.com (1).png"
import Context from "../context/Context"
import {Todo} from "../../api/todoApi"

function TodoList() {

    const {user, /*todos, getTodos, loading */} = useContext(Context)

    const todos:Todo[]= [
        {id: "1", value: "estudar react", checked: false},
        {id: "2", value: "estudar node", checked: false},
        {id: "3", value: "estudar python", checked: true},
        {id: "4", value: "estudar Java", checked: true},
        {id: "5", value: "estudar Android", checked: false},
        {id: "6", value: "estudar C#", checked: true},
    ]

    // useEffect(() => {
    //     if(!todos.length) {
    //         getTodos();
    //     }
    // }, []);

    // [] => funciona na montagem do componente
    // [valor] => funciona como um didUpdate, que observa o valor no array de dependencias
    // sem nada => qualque atualização no estado desse componente roda o código do useEffect

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
                        return <li key={task.id}>{task.value}</li>
                    })
                    }
                </ul>
            </section>
        </main>
    )
}

export default TodoList