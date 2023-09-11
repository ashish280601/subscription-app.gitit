import React, {useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

import "./styles/styles.css";


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('');;
    const [password,setPassword]=useState('')
    const [name, setName] = useState('');

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password,name
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/home")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Create Account</h1>

            <form className="form" action="post">
                <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Name" className="form-input" />
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  className="form-input"/>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"className="form-input" />
                <button className="submit-btn" onClick={submit}>Sign Up</button>
                <p>Already have an account?<Link to="/" className="link">Login</Link></p>
            </form>


        </div>
    )
}

export default Login