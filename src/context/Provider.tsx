import { useState } from "react"
// import { Todo, fetchTodos } from "../../api/todoApi"
import Context from "./Context";
import {Todo} from "../../api/todoApi"


type ProviderProps = {
    children: React.ReactNode
}

export type ProviderValues = {
    user: string,
    onLogin: (username: string) => void,
    todos: Todo[],
    // getTodos: () => Promise<void>
    // loading: boolean
}

function Provider({children}: ProviderProps) {

    const todos:Todo[]= [
        {id: "1", value: "estudar react", checked: false},
        {id: "2", value: "estudar node", checked: false},
        {id: "3", value: "estudar python", checked: true},
        {id: "4", value: "estudar Java", checked: true},
        {id: "5", value: "estudar Android", checked: false},
        {id: "6", value: "estudar C#", checked: true},
    ]

    const [user, setUser] = useState('');
    // const [todos, setTodos] = useState<Todo[]>([]);
    // const [loading, setLoading] = useState<boolean>(false)

    const onLogin = (username: string) => {
        setUser(username);
    }

    // const getTodos = async () => {

    //     setLoading(true)

    //     try {
    //         const result = await fetchTodos();
    //         setTodos(result)
    //     } catch (error: any) {
    //         console.log(error.message);
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    const values:ProviderValues = {
        user, onLogin, todos /* , getTodos, loading */
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export default Provider