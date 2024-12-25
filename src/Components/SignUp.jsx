import React from "react";

function SignUp() {
    return ( 
        <div className="flex flex-col place-items-center md:gap-4 md:justify-center w-full min-h-screen bg-slate-900">
            <div>
                <h1 className="text-white text-xl md:text-2xl">ChatGoons</h1>
            </div>
            <div className="con w-full md:w-96 md:h-[72vh] md:bg-slate-700">
                <form className="space-y-4 py-4 md:pl-7">
                    <div className="input-field">
                        <input className="w-full rounded outline-none h-[50px] md:w-[90%]" type="text" required />
                        <label>Full Name</label>
                        <div className="error">
                            <p></p>
                        </div>

                    </div>
                    <div className="input-field">
                        <input className="w-full outline-none rounded h-[50px] md:w-[90%]" type="text" required />
                        <label>Username</label>
                        <div className="error">
                            <p></p>
                        </div>
                    </div>
                    <div className="input-field">
                        <input className="w-full rounded outline-none h-[50px] md:w-[90%]" type="email" required />
                        <label>Email</label>
                        <div className="error">
                            <p></p>
                        </div>
                    </div>
                    <div className="input-field">
                        <input className="w-full outline-none rounded h-[50px] md:w-[90%]" type="password" required />
                        <label>Password</label>
                        <div className="error">
                            <p></p>
                        </div>

                    </div>

                </form>

            </div>

        </div>
        
     );
}

export default SignUp;