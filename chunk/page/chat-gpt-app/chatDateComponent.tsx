// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    date: Date;
}

// Creating and exporting chat date component as default
export default function ChatDateComponent({date}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className="flex items-center justify-start text-lightGrey gap-[12px] mb-[16px]">
            <span className="shrink-0"><IconComponent name="calender-clock" size={24} /></span>
            <span className="text-[16px] font-normal block truncate">{date.toLocaleDateString('fa-ir')}</span>
        </div>
    );
}