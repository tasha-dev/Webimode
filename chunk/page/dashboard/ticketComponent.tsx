// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    sender: string;
    date: string;
    link: string;
    children: string;
}

// Creating and exporting ticket component as default
export default function TicketComponent({children, date, link, sender}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} className="block bg-lightestGrey border border-lighterGrey group transition-all duration-500 rounded-[20px] p-[12px] hover:bg-theme hover:border-theme shadow-custom">
            <div className="flex items-start gap-[12px] mb-[12px]">
                <div className="flex items-center justify-center rounded-[8px] bg-lighterGrey text-white w-[36px] h-[36px] shrink-0 aspect-square transition-all duration-500 group-hover:bg-white group-hover:text-theme">
                    <IconComponent name="ticket" size={20} />
                </div>
                <div className="w-full">
                    <span className="block mb-[6px] text-[12px] text-dark truncate font-normal transition-all duration-500 group-hover:text-white">{sender}</span>
                    <div className="flex items-center gap-[8px]">
                        <span className="text-lightGrey  transition-all duration-500 group-hover:text-white">
                            <IconComponent size={12} name="calender-clock" />
                        </span>
                        <div className="flex items-center gap-[2ch] text-lightGrey transition-all duration-500 group-hover:text-white text-[8px] font-normal">
                            <span className="text-[8px] font-normal text-lightGrey transition-all duration-500 group-hover:text-white">{new Date(date).toLocaleDateString('fa-ir')}</span>
                            /   
                            <div className="flex items-center gap-[2ch]"> 
                                <span className="text-[8px] font-normal text-lightGrey transition-all duration-500 group-hover:text-white">{new Date(date).getHours().toLocaleString('fa-ir')}</span>
                                :
                                <span className="text-[8px] font-normal text-lightGrey transition-all duration-500 group-hover:text-white">{new Date(date).getMinutes().toLocaleString('fa-ir')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mb-[4px] text-[10px] line-clamp-2 font-normal leading-[18px] text-lightGrey transition-all duration-500 group-hover:text-white">{children}</p>
            <div className="flex items-center justify-end">
                <div className="w-[16px] h-[16px] flex items-center justify-center rounded-full bg-lightGrey text-white transition-all duration-500 group-hover:text-theme group-hover:bg-white">
                    <IconComponent name="chevron-left" size={10} />
                </div>
            </div>
        </Link>
    );
}