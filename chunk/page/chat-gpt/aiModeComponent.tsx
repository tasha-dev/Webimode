// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";
import Image from "next/image";

// Defining type of props
interface propsType {
    icon: 'image' | 'ai' | 'question-chat' | 'chat';
    link: string;
    img: string;
    title: string;
    children: string;
}

// Creating and exporting ai mode component as default
export default function AiModeComponent({children, icon, img, link, title}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} className="block group overflow-hidden">
            <div className="px-[24px] transition-all duration-500 pt-[22px] pb-[90px] rounded-[40px] bg-pageDark group-hover:bg-theme border-[3px] border-lightestDark group-hover:border-theme lg:flex items-start gap-[10px]">
                <div className="lg:block flex items-center justify-between gap-[10px] lg:mb-0 mb-[16px]">
                    <div className="w-[68px] h-[68px] transition-all duration-500 flex items-center justify-center rounded-full border-[10px] group-hover:bg-theme group-hover:border-darkerTheme group-hover:text-white border-dark bg-pageDark aspect-square shadow-custom text-lightGrey">
                        <IconComponent size={24} name={icon} />
                    </div>
                    <div className="w-[36px] h-[36px] transition-all duration-500 shrink-0 rounded-full lg:hidden flex items-center justify-center aspect-square bg-pageDark group-hover:bg-white border border-lightestDark group-hover:border-theme text-lightGrey group-hover:text-theme shadow-[0_8px_20px_rgba(0,0,0,.24)]">
                        <IconComponent size={12} name="arrow-lt"/>
                    </div>
                </div>
                <div className="lg:w-[calc(90%-24px)]">
                    <div className="flex items-center justify-between mb-[8px] gap-[10px]">
                        <span className="lg:text-[24px] text-[13px] font-normal truncate w-full text-white">{title}</span>
                        <div className="w-[36px] h-[36px] transition-all duration-500 shrink-0 rounded-full lg:flex hidden items-center justify-center aspect-square bg-pageDark group-hover:bg-white border border-lightestDark group-hover:border-theme text-lightGrey group-hover:text-theme shadow-[0_8px_20px_rgba(0,0,0,.24)]">
                            <IconComponent size={12} name="arrow-lt"/>
                        </div>
                    </div>
                    <p className="text-lightGrey transition-all duration-500 group-hover:text-white lg:leading-[34px] leading-[28px] lg:text-[16px] text-[13px] font-normal">{children}</p>
                </div>
            </div>
            <div className="px-[24px]">
                <Image className="rounded-[40px] transition-all duration-500 group-hover:border-theme/50 object-cover h-[235px] border-[3px] border-lightestDark w-full shadow-[0_8px_20px_rgba(0,0,0,.24)] -mt-[71px]" width={1000} height={1000} src={img} alt={title} />
            </div>
        </Link>
    );
}