import React from "react";
import hide from './hide.png'

function SignUp() {
    return ( 
        <div className="flex flex-col place-items-center md:gap-4 md:justify-center w-full min-h-screen bg-slate-900">
            <div>
                <h1 className="text-white text-xl md:text-2xl">ChatGoons</h1>
            </div>
            <div className="con w-full md:w-96 md:h-[65vh] md:bg-slate-700">
                <form className="space-y-4 py-9 md:pl-7">
                    <div className="input-fieldy">
                        <input className="w-full rounded-xl md:rounded outline-none h-[50px] md:w-[90%]" type="text" required />
                        <label className="labelling">Full Name</label>
                        <div className="error">
                            <p></p>
                        </div>

                    </div>
                    <div className="input-fieldy">
                        <input className="w-full outline-none rounded-xl md:rounded h-[50px] md:w-[90%]" type="text" required />
                        <label className="labelling">Username</label>
                        <div className="error">
                            <p></p>
                        </div>
                    </div>
                    <div className="input-fieldy">
                        <input className="w-full rounded-xl md:rounded outline-none h-[50px] md:w-[90%]" type="text" required />
                        <label className="labelling email">Email</label>
                        <div className="error">
                            <p>red</p>
                        </div>
                    </div>
                    <div className="input-fieldy relative">
                        <input className="w-full outline-none rounded-xl md:rounded h-[50px] md:w-[90%]" type="password" required />
                        <label className="labelling">Password</label>
                        <img className="absolute w-6 h-6 right-12 mt-3 cursor-pointer" src={hide} alt="" />
                        <div className="error">
                            <p></p>
                        </div>

                    </div>
                    <div className="btn text-white font-[500]">
                        <button className="bg-blue-800 rounded w-full md:w-[90%] md:rounded-2xl h-[50px]">Sign Up</button>

                    </div>
                </form>

            </div>

        </div>
        
     );
}

export default SignUp;