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
}

// Creating and exporting project component as default
export default function ProjectComponent({img, link, maxPrice, minPrice, rating, title, children}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} className="group block">
            <Image width={1000} height={1000} alt={title} src={img} className="w-full h-[182px] rounded-[32px] mb-[16px] block object-cover" />
            <div>
                <div className="flex items-center justify-between mb-[16px] w-full">
                    <span className="text-[20px] block truncate font-normal w-full text-white">{title}</span>
                    <div className="shadow-lg shrink-0 bg-white flex items-center text-theme gap-[4px] rounded-[8px] px-[8px] py-[6px]">
                        <span className="font-bold text-[13px] block">{rating.toFixed(1)}</span>
                        <IconComponent name="rounded-star" size={16} />
                    </div>
                </div>
                <p className="lg:hidden block text-[16px] leading-[32px] font-normal text-white mb-[16px]">
                    {children}
                </p>
                <p className="text-end text-white text-[20px] font-normal mb-[32px]">
                    <span className="font-bold inline-block ml-[1ch]">{minPrice.toLocaleString()}</span>
                    <span className="ml-[1ch]">-</span>
                    <span className="font-bold inline-block ml-[1ch]">{maxPrice.toLocaleString()}</span>
                    میلیون تومان
                </p>
                <div className="transition-all duration-500 flex w-full p-[12px] items-center justify-center rounded-[14px] bg-transparent border border-white font-bold text-white text-[16px] gap-[16px] group-hover:shadow-custom">
                    مشاهده سایت
                    <IconComponent name="chevron-left" size={16} />
                </div>
            </div>
        </Link>
    );
}