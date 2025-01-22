import React, { useContext, useEffect, useState } from "react";
import { Await, Link } from "react-router-dom";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { authContext } from "./UsersState";
 
function Login() {
    const navigate = useNavigate()
    const {currentUser} = useContext(authContext)
    const [isLogged, setIsLogged] = useState(false)
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
        setIsLogged(true)
        navigate('/')
        
       })
       .catch((error) => {
        alert("Invalid password or email")
        console.log("An error occured",error.message)
       })
    }
    return(
        <div className="flex justify-center md:items-center w-full min-h-screen bg-slate-900">
            <div className="log-form w-full md:max-w-md md:bg-slate-700 md:h-auto md:w-auto md:shadow-md md:rounded">
                <div className="flex justify-center  items-center font-medium text-white text-lg md:text-slate-950">
                    <h1>Log in to HiChat</h1>
                </div>
                <form className="space-y-4 pl-6 w-full py-4 md:px-4">
                    <div className="input-field">
                        <input className=" input w-[90%] h-[45px] md:w-full  outline-none rounded" 
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
                        <input className="password w-[90%] input md:w-full h-[45px] outline-none rounded" 
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
                    <div className="w-full text-gray-300 text-base">
                        <form className="w-full flex md:w-full justify-between">
                            <div className="flex gap-1">
                                <input type="checkbox" name="" checked={true} />
                                <label>Remember me</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" name="" checked={true} />
                                <label>Keep me signed in</label>
                            </div>
                        </form>
                    </div>
                    <div>
                        <button onClick={handleLogIn} className="flex justify-center items-center bg-blue-700 h-12 w-[90%] rounded md:w-full text-white font-[500] md:rounded">
                            {isLogged ? (
                                <div className="h-6 w-6 md:w-8 md:h-8 rounded-full border-[4px] md:border-[5px] border-white border-t-transparent animate-spin"></div>
                            ): 'Login'}
                        </button>
                        <div className="w-full">
                            <small 
                            className=" text-white w-full">By logging in, you agree to our <span className="text-green-500"> Terms & Conditions</span></small>
                        </div>
                    </div>
                    <div>
                        <a className="text-white" href="">Forgot password?</a>
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
