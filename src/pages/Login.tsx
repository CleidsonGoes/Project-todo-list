import imageLogin from "../assets/pngwing.com (1).png"

function Login() {
    return(
        <>
        <h1>Welcome</h1>
        <img src={imageLogin} alt="" />
        <form action="">
            <input type="text" name="username" id="username" placeholder="Enter your username"/>
            <input type="password" name="password" id="password" placeholder="Enter your password"/>
            <p>Forget Password?</p>
            <button>Sign In</button>
        </form>
        </>
    )
}

export default Login