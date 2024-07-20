import { useState } from "react"
// import { Todo, fetchTodos } from "../../api/todoApi"
import Context from "./Context";
// import {Todo} from "../../api/todoApi"


type ProviderProps = {
    children: React.ReactNode
}

export type ProviderValues = {
    user: string,
    onLogin: (username: string) => void,
    // getTodos: () => Promise<void>
    // loading: boolean
}

function Provider({children}: ProviderProps) {


    const [user, setUser] = useState<string>('');
    // const [todos, setTodos] = useState<Todo[]>([]);
    // const [loading, setLoading] = useState<boolean>(false)

    const onLogin = (username: string):void => {
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
        user, onLogin, /* , getTodos, loading */
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export default Provider
