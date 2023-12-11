// Importing part
import {ReactNode} from "react";
import Image from "next/image";
import Link from "next/link";

// Defining type of props
interface propsType {
    img: string;
    name: string;
    cash: number;
}

// Creating and exporting profile component as default
export default function ProfileComponent({cash, img, name}:propsType):ReactNode {
    // Returning JSX
    return (
        <div>
            <div className="flex justify-start gap-[12px] mb-[16px] w-full">
                <Image alt={name} src={img} width={1000} height={1000} className="rounded-[12px] shrink-0 w-[50px] h-[50px] object-cover aspect-square" />
                <div className="w-full overflow-hidden">
                    <span className="block mb-[4px] truncate text-white font-normal text-[16px] w-full">{name}</span>
                    <div className="text-white text-[13px] font-normal flex items-center flex-wrap">
                        اعتبار من
                        <span>:</span>
                        <span className="mx-[1ch] text-theme">{cash.toLocaleString()}</span>
                        <span className="text-theme">تومان</span>
                    </div>
                </div>
            </div>
            <Link href='#' className="small-btn-primary">
                <div className="w-[20px] h-[20px] transition-all duration-500 rounded-full border bg-white text-theme flex items-center justify-center">
                    <span className="block h-[60%]">+</span>
                </div>
                افزایش اعتبار
            </Link>
        </div>
    );
}