import { ChangeEvent, FormEvent, useState } from "react"
import imageLogin from "../assets/pngwing.com (1).png"
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
        setInputs({...inputs, [event.target.name]: [event.target.value]});
    }

    const handleSubmit = (event: FormEvent) => {
        // para evitar o carregamento padrão do botão de enviar
        event.preventDefault();
        navigate("/todo")
    }

    return(
        <>
        <h1>Welcome</h1>
        <img src={imageLogin} alt="" />
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="username" id="username" placeholder="Enter your username"/>
            <input onChange={handleChange} type="password" name="password" id="password" placeholder="Enter your password"/>
            <p>Forget Password?</p>
            <button>Sign In</button>
        </form>
        </>
    )
}

export default Login