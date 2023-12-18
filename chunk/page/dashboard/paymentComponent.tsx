// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import Image from "next/image";
import TopLeftImageTheme from '@/public/img/dashboard/img-payment-top-left-theme.svg';
import TopLeftImageAlert from '@/public/img/dashboard/img-payment-top-left-alert.svg';

// Defining type of props
interface propsType {
    paymentType: 'deposit' | 'cash-out';
    price: number;
    date: string;
    link: string;
}

// Creating and exporting payment component as default
export default function PaymentComponent({date, link, paymentType, price}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} data-payment={paymentType} className="relative block data-[payment='deposit']:bg-theme data-[payment='cash-out']:bg-alert group overflow-hidden rounded-[20px]">
            <Image alt="" src={(paymentType === 'cash-out') ? TopLeftImageAlert.src : TopLeftImageTheme.src} width={50} height={50} className="absolute top-0 left-0 z-[1]" />
            <div className="p-[12px] realtive z-[2]">
                <div data-payment={paymentType} className="bg-white mb-[4px] max-w-[36px] h-[21px] flex items-center justify-center rounded-[8px] data-[payment='deposit']:text-theme data-[payment='cash-out']:text-alert">
                    <IconComponent width={18} height={9} name={(paymentType === 'cash-out') ? 'cash-out' : 'deposit'} />
                </div>
                <span className="text-white mb-[4px] block truncate text-[13px] font-normal">
                    {
                        (paymentType === 'cash-out')
                            ? 'برداشت وجه'
                            : 'واریز وجه'
                    }
                </span>
                <p className="truncate text-white mb-[4px]">
                    <span className="font-bold text-[20px] inline-block ml-[1ch]">{price.toLocaleString()}</span>
                    <span className="font-normal text-[13px]">هزار تومان</span>
                </p>
                <div className="flex items-center flex-wrap justify-between gap-[10px]">
                    <div className="flex items-center gap-[8px] px-[8px] py-[4px] border border-white/50 shadow-custom rounded-[6px] max-w-[200px] overflow-auto no-scroll">
                        <span className="text-white">
                            <IconComponent size={12} name="calender-clock" />
                        </span>
                        <div className="flex items-center gap-[2ch] text-white text-[8px] font-normal">
                            <span className="text-[8px] font-normal text-white">{new Date(date).toLocaleDateString('fa-ir')}</span>
                            /
                            <div className="flex items-center gap-[2ch]">
                                <span className="text-[8px] font-normal text-white">{new Date(date).getHours().toLocaleString('fa-ir')}</span>
                                :
                                <span className="text-[8px] font-normal text-white">{new Date(date).getMinutes().toLocaleString('fa-ir')}</span>
                            </div>
                        </div>
                    </div>
                    <div data-payment={paymentType} className="w-[16px] h-[16px] aspect-square data-[payment='deposit']:text-theme data-[payment='cash-out']:text-alert flex items-center justify-center rounded-full bg-white/50 transition-all duration-500 group-hover:bg-white">
                        <IconComponent name="chevron-left" size={10} />
                    </div>
                </div>
            </div>
        </Link>
    );
}