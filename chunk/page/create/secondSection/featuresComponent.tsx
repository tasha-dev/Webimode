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
    isActive?: boolean;
}

// Creating and exporting features component as default
export default function FeaturesComponent({icon, link, children, title, isActive = false}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} data-active={isActive} className="group relative h-[182px] block lg:grayscale data-[active='false']:grayscale transition-all duration-500 lg:hover:grayscale-0 bg-[url(../public/img/create/secondSection/img-features-bg-theme.png)] lg:bg-cover bg-contain bg-no-repeat">
            <div className="z-[1] absolute right-0 top-0 lg:w-[50px] w-[100%] h-full bg-gradient-to-l from-white via-white to to-transparent" />
            <div className="z-[1] absolute left-0 bottom-0 w-full lg:h-[50px] h-[50%] bg-gradient-to-t from-white via-white to to-transparent" />
            <div className="relative z-[2]">
                <div className="p-[20px]">
                    <div data-active={isActive} className="h-[30px] mb-[8px] w-[30px] flex items-center justify-center rounded-[8px] transition-all duration-500 data-[active='false']:bg-lighterGrey data-[active='false']:text-lightGrey lg:data-[active='true']:bg-lighterGrey data-[active='true']:bg-theme lg:data-[active='true']:text-lightGrey data-[active='true']:text-white lg:group-hover:bg-theme lg:group-hover:text-white shadow-custom">
                        <IconComponent size={20} name={icon} />
                    </div>
                    <span className="mb-[8px] text-[20px] font-semibold text-dark truncate block">{title}</span>
                    <p className="line-clamp-3 text-dark text-[13px] font-normal leadig-[24px]">{children}</p>
                </div>
                <div data-active={isActive} className="absolute top-[10px] left-[10px] w-[28px] h-[28px] flex items-center transition-all duration-500 justify-center rounded-full data-[active='false']:bg-lighterGrey data-[active='false']:text-lightGrey lg:data-[active='true']:bg-lighterGrey data-[active='true']:bg-theme lg:data-[active='true']:text-lightGrey data-[active='true']:text-white lg:group-hover:bg-theme lg:group-hover:text-white shadow-custom">
                    <IconComponent size={14} name="arrow-lt" />
                </div>
            </div>
        </Link>
    );
}