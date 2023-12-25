// Importing part
import {ReactNode, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import IconComponent from "@/chunk/iconComponent";
import useDateDiffrence from "@/hook/useDateDiffrence";

// Defining type of props
interface propsType {
    img: string;
    title: string;
    children: string;
    tags: Array<string>;
    price: number;
    link: string;
    startDate: string;
    endDate: string;
}

// Creating and exporting done project component as default
export default function DoneProjectComponent({children, startDate, link, price, tags, title, img, endDate}:propsType):ReactNode {
    // Getting time diffrence from start to end date
    const dateDiffrence:{
        years: number,
        months: number,
        days: number,
        hours: number,
        minutes: number,
        seconds: number,
    }  = useDateDiffrence(startDate, endDate);

    // Returning JSX
    return (
        <Link href={link} className="block transition-all duration-500 p-[12px] border dark:border-lightestDark border-lightGrey dark:bg-pageDark bg-lighterGrey hover:bg-white rounded-[24px] group">
            <Image alt={title} src={img} width={1000} height={1000} className="w-full h-[93px] object-cover mb-[16px] rounded-[24px]" />
            <div className="flex items-center justify-between gap-[20px] mb-[8px]">
                <span className="text-[16px] font-normal dark:text-white text-dark">{title}</span>
                <div className="flex items-center px-[8px] py-[4px] rounded-[6px] transition-all duration-500 bg-lightGrey text-lightestDark dark:group-hover:bg-theme group-hover:bg-dark group-hover:text-white">
                    <IconComponent size={10} name="calender-clock" />
                    <span className="text-[10px] text-current font-normal mr-[10px]">{new Date(endDate).toLocaleDateString('fa-ir')}</span>
                </div>
            </div>
            <p className="text-lightGrey text-[10px] font-normal mb-[12px]">{children}</p>
                <div className="text-lightGrey transition-all duration-500 dark:group-hover:text-white group-hover:text-dark mb-[12px] flex items-center gap-[10px]">
                    <IconComponent size={12} name="circle-clock" />
                    {
                        (dateDiffrence.days !== 0)
                            ? (
                                <div className="text-[13px] font-normal text-current">
                                    <span className="font-bold ml-[1ch]">{dateDiffrence.days}</span>
                                    روز
                                </div>
                            ) : false
                    }
                    {
                        (dateDiffrence.hours !== 0)
                            ? (
                                <div className="text-[13px] font-normal text-current">
                                    <span className="font-bold ml-[1ch]">{dateDiffrence.hours}</span>
                                    ساعت
                                    :
                                </div>
                            ) : false
                    }
                    {
                        (dateDiffrence.minutes !== 0)
                            ? (
                                <div className="text-[13px] font-normal text-current">
                                    <span className="font-bold ml-[1ch]">{dateDiffrence.minutes}</span>
                                    دقیقه
                                </div>
                            ) : false
                    }
                </div>
                <div className="flex gap-[12px] items-center flex-wrap justify-start mb-[32px]">
                    {
                        tags.map((item:string, index:number) => (
                            <div key={index} className="px-[8px] py-[4px] bg-lightGrey text-dark text-[10px] font-normal rounded-[6px]">
                                {item}
                            </div>
                        ))
                    }
                </div>
                <div className="flex gap-[1ch] items-center rounded-[12px] justify-center py-[6px] bg-lightGrey text-lightestDark transition-all duration-500 group-hover:bg-theme group-hover:text-white">
                    <span className="text-[16px] font-bold">{price.toLocaleString()}</span>
                    <span className="text-[13px] font-normal">تومان</span>
                </div>
        </Link>
    );
}