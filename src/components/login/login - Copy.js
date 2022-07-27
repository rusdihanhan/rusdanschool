import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form className="form-login">
                <h3>Rusdan School</h3>
                <h4>Menu Log In</h4>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Masukkan email" name="email" value={user.email} onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Masukkan Password" name="password" value={user.password} onChange={handleChange}/>
                <button onClick={login}>Log In</button>
                <button onClick={() => history.push("/register")}>Register</button>
            </form>
        </div>
    )
}

export default Login