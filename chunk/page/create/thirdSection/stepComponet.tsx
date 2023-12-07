// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    icon: 'rounded-star'|'browser'|'file'|'calender-clock'|'dollor-circle'|'poll'|'globe'|'list';
    title: string;
    link: string;
    progress: 'in-progress' | 'waiting' | 'done';
    index: number;
}

// Creating and exporting step component of create page as default
export default function StepComponent({icon, link, progress, title, index}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link data-progress={progress} href={link} className="block py-[12px] pl-[12px] pr-[45px] relative border data-[progress='in-progress']:border-theme data-[progress='done']:border-theme data-[progress='waiting']:border-LighterDarkerTheme rounded-[24px] bg-darkerTheme">
            <div data-progress={progress} className="absolute top-0 rounded-[16px] right-0 -translate-y-[50%] translate-x-[50%] w-[56px] h-[56px] shadow-custom-outer-progress-done-in-progress data-[progress='waiting']:shadow-lg data-[progress='in-progress']:text-white data-[progress='done']:text-white data-[progress='waiting']:text-lightGrey data-[progress='in-progress']:bg-theme data-[progress='done']:bg-theme data-[progress='waiting']:bg-LighterDarkerTheme flex items-center justify-center">
                <IconComponent size={32} name={icon} />
            </div>
            <div className="flex justify-between items-center gap-[20px] mb-[8px]">
                <span data-progress={progress} className="block truncate text-[20px] font-normal data-[progress='done']:text-theme data-[progress='in-progress']:text-theme data-[progress='waiting']:text-lightGrey">{title}</span>
                <div data-progress={progress} className="shadow-custom-outer w-[28px] shrink-0 h-[28px] flex justify-center items-center rounded-[8px] shadow-custom-outer-progress-done-in-progress data-[progress='waiting']:shadow-lg data-[progress='in-progress']:text-white data-[progress='done']:text-white data-[progress='waiting']:text-lightGrey data-[progress='in-progress']:bg-theme data-[progress='done']:bg-theme data-[progress='waiting']:bg-LighterDarkerTheme">
                    {index}
                </div>
            </div>
            <div data-progress={progress} className="data-[progress='done']:bg-theme data-[progress='in-progress']:bg-theme data-[progress='waiting']:bg-theme/20 data-[progress='done']:border-theme data-[progress='in-progress']:border-theme data-[progress='waiting']:border-LighterDarkerTheme border rounded-[10px] flex px-[12px] py-[6px] items-center gap-[6px] w-fit data-[progress='done']:text-white data-[progress='in-progress']:text-white data-[progress='waiting']:text-lightGrey">
                <IconComponent name="lock" size={12} />
                <span className="text-[12px] font-normal block">
                    {
                        (progress === 'done')
                            ? 'تکمیل شده'
                            : (progress === "waiting")
                                ? 'در انتظار تکمیل'
                                : 'در حال تکمیل'
                    }
                </span>
            </div>
        </Link>
    );
}