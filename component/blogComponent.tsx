// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";
import Image from 'next/image';

// Defining type of props
interface propsType {
    img: string;
    genre: string;
    date: Date;
    title: string;
    children: string;
    link: string;
}

// Creating and exporting blog compnonent as default
export default function BlogComponent({children, date, genre, img, title, link}:propsType):ReactNode {
    // Returning JSX
    return (
        <article className="group">
            <Link href={link} className="rounded-[20px] h-[186px] overflow-hidden block mb-[16px]">
                <Image className="w-full h-full object-cover" src={img} width={1000} height={1000} alt={title} />
            </Link>
            <Link href={link} className="relative block p-[2px]">
                <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-lightGrey group-hover:from-theme to-white rounded-[32px] z-[-1]" />
                <div className="bg-white w-full rounded-[32px] p-[24px]">
                    <div className="flex flex-wrap gap-[10px] mb-[9px] items-center">
                        <span className="text-[13px] font-normal text-lightGrey">{genre}</span>
                        <div className="w-[1px] h-[16px] bg-lightGrey rounded-[100px]" />
                        <div className="flex items-center gap-[8px] text-lightGrey">
                            <IconComponent name="clock" size={16} />
                            <span className="text-[13px] font-normal">{date.toLocaleDateString('fa-ir')}</span>
                        </div>
                    </div>
                    <span className="mb-[8px] text-dark truncate block lg:text-[24px] text-[16px] font-normal">{title}</span>
                    <p className="text-lightGrey font-normal lg:text-[15px] text-[13px] line-clamp-5 leading-[28px] lg:mb-[32px] mb-[24px]">{children}</p>
                    <button className="transition-all duration-200 group-hover:bg-darkerTheme bg-theme text-white flex items-center justify-center gap-[16px] lg:text-[18px] text-[13px] font-normal shadow-custom p-[12px] rounded-[14px] w-full">
                        مشاهده مقاله    
                        <IconComponent size={16} name="chevron-left" />
                    </button>
                </div>
            </Link>
        </article>
    );
}