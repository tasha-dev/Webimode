// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    small?: boolean;
}

// Creating and exporting reactagnle pulse animation as component as default
export default function ReactagnlePulseComponent({small = false}:propsType):ReactNode {
    // Returning JSX
    return (
        <div 
            data-small={small}
            className="absolute lg:data-[small='false']:top-[80%] data-[small='false']:top-[100%] lg:data-[small='true']:top-[70%] data-[small='true']:top-[90%] left-[50%] -translate-x-[50%] -translate-y-[50%] lg:w-[75%] w-[90%] lg:h-[356px] h-[100px] z-[-1]"
        >
            <div className="absolute top-0 left-0 w-full h-full scale-0 opacity-0 border border-dark lg:rounded-[50px] rounded-[20px] animate-rectanglePusle animation-delay-4" />
            <div className="absolute top-[50%] left-[50%] scale-0 opacity-0 w-[80%] h-[80%] border border-dark lg:rounded-[50px] rounded-[20px] translate-x-[-50%] translate-y-[-50%] animate-rectanglePusleCentred animation-delay-3" />
            <div className="absolute top-[50%] left-[50%] scale-0 opacity-0 w-[60%] h-[60%] border border-dark lg:rounded-[50px] rounded-[20px] translate-x-[-50%] translate-y-[-50%] animate-rectanglePusleCentred animation-delay-2" />
            <div className="absolute top-[50%] left-[50%] scale-0 opacity-0 w-[40%] h-[40%] border border-dark lg:rounded-[50px] rounded-[20px] translate-x-[-50%] translate-y-[-50%] animate-rectanglePusleCentred animation-delay-1" />
            <div className="absolute top-[50%] left-[50%] scale-0 opacity-0 w-[20%] h-[20%] border border-dark lg:rounded-[50px] rounded-[20px] translate-x-[-50%] translate-y-[-50%] animate-rectanglePusleCentred" />
        </div>
    );
}