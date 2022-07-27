import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <form className="form-register">
                <h3>Rusdan School</h3>
                <h4>Menu Register</h4>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Masukkan username" name="name" value={user.name} onChange={handleChange}/>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Masukkan email" name="email" value={user.email} onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Masukkan password" name="password" value={user.password} onChange={handleChange}/>
                <label htmlFor="email">Email</label>
                <input type="password" placeholder="Tulis ulang password anda" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange}/>
                <button onClick={register}>Register</button>
                <button onClick={() => history.push("/login")}>Log In</button>
            </form>
        </div>
    )
}

export default Register