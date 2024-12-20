import React from "react";

function Login() {
    return ( 
        <div className="h-[100vh] w-full md:py-16 ">
            <div className="auth-container h-full m-auto w-full md:w-[45%] md:h-[70vh] bg-[#3E5879]">
                <div className="flex w-full h-10 justify-center items-center app-name">
                    {/* <img src="/HiChat.png" alt="app logo" /> */}
                    <h2 className="font-[900] text text-2xl md:text-3xl">
                        <span className="">H</span>
                        <span>i</span>
                        <span>C</span>
                        <span>h</span>
                        <span>a</span>
                        <span>t</span>
                    </h2>
                </div>
                <div className="flex-col justify-center place-items-center input-field w-full mt-14">
                    <div className="flex flex-col justify-start px-6 w-full md:justify-center relative md:w-[70%] full-name">
                        <label className="absolute top-[-13px] text-sm  font-[300] text-white px-3" htmlFor="">Full Name</label>
                        <input className="bg-transparent w-[70%] h-[45px] px-0.5 font-[500]
                         border-t-0 outline-none rounded-md text-gray-200 border-2 border-x-[#FFB200] border-y-[#FFB200]"
                          type="text" placeholder=""/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Login;