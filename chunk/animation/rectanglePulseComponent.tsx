// Importing part
import {ReactNode} from "react";

// Creating and exporting reactagnle pulse animation as component as default
export default function ReactagnlePulseComponent():ReactNode {
    // Returning JSX
    return (
        <div className="absolute lg:top-[85%] top-[100%] left-[50%] -translate-x-[50%] -translate-y-[50%] lg:w-[75%] w-[80%] lg:h-[356px] h-[100px] z-[-1]">
            <div className="absolute top-0 left-0 w-full h-full scale-0 opacity-0 border border-dark rounded-[50px] animate-rectanglePusle animation-delay-4" />
            <div className="absolute top-[50%] left-[50%] scale-0 opacity-0 w-[80%] h-[80%] border border-dark rounded-[50px] translate-x-[-50%] translate-y-[-50%] animate-rectanglePusleCentred animation-delay-3" />
            <div className="absolute top-[50%] left-[50%] scale-0 opacity-0 w-[60%] h-[60%] border border-dark rounded-[50px] translate-x-[-50%] translate-y-[-50%] animate-rectanglePusleCentred animation-delay-2" />
            <div className="absolute top-[50%] left-[50%] scale-0 opacity-0 w-[40%] h-[40%] border border-dark rounded-[50px] translate-x-[-50%] translate-y-[-50%] animate-rectanglePusleCentred animation-delay-1" />
            <div className="absolute top-[50%] left-[50%] scale-0 opacity-0 w-[20%] h-[20%] border border-dark rounded-[50px] translate-x-[-50%] translate-y-[-50%] animate-rectanglePusleCentred" />
        </div>
    );
}