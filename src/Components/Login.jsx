import React from "react";
import hide from './hide.png'
function Login() {
    return(
        <div className="flex justify-center w-full h-full md:h-screen items-center">
            <div className="form-container w-full h-screen bg-[#608BC1] md:w-[30%] md:h-[80vh]">
                <div className="heading-text flex justify-center text-white text-xl py-4 md:text-lg">
                    <h2>Welcome to <span>H</span>iChat</h2>
                </div>
                <div className="input-area w-full py-6">
                    <div className="full_name inputs pl-2 relative w-full h-[60px]">
                        <input className="w-[98%] bg-transparent rounded-3xl h-full md:w-[50%]" type="text" required/>
                        <label className="labelling">Full Name</label>
                        <p className="error"></p>
                    </div>

                </div>
                
            </div>
        


        </div>
    )
   
}

export default Login;
