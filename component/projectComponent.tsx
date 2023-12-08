// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import Image from 'next/image';
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    rating: number;
    title: string;
    img: string;
    maxPrice: number;
    minPrice: number;
    link: string;
    children: string;
    theme?: 'white' | 'theme';
    ratingTheme?: 'white' | 'theme' | 'blue' | 'red';
}

// Creating and exporting project component as default
export default function ProjectComponent({img, link, maxPrice, minPrice, rating, title, children, theme = 'white', ratingTheme = theme}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} className="group block">
            <Image width={1000} height={1000} alt={title} src={img} className="w-full h-[182px] rounded-[32px] mb-[16px] block object-cover" />
            <div>
                <div className="flex items-center justify-between mb-[16px] gap-[10px] w-full">
                    <span data-theme={theme} className="text-[20px] block truncate font-normal w-full data-[theme='white']:text-white data-[theme='theme']:text-dark">{title}</span>
                    <div data-theme={theme} data-rating-theme={ratingTheme} className="shadow-lg border data-[theme='white']:border-white data-[theme='theme']:border-theme shrink-0 data-[rating-theme='white']:text-theme data-[rating-theme='theme']:text-theme data-[rating-theme='blue']:text-darketThemeBlue data-[rating-theme='red']:text-themeRed bg-white flex items-center data-[] gap-[4px] rounded-[8px] px-[8px] py-[6px]">
                        <span className="font-bold text-[13px] block">{rating.toFixed(1)}</span>
                        <IconComponent name="rounded-star" size={16} />
                    </div>
                </div>
                <p data-theme={theme} className="text-[16px] leading-[32px] line-clamp-2 font-normal data-[theme='white']:text-white data-[theme='theme']:text-lighterGrey mb-[16px]">
                    {children}
                </p>
                <p data-theme={theme} className="text-end data-[theme='white']:text-white data-[theme='theme']:text-theme text-[20px] font-normal mb-[32px]">
                    <span className="font-bold inline-block ml-[1ch]">{minPrice.toLocaleString()}</span>
                    <span className="ml-[1ch]">-</span>
                    <span className="font-bold inline-block ml-[1ch]">{maxPrice.toLocaleString()}</span>
                    میلیون تومان
                </p>
                <div data-theme={theme} className="transition-all duration-500 flex w-full p-[12px] items-center justify-center rounded-[14px] bg-transparent border data-[theme='white']:border-white data-[theme='theme']:border-theme font-bold data-[theme='white']:text-white data-[theme='theme']:text-theme text-[16px] gap-[16px] group-hover:shadow-custom">
                    مشاهده سایت
                    <IconComponent name="chevron-left" size={16} />
                </div>
            </div>
        </Link>
    );
}