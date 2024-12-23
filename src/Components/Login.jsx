import React from "react";
import hide from './hide.png'
function Login() {
    return ( 
        <div className="w-full h-full md:flex md:justify-center md:items-center md:py-10">
            <div className="form-container h-full w-full bg-[#3E5879] md:h-[80vh] md:w-[50%] lg:w-[30%] lg:h-[70vh]">
                <div className="text-heading flex justify-center items-center">
                    <h2>Welcome to HiChat</h2>
                </div>
                <div className="textArea"> 
                    <div className="full_name py-2">
                        <input className="rounded-md" type="text" required/>
                        <label className="labelling full-name">Full Name </label>
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
