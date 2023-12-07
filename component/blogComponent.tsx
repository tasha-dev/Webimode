// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";
import Image from 'next/image';
import BgImage from '@/public/img/blog/img-bg.png';

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
        <article>
            <Link href={link} className="block group">
                <Image className="w-full h-full object-cover block mb-[16px] rounded-[20px]" src={img} width={1000} height={1000} alt={title} />
                <div className="relative">
                    <Image width={1000} height={1000} alt="" src={BgImage.src} className="absolute top-0 left-0 w-full h-full z-[-1] transition-all duration-500 grayscale group-hover:grayscale-0" />
                    <div className="w-full rounded-[32px] p-[20px]">
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
                            className={'transition-all shadow-custom-theme flex items-center w-full justify-center gap-[16px] lg:text-[18px] text-[13px] font-normal p-[12px] rounded-[14px] duration-200 text-white data-[theme="white"]:border data-[theme="white"]:border-white data-[theme="theme"]:bg-theme data-[theme="white"]:bg-transparent data-[theme="theme"]:group-hover:bg-darkerTheme data-[theme="white"]:group-hover:text-white/50 data-[theme="white"]:group-hover:border-white/50'}
                        >
                            مشاهده مقاله    
                            <IconComponent size={16} name="chevron-left" />
                        </button>
                    </div>
                </div>
            </Link>
        </article>
    );
}