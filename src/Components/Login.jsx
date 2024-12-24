import React from "react";
import hide from './hide.png'
function Login() {
    return(
        <div className="flex justify-center w-full h-full md:h-screen items-center">
            <div className="form-container w-full h-screen bg-[#608BC1] md:w-[30%] md:h-[80vh]">
                <div className="heading-text flex justify-center text-white text-xl py-4 md:text-lg">
                    <h2>Welcome to <span>H</span>iChat</h2>
                </div>
                <div className="input-area w-full">
                    <div className="full_name inputs pl-7 relative w-full h-[50px]">
                        <input className="w-[90%] bg-transparent rounded-lg h-full md:w-[50%]" type="text" required/>
                        <label className="labelling">Full Name</label>
                        <p className="error"></p>
                    </div>

                </div>
                
            </div>
        


        </div>
    )
   
}

export default Login;
