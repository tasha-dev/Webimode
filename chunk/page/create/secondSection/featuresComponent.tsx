// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    icon: 'rounded-star'|'headphone'|'shield-check'|'percentage';
    link: string;
    title: string;
    children: string;
}

// Creating and exporting features component as default
export default function FeaturesComponent({icon, link, children, title}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} className="group relative h-[182px] block grayscale transition-all duration-500 hover:grayscale-0 bg-[url(../public/img/create/secondSection/img-features-bg-theme.png)] lg:bg-cover bg-contain bg-no-repeat">
            <div className="z-[-1] absolute right-0 top-0 lg:w-[50px] w-[75%] h-full bg-gradient-to-l from-white via-white to to-transparent" />
            <div className="p-[20px]">
                <div className="h-[30px] mb-[8px] w-[30px] flex items-center justify-center rounded-[8px] transition-all duration-500 bg-lighterGrey text-lightGrey group-hover:bg-theme group-hover:text-white shadow-custom">
                    <IconComponent size={20} name={icon} />
                </div>
                <span className="mb-[8px] text-[20px] font-semibold text-dark truncate block">{title}</span>
                <p className="line-clamp-3 text-dark text-[13px] font-normal leadig-[24px]">{children}</p>
            </div>
            <div className="absolute top-[10px] left-[10px] w-[28px] h-[28px] flex items-center transition-all duration-500 justify-center rounded-full bg-lighterGrey text-lightGrey group-hover:bg-theme group-hover:text-white shadow-custom">
                <IconComponent size={14} name="arrow-lt" />
            </div>
        </Link>
    );
}