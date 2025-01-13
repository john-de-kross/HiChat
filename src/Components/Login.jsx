import React, { useContext, useEffect, useState } from "react";
import { Await, Link } from "react-router-dom";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { authContext } from "./UsersState";
 
function Login() {
    const navigate = useNavigate()
    const {currentUser} = useContext(authContext)
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleForm = (e) => {
        const {name, value} = e.target
        setLoginData({
            ...loginData,
            [name] : value
            
        })
    }

    const handleLogIn = (e) => {
        e.preventDefault()
       signInWithEmailAndPassword(auth, loginData.email, loginData.password)
       .then((userCredentials) => {
        navigate('/')
        
       })
       .catch((error) => {
        alert("Invalid password or email")
        console.log("An error occured",error.message)
       })
    }
    return(
        <div className="flex justify-center md:items-center w-full min-h-screen bg-slate-900">
            <div className="log-form w-full md:max-w-md md:bg-slate-700 md:h-auto md:w-80 md:shadow-md md:rounded">
                <div className="flex justify-center  items-center font-medium text-white text-lg md:text-slate-950">
                    <h1>ChatGoons Login</h1>
                </div>
                <form className="space-y-4 mt- py-6 md:px-4">
                    <div className="input-field">
                        <input className=" input h-[45px]  outline-none rounded" 
                        type="email" 
                        name="email" 
                        value={loginData.email}
                        onChange={handleForm}
                        required placeholder="Email"
                        />
                        <div className="err">
                            <p></p>
                        </div>
                    </div>
                    <div className="input-field py-2">
                        <input className="password input h-[45px] outline-none rounded" 
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleForm}
                         required placeholder="Password" 
                         />
                        <div className="err">
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <a className="text-white" href="">Forgot password?</a>
                    </div>
                    <div>
                        <button onClick={handleLogIn} className="bg-blue-700 h-12 w-full text-white font-[500] md:rounded">Login</button>
                    </div>
                    <div className="flex text-white gap-1">
                        <h3>Don't have an account?</h3>
                        <Link to={"/signup"} className="log-link text-blue-700">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
