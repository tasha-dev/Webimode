// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";

// Creating and exporting score componet as default
export default function ScoreComponent(): ReactNode {
    // Defining states of component
    const [score, setScore]: [number,any] = useState(0.0);

    // Returning JSX
    return (
        <div className="col-span-1 transition-all duration-500 rounded-[16px] bg-transparent placeholder:transition-all placeholder:duration-500 p-[16px] text-[16px] font-normal border border-lightGrey hover:border-dark flex items-center justify-between gap-[10px]">
            <span className="block text-[16px] font-normal text-lightGrey truncate">امتیاز شما ( از 5 ) :</span>
            <div className="flex items-center gap-[18px] shrink-0">
                <button 
                    className="w-[20px] h-[20px] transition-all duration-500 rounded-full border border-black data-[active='true']:text-white data-[active='true']:bg-black data-[active='false']:text-black data-[active='false']:bg-transparent" 
                    data-active={(score < 5.0)} 
                    onClick={() => setScore((prevState:number) => (score < 5.0) ? prevState + 0.1 : 5.0)} 
                    type="button"
                >
                    <span>+</span>
                </button>
                <span className="text-[13px] font-bold text-black block">{Math.abs(score).toFixed(1)}</span>
                <button 
                    className="w-[20px] h-[20px] transition-all duration-500 rounded-full border border-black data-[active='true']:text-white data-[active='true']:bg-black data-[active='false']:text-black data-[active='false']:bg-transparent" 
                    data-active={(score > 0.0)} 
                    onClick={() => setScore((prevState:number) => (score > 0.0) ? prevState - 0.1 : 0.0)} 
                    type="button"
                >
                    <span>-</span>
                </button>
            </div>
        </div>
    );
}