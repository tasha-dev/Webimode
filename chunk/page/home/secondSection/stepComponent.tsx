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
        <div className="lg:h-[2px] lg:block flex data-[position='top']:flex-row items-center gap-[20px] data-[position='bottom']:flex-row-reverse relative lg:data-[active='true']:bg-theme lg:data-[active='false']:bg-lightGrey" data-active={isActive} data-position={position}>
            <div className="lg:block hidden absolute w-[24px] h-[24px] aspect-square rounded-full data-[active='true']:bg-theme z-[2] data-[active='false']:bg-lightGrey left-full lg:-translate-x-[50%] lg:-translate-y-[50%]" data-active={isActive} />
            <div className="lg:w-auto w-[50%] flex justify-center items-center">
                <div className="w-[56px] h-[56px] left-full font-bold lg:-translate-x-[50%] flex justify-center items-center lg:absolute z-[4] rounded-full lg:data-[position='top']:translate-y-[30px] lg:data-[position='bottom']:-translate-y-[30px] data-[position='top']:top-full data-[position='bottom']:bottom-full data-[active='false']:bg-lighterGrey data-[active='false']:text-lightGrey data-[active='true']:bg-theme data-[active='true']:text-white" data-active={isActive} data-position={position}>
                    {count}
                </div>
            </div>
            <DetailComponent position={position} icon={icon} isActive={isActive} title={title}>{children}</DetailComponent>
        </div>
    );
}