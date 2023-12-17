// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";
import getDateDifference from '@/hook/useDateDiffrence';
import Link from "next/link";

// Defining type of props
interface propsType {
    title: string;
    deadLine: Date;
    uiUxProgress: number;
    frontEndProgress: number;
    backEndProgress: number;
    link: string;
    theme: 'blue' | 'theme' | 'purple';
}
  
// Creating and exporting project state component as default
export default function ProjectStateComponent({uiUxProgress, backEndProgress, deadLine, frontEndProgress, link, title, theme}:propsType):ReactNode {
    // Defining state of component 
    const [isDropdownOpened, setDropdownOpened]:[boolean, Dispatch<boolean>] = useState(false);

    // Defining date diffrences
    const dateDiffrence:{
        years: number,
        months: number,
        days: number,
        hours: number,
        minutes: number,
        seconds: number
    } = getDateDifference(deadLine.toISOString(), new Date().toISOString());

    // Returning JSX
    return (
        <div data-theme={theme} className="p-[16px] rounded-[24px] border-[1.5px] transition-all duration-500 border-lightGrey data-[theme='blue']:hover:border-themeBlue data-[theme='theme']:hover:border-theme data-[theme='purple']:hover:border-themePurple shadow-xl shadow-transparent hover:shadow-black/10">
            <div className="flex items-center justify-between mb-[10px] gap-[20px]">
                <span className="text-[16px] font-normal truncate block">{title}</span>
                <div className="shrink-0 relative">
                    <button 
                        onClick={() => (isDropdownOpened) ? setDropdownOpened(false) : setDropdownOpened(true)}
                        className="w-[24px] h-[24px] flex items-center justify-center rounded-full transition-all duration-500 bg-lighterGrey text-lightestDark hover:bg-lightestDark hover:text-lighterGrey"
                    >
                        <IconComponent name="three-dots" width={15} height={3} />
                    </button>
                    <div data-opened={isDropdownOpened} className="absolute rounded-[10px] z-[100] border border-lighterGrey bg-lightestGrey w-[88px] py-[10px] top-[110%] left-0 transition-all duration-500 data-[opened='false']:opacity-0 data-[opened='false']:invisible data-[opened='true']:opacity-100 data-[opened='true']:visible">
                        <button className="p-[12px] flex items-center gap-[10px] transition-all duration-500 hover:bg-lighterGrey w-full">
                            <span className="shrink-0 text-lightGrey">
                                <IconComponent name="circle-x" size={12} />
                            </span>
                            <span className="block truncate text-[10px] font-normal text-lightGrey">
                                لغو پروژه
                            </span>
                        </button>
                        <button className="p-[12px] flex items-center gap-[10px] transition-all duration-500 hover:bg-lighterGrey w-full">
                            <span className="shrink-0 text-lightGrey">
                                <IconComponent name="ticket" size={12} />
                            </span>
                            <span className="block truncate text-[10px] font-normal text-lightGrey">
                            ارسال تیکت
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-[8px]">
                <span className="text-lightGrey">
                    <IconComponent size={16} name="circle-clock" />
                </span>
                <div className="flex items-center gap-[10px] flex-wrap mb-[16px]">
                    {
                        (dateDiffrence.days !== 0)
                            ? (
                                <div className="text-[13px] font-normal text-lightGrey">
                                    <span className="font-bold ml-[1ch]">{dateDiffrence.days}</span>
                                    روز
                                </div>
                            ) : false
                    }
                    {
                        (dateDiffrence.hours !== 0)
                            ? (
                                <div className="text-[13px] font-normal text-lightGrey">
                                    <span className="font-bold ml-[1ch]">{dateDiffrence.hours}</span>
                                    ساعت
                                    :
                                </div>
                            ) : false
                    }
                    {
                        (dateDiffrence.minutes !== 0)
                            ? (
                                <div className="text-[13px] font-normal text-lightGrey">
                                    <span className="font-bold ml-[1ch]">{dateDiffrence.minutes}</span>
                                    دقیقه
                                    :
                                </div>
                            ) : false
                    }
                    {
                        (dateDiffrence.seconds !== 0)
                            ? (
                                <div className="text-[13px] font-normal text-lightGrey">
                                    <span className="font-bold ml-[1ch]">{dateDiffrence.seconds}</span>
                                    ثانیه
                                </div>
                            ) : false
                    }
                </div>
            </div>
            <div className="mb-[16px]">
                <span className="text-[13px] font-normal text-theme block mb-[8px]">طراحی UI UX</span>
                <div className="rounded-[8px] overflow-hidden border bg-theme/10 border-theme w-full h-[28px] bg-current/20">
                    <div 
                        style={{ width: `${uiUxProgress}%` }} 
                        className="text-white h-full bg-theme text-[13px] flex items-center justify-center font-bold"
                    >
                            {uiUxProgress}%
                    </div>
                </div>
            </div>
            <div className="mb-[16px]">
                <span className="text-[13px] font-normal text-alert block mb-[8px]">برنامه نویسی فرانت اند ( React js )</span>
                <div className="rounded-[8px] overflow-hidden border bg-alert/10 border-alert w-full h-[28px] bg-current/20">
                    <div 
                        style={{ width: `${frontEndProgress}%` }} 
                        className="text-white h-full bg-alert text-[13px] flex items-center justify-center font-bold"
                    >
                            {frontEndProgress}%
                    </div>
                </div>
            </div>
            <div className="mb-[32px]">
                <span className="text-[13px] font-normal text-themeBlue block mb-[8px]">برنامه نویسی بک اند ( laravel )</span>
                <div className="rounded-[8px] overflow-hidden border bg-themeBlue/10 border-themeBlue w-full h-[28px] bg-current/20">
                    <div 
                        style={{ width: `${backEndProgress}%` }} 
                        className="text-white h-full bg-themeBlue text-[13px] flex items-center justify-center font-bold"
                    >
                            {backEndProgress}%
                    </div>
                </div>
            </div>
            <Link href={link} className="small-btn-primary">
                <span>مشاهده اطلاعات پروژه</span>
                <IconComponent size={12} name="chevron-left" />
            </Link>
        </div>
    );
}