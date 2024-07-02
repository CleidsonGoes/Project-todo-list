import { useState } from "react"
// import { Todo, fetchTodos } from "../../api/todoApi"
import Context from "./Context";

type ProviderProps = {
    children: React.ReactNode
}

export type ProviderValues = {
    user: string,
    onLogin: (username: string) => void,
    // todos: Todo[],
    // getTodos: () => Promise<void>
    // loading: boolean
}

function Provider({children}: ProviderProps) {

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
        user, onLogin, /* todos, getTodos, loading */
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export default Provider