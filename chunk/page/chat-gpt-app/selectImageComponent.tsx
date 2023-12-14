// Importing part
import {EventHandler, ReactNode} from "react";
import Image from "next/image";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    img: string;
    onClick: EventHandler<any>;
}

// Creating and exporting select image component as default
export default function SelectImageComponent({img, onClick}:propsType):ReactNode {
    // Returning JSX
    return (
        <div onClick={onClick} className="relative h-[130px] w-[180px] shrink-0 rounded-[12px] overflow-hidden block transition-all duration-500 border-[1.5px] border-transparent hover:border-white shadow-black group">
            <Image src={img} alt="" className="w-full object-cover h-full absolute top-0 left-0 z-[1]" width={1000} height={1000} />
            <div className="relative z-[2] opacity-0 transition-all duration-500 invisible group-hover:opacity-100 group-hover:visible p-[12px]">
                <div className="bg-pageDark px-[4px] py-[6px] rounded-[4px] text-white inline-block">
                    <IconComponent width={20} height={4} name="three-dots" />
                </div>
                <div className="w-full h-full bg-pageDark rounded-[8px] overflow-hidden p-[4px]">
                    <button className="p-[8px] bg-pageDark rounded-[8px] transition-all duration-500 hover:bg-white/20 w-full flex items-center justify-start gap-[8px]">
                        <span className="text-white shrink-0"><IconComponent name="image" size={12} /></span>
                        <span className="text-white font-normal text-[10px] truncate block">باز کردن در صفحه جدید</span>
                    </button>
                    <button className="p-[8px] bg-pageDark rounded-[8px] transition-all duration-500 hover:bg-white/20 w-full flex items-center justify-start gap-[8px]">
                        <span className="text-white shrink-0"><IconComponent name="cloud-download" size={12} /></span>
                        <span className="text-white font-normal text-[10px] truncate block">دانلود عکس</span>
                    </button>
                </div>
            </div>
        </div>
    );
}