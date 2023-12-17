// Importing part
import {ReactNode} from "react";
import CircleProgressComponent from "@/chunk/circleProgressComponent";

// Defining type of props
interface propsType {
    percentage: number;
    theme: 'orange'|'blue'|'green';
    title: string;
    children: string;
}

// Creating and exporting feature component as default
export default function FeatureComponent({children, percentage, theme, title}:propsType):ReactNode {
    // Returning JSX
    return (
        <div data-theme={theme} className="px-[16px] py-[24px] rounded-[64px] shadow-custom data-[theme='orange']:bg-lightOrange data-[theme='blue']:bg-themeBlue data-[theme='green']:bg-lightGreen">
            <div className='flex justify-center lg:mt-[-70px] mt-[-90px]'>
                <CircleProgressComponent percentage={percentage} theme={theme} />
            </div>
            <span className="mb-[8px] text-center mt-[16px] truncate block text-white text-[32px] font-semibold">{title}</span>
            <p className="text-white text-center font-normal text-[16px] leading-[32px] line-clamp-5">{children}</p>
        </div>
    );
}