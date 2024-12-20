import React from "react";

function Login() {
    return ( 
        <div className="h-[100vh] w-full md:py-10 ">
            <div className="auth-container h-full m-auto w-full md:py-2 md:w-[30%] md:h-auto bg-[#3E5879]">
                <div className="flex w-full h-10 justify-center  md:py-6 items-center app-name">
                    {/* <img src="/HiChat.png" alt="app logo" /> */}
                    <h2 className="font-[900] text text-2xl md:text-3xl">
                    Welcome to 
                        <span className=""> H</span>
                        <span>i</span>
                        <span>C</span>
                        <span>h</span>
                        <span>a</span>
                        <span>t</span>
                    </h2>
                </div>
                <div className="auth-area">
                    <div className="full-name">
                        <input className="rounded-xl" type="text" required/>
                        <label className="labelling full_name">Enter Full Name</label>
                        <p className="Error-message "></p>
                    </div>
                    <div className="full-name">
                        <input className="rounded-xl" type="text" required/>
                        <label className="labelling">Enter Your Username</label>
                        <p className="Error-message"></p>
                    </div>
                    <div className="full-name">
                        <input className="rounded-xl" type="text" required/>
                        <label className="labelling email">Enter Your Email</label>
                        <p className="Error-message"></p>
                    </div>
                    <div className="full-name">
                        <input className="rounded-xl" type="password" required/>
                        <label className="labelling">Enter Your Password</label>
                        <p className="Error-message"></p>
                    </div>
                    <div className="full-name sign-in">
                        <button className="bg-orange-400 sign-btn rounded-xl">Sign Up</button>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Login;
