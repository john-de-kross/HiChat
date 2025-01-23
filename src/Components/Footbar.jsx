import React from "react";


function FootBar() {
    return ( 
        <div className="fixed flex gap-8 justify-start items-center px-2 bottom-1 w-full h-16 bg-slate-900">
            <div className="flex py-1 flex-col text-sm text-white font-[500] items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="fill-gray-100 w-7 h-7">
                <path 
                d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 
                128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 
                448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 
                512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 
                24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 
                24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                </svg>
                Connect
            </div>
            <div className="flex flex-col items-center text-white font-[500]">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="size-6 stroke-white w-7 h-7">
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                sent
            </div>
            <div className="flex flex-col items-center text-white font-[500]">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 320 512" 
            className="w-7 h-7 fill-white">
            <path 
            d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 
            128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4
             304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9
              48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 
              15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z"/>
            </svg>
            Request
            </div>
            <div className="flex flex-col items-center text-white font-[500]">
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="size-6 w-7 h-7">
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 
                7.23c-.38.054-.757.112-1.134.175C2.999 7.58 
                2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 
                2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 
                0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 
                48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
                Updates

            </div>


        </div>
     );
}

export default FootBar;