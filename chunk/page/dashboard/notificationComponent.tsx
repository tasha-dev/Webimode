// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";

// Defining type of props
interface propsType {
    sender: string;
    count: number;
    date: Date;
    children: string;
    link: string;
}

// Creating and exporting notification component as default
export default function NotificationComponent({children, count, date, sender, link}:propsType):ReactNode {
    // Returning JSX
    return (
        <li>
            <Link href={link} className="flex bg-white gap-[10px] items-start group border border-lightGrey rounded-[20px] overflow-hidden">
                <div className="p-[12px] shrink-0">
                    <div className="w-[40px] h-[40px] flex justify-center items-center bg-lightGrey rounded-[8px] transition-all duration-500 group-hover:bg-theme text-white">
                        <IconComponent name="bell" size={20} />
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center gap-[10px]">
                        <div className="py-[12px] flex items-center gap-[10px]">
                            <span className="text-dark text-[12px] font-normal block truncate max-w-[20ch]">{sender}</span>
                            {
                                (count !== 0)
                                    ? (
                                        <div className="shrink-0 w-[20px] h-[20px] text-lightGrey bg-lighterGrey rounded-full aspect-square flex items-center justify-center text-[12px] font-bold transition-all duration-500 group-hover:bg-theme group-hover:text-white">
                                            <span className="block h-[80%]">{count}</span>
                                        </div>
                                    ) : false
                            }
                        </div>
                        <div className="shrink-0 px-[10px] py-[10px] transition-all duration-500 bg-lighterGrey text-lightGrey group-hover:text-white group-hover:bg-theme flex items-center justify-center gap-[10px] rounded-tl-[20px] rounded-br-[20px]">
                            <IconComponent name="calender-clock" size={16} />
                            <span className="text-[11px] font-normal text-current">
                                {new Date(date).toLocaleDateString('fa-ir')}
                            </span>
                            /
                            <span className="text-[11px] font-normal text-current">
                                {new Date(date).getHours().toLocaleString()}
                                :
                                {new Date(date).getMinutes().toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <div className="pl-[12px] py-[12px]">
                        <p className="line-clamp-2 text-[12px] font-normal text-lightGrey">{children}</p>
                    </div>
                </div>
            </Link>
        </li>
    );
}