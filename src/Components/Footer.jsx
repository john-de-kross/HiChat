import React from "react";

function Footer() {
    return ( 
        <footer className="w-full mt-auto bg-slate-200">
                <div className="flex w-full justify-between py-2 px-3">
                    <div className="flex flex-col font-[500]">
                        <div className="chat-logo flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5} stroke="currentColor" className="size-6 w-7 h-7 fill-blue-700 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" 
                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 
                            3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12
                            21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 
                            0 0 3.423-.379c1.584-.233 2.707-1.626
                            2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394
                            48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373
                            3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                        </div>
                        <div className="flex justify-start chat-name">
                          <h3>Chats</h3>
                        </div>
                    </div>
                    <div className="flex flex-col font-[500]">
                        <div className="chat-logo flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-7 h-7 fill-blue-700 stroke-blue-700">
                            <path strokeLinecap="round" 
                            strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 
                            0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1
                            6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 
                            12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>
                        </div>
                        <div className="flex justify-start chat-name">
                           <h3>Friends</h3>
                        </div>
                    </div>
                    <div className="flex flex-col font-[500]">
                        <div className="chat-logo flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-7 h-7 fill-blue-700 stroke-blue-700">
                        <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 
                        2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97
                         1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293
                         -.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>

                            
                        </div>
                        <div className="flex justify-start chat-name">
                           <h3>Calls</h3>
                        </div>
                    </div>
                    <div className="flex flex-col font-[500]">
                        <div className="chat-logo flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} stroke="currentColor" className="size-6 w-7 h-7 fill-blue-700 stroke-white">
                        <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 
                        .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                        </svg>


                            
                        </div>
                        <div className="flex justify-start chat-name">
                           <h3>Updates</h3>
                        </div>
                    </div>




                </div>


            </footer>
     );
}

export default Footer;