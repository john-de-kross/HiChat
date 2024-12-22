import React from "react";
import hide from './hide.png'
function Login() {
    return ( 
        <div className="w-full h-full">
            <div className="form-container">
                <div className="text-heading flex justify-center items-center">
                    <h2>Welcome to HiChat</h2>
                </div>
                <div className="textArea"> 
                    <div className="full_name py-2">
                        <input className="rounded-md" type="text" required/>
                        <label className="labelling">Full Name </label>
                        <p className="error"></p>

                    </div>
                    <div className="full_name py-2">
                        <input className="rounded-md" type="text" required/>
                        <label className="labelling">Username </label>
                        <p className="error"></p>
                    </div>
                    <div className="full_name py-2">
                        <input className="rounded-md" type="text" required/>
                        <label className="labelling email">Email</label>
                        <p className="error"></p>
                    </div>
                    <div className="full_name py-2">
                        <input className="rounded-md" type="password" required/>
                        <label className="labelling">Password</label>
                        <img className="" src={hide} alt="hide password" />
                        <p className="error"></p>
                    </div>
                    <div className="btn">
                        <button className="rounded-lg">Sign Up</button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Login;
