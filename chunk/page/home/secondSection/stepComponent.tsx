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
        <div className="lg:h-[2px] relative lg:data-[active='true']:bg-theme lg:data-[active='false']:bg-lightGrey" data-active={isActive} data-position={position}>
            {
                (isFirstOne)
                    ? (
                        <div className="w-[50%] relative lg:hidden block">
                            <svg className="ml-auto" width="101" height="97" viewBox="0 0 101 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M98.5215 0.816406C98.5215 31.7897 0.562887 38.7688 2.00003 96.5669" stroke={(isActive) ? '#49B486' : '#e3e3e3'} strokeWidth="3"/>
                            </svg>
                        </div>
                    ) : (position === 'top')
                        ? (
                            <svg className="rotate-90 lg:hidden block absolute bottom-[99%] left-[49%]" width="101" height="97" viewBox="0 0 101 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M98.5215 0.816406C98.5215 31.7897 0.562887 38.7688 2.00003 96.5669" stroke={(isActive) ? '#49B486' : '#e3e3e3'} strokeWidth="3"/>
                            </svg>
                        ) : (
                            <svg className="absolute lg:hidden block bottom-[99%] right-[49%]" width="101" height="97" viewBox="0 0 101 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M98.5215 0.816406C98.5215 31.7897 0.562887 38.7688 2.00003 96.5669" stroke={(isActive) ? '#49B486' : '#e3e3e3'} strokeWidth="3"/>
                            </svg>
                        )
            }
            <div className="lg:block flex data-[position='top']:flex-row data-[position='bottom']:flex-row-reverse items-center gap-['20px]" data-active={isActive} data-position={position}>
                <div className="lg:block hidden absolute w-[24px] h-[24px] aspect-square rounded-full data-[active='true']:bg-theme z-[2] data-[active='false']:bg-lightGrey left-full lg:-translate-x-[50%] lg:-translate-y-[50%]" data-active={isActive} />
                <div className="lg:w-auto w-[50%] flex justify-center items-center">
                    <div className="w-[56px] h-[56px] left-full font-bold lg:-translate-x-[50%] flex justify-center items-center lg:absolute z-[4] rounded-full lg:data-[position='top']:translate-y-[30px] lg:data-[position='bottom']:-translate-y-[30px] data-[position='top']:top-full data-[position='bottom']:bottom-full data-[active='false']:bg-lighterGrey data-[active='false']:text-lightGrey data-[active='true']:bg-theme data-[active='true']:text-white" data-active={isActive} data-position={position}>
                        {count}
                    </div>
                </div>
                <DetailComponent position={position} icon={icon} isActive={isActive} title={title}>{children}</DetailComponent>
            </div>
        </div>
    );
}