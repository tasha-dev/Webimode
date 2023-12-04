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
    theme?: 'white' | 'theme';
}

// Creating and exporting blog compnonent as default
export default function BlogComponent({children, date, genre, img, title, link, theme = 'theme'}:propsType):ReactNode {
    // Returning JSX
    return (
        <article className="group">
            <Link href={link} className="rounded-[20px] h-[186px] overflow-hidden block mb-[16px]">
                <Image className="w-full h-full object-cover" src={img} width={1000} height={1000} alt={title} />
            </Link>
            <Link href={link} className="relative block p-[2px]">
                <div data-theme={theme} className="w-full h-full absolute top-0 left-0 data-[theme='theme']:bg-gradient-to-tr data-[theme='theme']:from-lightGrey data-[theme='theme']:group-hover:from-theme data-[theme='theme']:to-white data-[theme='white']:bg-gradient-to-br data-[theme='white']:from-lightGrey data-[theme='white']:to-lightGrey data-[theme='white']:group-hover:to-transparent rounded-[32px] z-[-1]" />
                <div data-theme={theme} className="data-[theme='theme']:bg-white data-[theme='white']:bg-darkerTheme w-full rounded-[32px] p-[24px]">
                    <div className="flex flex-wrap gap-[10px] mb-[9px] items-center">
                        <span data-theme={theme} className="text-[13px] font-normal data-[theme='theme']:text-lightGrey data-[theme='white']:text-lighterGrey">{genre}</span>
                        <div data-theme={theme} className="w-[1px] h-[16px] data-[theme='theme']:bg-lightGrey data-[theme='white']:bg-lighterGrey rounded-[100px]" />
                        <div data-theme={theme} className="flex items-center gap-[8px] data-[theme='theme']:text-lightGrey data-[theme='white']:text-lighterGrey">
                            <IconComponent name="clock" size={16} />
                            <span className="text-[13px] font-normal">{date.toLocaleDateString('fa-ir')}</span>
                        </div>
                    </div>
                    <span data-theme={theme} className="mb-[8px] data-[theme='theme']:text-dark data-[theme='white']:text-white truncate block lg:text-[24px] text-[16px] font-normal">{title}</span>
                    <p data-theme={theme} className="data-[theme='theme']:text-lightGrey data-[theme='white']:text-lighterGrey font-normal lg:text-[15px] text-[13px] line-clamp-5 leading-[28px] lg:mb-[32px] mb-[24px]">{children}</p>
                    <button 
                        data-theme={theme}
                        className={'transition-all flex items-center w-full justify-center gap-[16px] lg:text-[18px] text-[13px] font-normal p-[12px] rounded-[14px] duration-200 text-white data-[theme="white"]:border data-[theme="white"]:border-white data-[theme="theme"]:bg-theme data-[theme="white"]:bg-darkerTheme data-[theme="theme"]:group-hover:bg-darkerTheme data-[theme="white"]:group-hover:text-white/50 data-[theme="white"]:group-hover:border-white/50'}
                    >
                        مشاهده مقاله    
                        <IconComponent size={16} name="chevron-left" />
                    </button>
                </div>
            </Link>
        </article>
    );
}