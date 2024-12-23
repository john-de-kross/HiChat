import React from "react";
import hide from './hide.png'
function Login() {
    return ( 
      <div>
        <div className="flex justify-center h-screen w-full items-center">
            <div className="form-container w-full h-full bg-[#3E5879] md:w-[35%] md:h-[80vh]">
                <div className="form-header flex justify-center items-center py-3 text-[#fff] font-[500] md:font-bold md:text-lg">
                    <h2>Welcome to HiChat</h2>
                </div>
                <div className="textArea w-full flex flex-col px-3 md:place-items-center">
                    <input className="w-[95%] h-[10%] p-2 md:w-[30%] md:h-[6vh]" type="text" required/>
                    <label className="labelling">Full Name</label>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Login;
