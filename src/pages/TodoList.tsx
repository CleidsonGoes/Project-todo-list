import { useContext } from "react"
import imageLogin from "../assets/pngwing.com (1).png"
import Context from "../context/Context"

function TodoList() {

    const {user} = useContext(Context)

    return(
        <main className="todolist-container">
            <h1>Welcome {user}</h1>
            <img src={imageLogin} />
            <button type="button">Add new task</button>
            <section>
                Daily Tasks
            </section>
        </main>
    )
}

export default TodoList