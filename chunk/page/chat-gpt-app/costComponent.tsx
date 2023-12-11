// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    price: number;
    step: number;
    total: number;
    title: string;
}

// Creating and exporting cost component as default
export default function CostComponent({price, step, total, title}:propsType):ReactNode {
    // Returning JSX
    return (
        <li>
            <div className="flex items-center gap-[8px] mb-[12px]">
                <div className="w-[12px] h-[12px] rounded-full bg-theme" />
                <span className="text-[16px] font-normal text-theme">{title}</span>
            </div>
            <div className="flex items-center justify-between gap-[10px] flex-wrap">
                <span className="text-white text-[13px] font-normal">
                    هر 
                    {step}
                    توکن
                </span>
                <span className="text-white text-[13px] font-normal">{price.toLocaleString()}$</span>
                <span className="text-white text-[13px] font-normal">{total.toLocaleString()}$</span>
            </div>
        </li>
    );
}