// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    date: string;
    link: string;
    children: string;
    sender?: string;
    style?: 'big' | 'small';
    newMassagesCount?: number;
    title?: string;
}

// Creating and exporting ticket component as default
export default function TicketComponent({children, date, link, sender, style = 'small', newMassagesCount, title}:propsType):ReactNode {
    // Conditional rendering
    if (style === 'small') {
        return (
            <Link href={`/dashboard/tickets/${link}`} className="block dark:bg-pageDark bg-lightestGrey border dark:border-lightestDark border-lighterGrey group transition-all duration-500 rounded-[20px] p-[12px] hover:bg-theme hover:border-theme shadow-custom">
                <div className="flex items-start gap-[12px] mb-[12px]">
                    <div className="flex items-center justify-center rounded-[8px] dark:bg-lightestDark bg-lighterGrey text-white w-[36px] h-[36px] shrink-0 aspect-square transition-all duration-500 group-hover:bg-white group-hover:text-theme">
                        <IconComponent name="ticket" size={20} />
                    </div>
                    <div className="w-full">
                        <span className="block mb-[6px] text-[12px] dark:text-white text-dark truncate font-normal transition-all duration-500 group-hover:text-white">{sender}</span>
                        <div className="flex items-center gap-[8px]">
                            <span className="text-lightGrey  transition-all duration-500 group-hover:text-white">
                                <IconComponent size={12} name="calender-clock" />
                            </span>
                            <div className="flex items-center gap-[2ch] text-lightGrey transition-all duration-500 group-hover:text-white text-[8px] font-normal">
                                <span className="text-[8px] font-normal text-lightGrey transition-all duration-500 group-hover:text-white">{new Date(date).toLocaleDateString('fa-ir')}</span>
                                /   
                                <div className="flex items-center gap-[2ch]"> 
                                    <span className="text-[8px] font-normal text-lightGrey transition-all duration-500 group-hover:text-white">{new Date(date).getMinutes().toLocaleString('fa-ir')}</span>
                                    :
                                    <span className="text-[8px] font-normal text-lightGrey transition-all duration-500 group-hover:text-white">{new Date(date).getHours().toLocaleString('fa-ir')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mb-[4px] text-[10px] line-clamp-2 font-normal leading-[18px] text-lightGrey transition-all duration-500 group-hover:text-white">{children}</p>
                <div className="flex items-center justify-end">
                    <div className="w-[16px] h-[16px] flex items-center justify-center rounded-full dark:bg-lightestDark bg-lightGrey text-white transition-all duration-500 group-hover:text-theme group-hover:bg-white">
                        <IconComponent name="chevron-left" size={10} />
                    </div>
                </div>
            </Link>
        );
    } else {
        return (
            <Link href={`/dashboard/tickets/${link}`} className="block border-[1.5px] dark:border-lightestDark border-lightGrey dark:bg-pageDark bg-lightestGrey hover:bg-white hover:border-white shadow-lg group transition-all duration-500 rounded-[20px] p-[8px] group">
                <div className="flex items-start justify-between gap-[10px] mb-[11px]">
                    <div className="flex items-center justify-center rounded-[8px] dark:bg-lightestDark bg-lighterGrey text-white w-[28px] h-[28px] shrink-0 aspect-square transition-all duration-500 group-hover:bg-lightTheme group-hover:text-white">
                        <IconComponent name="ticket" size={20} />
                    </div>
                    {
                        (newMassagesCount !== 0)
                            ? (
                                <div className="bg-lighterGrey dark:bg-lightestDark rounded-[6px] px-[8px] py-[2px] group-hover:bg-theme transition-all duration-500">
                                    <span className="text-[10px] font-normal text-lightGrey transition-all duration-500 group-hover:text-white inline-block ml-[1ch]">
                                        {newMassagesCount}
                                    </span>
                                    <span className="text-[10px] font-normal text-lightGrey transition-all duration-500 group-hover:text-white">پیام جدید</span>
                                </div>
                            ) : false
                    }
                </div>
                <span className="block mb-[4px] text-[12px] font-normal truncate dark:text-white text-dark">{title}</span>
                <p className="mb-[8px] text-[10px] line-clamp-2 font-normal leading-[18px] text-lightGrey transition-all duration-500">{children}</p>
                <div className="flex justify-end items-center">
                    <div className="flex items-center gap-[10px] text-lightGrey ">
                        <IconComponent size={12} name="circle-clock" />
                        <span className="text-lightGrey text-[10px] font-normal">
                            {new Date(date).getHours()}
                            :
                            {new Date(date).getMinutes()}
                        </span>
                    </div>
                </div>
            </Link>
        );
    }
}