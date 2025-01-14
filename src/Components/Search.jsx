import React from "react";

function Search() {
    return ( 
        <div className="flex w-full justify-center py-4">
            <div className="absolute left-10 py-3">
                <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor"
                className="size-6 w-5 h-5 stroke-slate-500">
                <path strokeLinecap="round" 
                strokeLinejoin="round" 
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>

            <input 
            className="search w-[80%] h-10 bg-slate-200 rounded-2xl outline-none px-8"
            type="text" 
            placeholder="search messages"
            />


        </div>
     );
}

export default Search;