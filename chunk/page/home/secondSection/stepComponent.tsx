// Importing part
import {ReactNode} from "react";
import DetailComponent from "@/chunk/page/home/secondSection/detailComponent";

// Defining type of props
interface propsType {
    isActive: boolean;
    icon: 'brief-case'|'money-check-edit'|'design'|'replace'|'vote-yes';
    children: string;
    title: string;
    position: 'top' | 'bottom';
    count: '۱'|'۲'|'۳'|'۴'|'۵';
}

// Creating and exporting step component as default
export default function StepComponent({children, icon, isActive, title, position, count}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className="h-[2px] relative data-[active='true']:bg-theme data-[active='false']:bg-lightGrey" data-active={isActive}>
            <div className="absolute w-[24px] h-[24px] aspect-square rounded-full data-[active='true']:bg-theme z-[2] data-[active='false']:bg-lightGrey left-full -translate-x-[50%] -translate-y-[50%]" data-active={isActive} />
            <div className="w-[56px] h-[56px] left-full -translate-x-[50%] flex justify-center items-center absolute z-[4] rounded-full data-[position='top']:translate-y-[30px] data-[position='bottom']:-translate-y-[30px] data-[position='bottom']:bottom-full data-[position='top']:top-full data-[position='bottom']:bottom-full data-[active='false']:bg-lighterGrey data-[active='false']:text-lightGrey data-[active='true']:bg-theme data-[active='true']:text-white" data-active={isActive} data-position={position}>{count}</div>
            <DetailComponent position={position} icon={icon} isActive={isActive} title={title}>{children}</DetailComponent>
        </div>
    );
}