import React from "react";
import hide from './hide.png'
function Login() {
    return(
        <div className="flex justify-center md:items-center w-full min-h-screen bg-slate-900">
            <div className="log-form w-full md:max-w-md md:bg-slate-700 md:h-80 md:w-80 md:shadow-md md:rounded">
                <div className="flex justify-center  items-center font-medium text-white text-lg md:text-slate-950">
                    <h1>ChatGoons Login</h1>
                </div>
                <form className="space-y-4 py-6 px-4">
                    <div className="input-field">
                        <input className="email input h-[45px] outline-none rounded" type="email" required placeholder="Email"/>
                        <div className="err">
                            <p></p>
                        </div>
                    </div>
                    <div className="input-field">
                        <input className="password input h-[45px] outline-none rounded" type="password" required placeholder="Password"/>
                        <div className="err">
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <a className="text-white" href="">Forgot password?</a>
                    </div>
                    <div>
                        <button className="bg-blue-700 h-12 w-full text-white font-[500] md:rounded">Login</button>
                    </div>
                    <div className="flex text-white gap-1">
                        <h3>Don't have an account?</h3>
                        <a className="log-link text-blue-700" href="">Sign up</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
