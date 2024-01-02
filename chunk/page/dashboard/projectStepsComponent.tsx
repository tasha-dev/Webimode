// Importing part
import {ReactNode} from "react";
import CircleProgressComponent from "@/chunk/circleProgressComponent";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    percent: number;
    title: string;
    isLastOne?: boolean;
}

// Creating and exporting project steps of third divider as default
export default function ProjectStepsComponent({percent, title, isLastOne = false}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className="lg:shrink shrink-0">
            <div className="flex items-center justify-center relative">
                {
                    (isLastOne)
                        ? false
                        : (
                            <div className="h-full w-full absolute top-0 right-[50%] z-[1] flex items-center justify-center">
                                <div 
                                    data-completed={(percent === 100)} 
                                    className="w-full h-[1px] border-b-[4px] xl:block hidden border-dashed dark:data-[completed='false']:border-b-lightestDark data-[completed='false']:border-b-lightGrey dark:data-[completed='true']:border-b-theme data-[completed='true']:border-b-theme" 
                                />
                            </div>
                        )
                }
                {
                    (percent !== 100)
                        ? <CircleProgressComponent size={'full'} percentage={percent} theme="theme" />
                        : (
                            <div className="h-full w-full shadow-xl rounded-full bg-theme flex items-center justify-center text-white aspect-square">
                                <IconComponent size={50} name="check" />
                            </div>
                        )
                }
            </div>
            <span className="mt-[16px] mb-[10px] text-[16px] font-normal text-center block w-full truncate text-dark">{title}</span>
            <div className="flex items-center gap-[10px]">
                {
                    (percent === 100)
                        ? (
                            <div className="flex items-center justify-center w-full gap-[8px]">
                                <span className="shrink-0 text-theme">
                                    <IconComponent name="circle-check" size={16} />
                                </span>
                                <span className="text-[13px] block truncate font-normal text-theme">تکمیل شده</span>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center w-full gap-[8px]">
                                <span className="shrink-0 text-themePurple">
                                    <IconComponent name="circle-clock" size={16} />
                                </span>
                                <span className="text-[13px] block truncate font-normal text-themePurple">در انتظار تکمیل</span>
                            </div>
                        )
                }
            </div>
        </div>
    );
}