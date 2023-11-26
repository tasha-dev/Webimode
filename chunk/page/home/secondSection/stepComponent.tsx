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
    isFirstOne?: boolean;
}

// Creating and exporting step component as default
export default function StepComponent({children, icon, isActive, title, position, count, isFirstOne = false}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className="step-component" data-active={isActive} data-position={position}>
            <div className="lg:block lg:bg-transparent lg:px-0 lg:py-0 px-[16px] py-[12px] lg:rounded-0 rounded-[16px] lg:bg-transparent data-[active='false']:bg-lighterGrey data-[active='true']:bg-theme flex items-center justify-between gap-[20px]" data-active={isActive} data-position={position}>
                <div className="lg:block hidden transition-all duration-500 absolute w-[24px] h-[24px] aspect-square rounded-full data-[active='true']:bg-theme z-[2] data-[active='false']:bg-lightGrey left-full lg:-translate-x-[50%] lg:-translate-y-[50%]" data-active={isActive} />
                <div className="lg:w-auto lg:w-[25%] lg:flex justify-center items-center">
                    <div className="lg:w-[56px] lg:h-[56px] w-[28px] h-[28px] lg:text-[24px] text-[16px] transition-all duration-500 left-full font-bold lg:-translate-x-[50%] flex justify-center items-center lg:absolute lg:z-[4] lg:rounded-full rounded-[8px] lg:data-[position='top']:translate-y-[30px] lg:data-[position='bottom']:-translate-y-[30px] data-[position='top']:top-full data-[position='bottom']:bottom-full lg:data-[active='false']:bg-lighterGrey lg:data-[active='false']:text-lightGrey lg:data-[active='true']:bg-theme lg:data-[active='true']:text-white bg-white data-[active='true']:text-theme data-[active='false']:text-lightGrey" data-active={isActive} data-position={position}>
                        {count}
                    </div>
                </div>
                <DetailComponent position={position} icon={icon} isActive={isActive} title={title}>{children}</DetailComponent>
            </div>
        </div>
    );
}
