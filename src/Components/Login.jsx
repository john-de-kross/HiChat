import React from "react";

function Login() {
    return ( 
        <div className="h-[100vh] w-full md:py-16 ">
            <div className="auth-container h-full m-auto w-full md:w-[45%] md:h-[70vh] bg-[#3E5879]">
                <div className="flex w-full h-10 justify-center items-center app-name">
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
                        <label className="labelling">Enter full name</label>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Login;
