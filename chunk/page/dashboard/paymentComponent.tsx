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
        <Link href={link} data-payment={paymentType} className="group relative block bg-white data-[payment='deposit']:hover:bg-theme transition-all duration-500 data-[payment='cash-out']:hover:bg-alert group overflow-hidden rounded-[20px] border data-[payment='cash-out']:border-alert data-[payment='deposit']:border-theme">
            <Image alt="" src={(paymentType === 'cash-out') ? TopLeftImageAlert.src : TopLeftImageTheme.src} width={50} height={50} className="absolute top-0 left-0 z-[1] -translate-x-[2px] -translate-y-[2px]" />
            <div className="p-[12px] realtive z-[2]">
                <div data-payment={paymentType} className="transition-all duration-500 data-[payment='cash-out']:bg-alert data-[payment='deposit']:bg-theme group-hover:bg-white data-[payment='cash-out']:group-hover:text-alert data-[payment='deposit']:group-hover:text-theme text-white mb-[4px] max-w-[36px] h-[21px] flex items-center justify-center rounded-[8px]">
                    <IconComponent width={18} height={9} name={(paymentType === 'cash-out') ? 'cash-out' : 'deposit'} />
                </div>
                <span data-payment={paymentType} className="transition-all duration-500 data-[payment='cash-out']:text-alert data-[payment='deposit']:text-theme group-hover:text-white mb-[4px] block truncate text-[13px] font-normal">
                    {
                        (paymentType === 'cash-out')
                            ? 'برداشت وجه'
                            : 'واریز وجه'
                    }
                </span>
                <p data-payment={paymentType} className="truncate transition-all duration-500 data-[payment='cash-out']:text-alert data-[payment='deposit']:text-theme group-hover:text-white mb-[4px]">
                    <span className="font-bold text-[20px] inline-block ml-[1ch]">{price.toLocaleString()}</span>
                    <span className="font-normal text-[13px]">هزار تومان</span>
                </p>
                <div className="flex items-center flex-wrap justify-between gap-[10px]">
                    <div data-payment={paymentType} className="flex items-center gap-[8px] transition-all duration-500 data-[payment='cash-out']:border-alert data-[payment='deposit']:border-theme px-[8px] py-[4px] border group-hover:border-white/50 shadow-custom rounded-[6px] max-w-[200px] overflow-auto no-scroll">
                        <span data-payment={paymentType} className="transition-all duration-500 data-[payment='cash-out']:text-alert data-[payment='deposit']:text-theme group-hover:text-white">
                            <IconComponent size={12} name="calender-clock" />
                        </span>
                        <div data-payment={paymentType} className="flex items-center gap-[2ch] transition-all duration-500 data-[payment='cash-out']:text-alert data-[payment='deposit']:text-theme group-hover:text-white text-[8px] font-normal">
                            <span data-payment={paymentType} className="text-[8px] font-normal transition-all duration-500 data-[payment='cash-out']:text-alert data-[payment='deposit']:text-theme group-hover:text-white">{new Date(date).toLocaleDateString('fa-ir')}</span>
                            /
                            <div className="flex items-center gap-[2ch]">
                                <span data-payment={paymentType} className="text-[8px] font-normal transition-all duration-500 data-[payment='cash-out']:text-alert data-[payment='deposit']:text-theme group-hover:text-white">{new Date(date).getHours().toLocaleString('fa-ir')}</span>
                                :
                                <span data-payment={paymentType} className="text-[8px] font-normal transition-all duration-500 data-[payment='cash-out']:text-alert data-[payment='deposit']:text-theme group-hover:text-white">{new Date(date).getMinutes().toLocaleString('fa-ir')}</span>
                            </div>
                        </div>
                    </div>
                    <div data-payment={paymentType} className="w-[16px] h-[16px] aspect-square data-[payment='deposit']:bg-theme data-[payment='cash-out']:bg-alert flex items-center justify-center rounded-full text-white transition-all duration-500 group-hover:bg-white data-[payment='deposit']:group-hover:text-theme data-[payment='cash-out']:group-hover:text-alert">
                        <IconComponent name="chevron-left" size={10} />
                    </div>
                </div>
            </div>
        </Link>
    );
}