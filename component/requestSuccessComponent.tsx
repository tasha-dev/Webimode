// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of the props
interface propsType {
    showing: boolean;
    closeFn: () => void;
}

// Creating and exporting request success component as default
export default function RequestSuccessComponent({showing, closeFn}:propsType):ReactNode {
    // Returning JSX
    return (
        <div
            onClick={closeFn}
            data-showing={showing}
            className={'fixed bottom-[20px] left-[20px] lg:w-[60%] w-[calc(100%-40px)] border border-theme rounded-[24px] transition-all duration-500 z-50 p-[5px] cursor-pointer data-[showing="false"]:opacity-0 data-[showing="false"]:pointer-events-none data-[showing="true"]:opacity-100 data-[showing="true"]:pointer-events-auto'}
        >
            <div className={'w-full rounded-[20px] bg-gradient-to-r from-theme to-LighterDarkerTheme py-[15px] px-[20px] flex items-center justify-between'}>
                <div className={'w-full flex items-center gap-[20px]'}>
                    <div className={'w-[37px] aspect-square h-[37px] flex items-center justify-center rounded-full shadow-2xl shadow-white/20 border border-white/20 text-white'}>
                        <IconComponent name={'check-circle'} size={20} />
                    </div>
                    <span className={'block truncate w-full lg:text-[24px] text-[20px] font-normal text-white'}>درخواست شما با موفقیت ثبت شد !</span>
                </div>
                <div className={'w-[30px] aspect-square h-[30px] flex items-center justify-center rounded-full bg-white text-themeRed'}>
                    <IconComponent name={'circle-x'} size={30}/>
                </div>
            </div>
        </div>
    );
}
