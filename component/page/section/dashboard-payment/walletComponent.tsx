// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import {Doughnut} from "react-chartjs-2";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import {Chart as ChartJS, ArcElement} from "chart.js";

// Defining type of props
interface propsType {
    totalCash: number;
    cashOut: {
        price: number,
        percent: number
    };
    diposit: {
        price: number,
        percent: number
    };
}

// Creating and exporting wallet component in payment page of dashboard as default
export default function WalletComponent({cashOut, diposit, totalCash}:propsType):ReactNode {
    // register chartJS
    ChartJS.register(ArcElement);

    // Returning JSX
    return (
        <div className="lg:px-[32px] px-[20px] lg:py-[16px] py-[20px] dark:bg-pageDark bg-dark bg-cover bg-[url(../public/img/dashboard-payment/img-bg-wallet.png)] lg:rounded-[32px] rounded-[20px] grid lg:grid-cols-4 gap-[32px]">
            <div className="flex lg:flex-row flex-col lg:items-center items-start gap-[24px] lg:col-span-3">
                <div className="w-[120px] h-[120px] overflow-hidden shrink-0 dark:bg-lightestDark bg-white rounded-full">
                    <Doughnut data={{
                        labels: ['diposit', 'cash-out'],
                        datasets: [
                            {
                                data: [diposit.percent, cashOut.percent],
                                backgroundColor: [
                                    '#FF7089',
                                    '#49B486'
                                ],
                            },
                        ],
                    }} options={{ responsive: true }} />
                </div>
                <div>
                    <div className="mb-[8px] flex items-center gap-[12px] text-lightGrey">
                        <IconComponent size={16} name="wallet" />
                        <span className="text-[13px] font-normal">کیف پول من</span>
                    </div>
                    <p className="truncate mb-[12px]">
                        <span className="text-[28px] inline-block ml-[1ch] text-white font-bold">{totalCash.toLocaleString()}</span>
                        <span className="text-[16px] inline-block text-white font-normal">تومان</span>
                    </p>
                    <div className="flex lg:flex-row flex-col items-center gap-[24px]">
                        <div className="flex items-center gap-[8px]">
                            <div className="w-[12px] h-[12px] rounded-full bg-theme" />
                            <p className="text-white text-[13px] font-normal">
                                میزان واریزی :
                                <span className="text-theme inline-block mr-[1ch] font-bold">
                                    {diposit.price}
                                    تومان
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <div className="w-[12px] h-[12px] rounded-full bg-alert" />
                            <p className="text-white text-[13px] font-normal">
                                میزان برداشتی  :
                                <span className="text-alert inline-block mr-[1ch] font-bold">
                                    {cashOut.price}
                                    تومان
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Link href={'#'} className="btn-primary whitespace-nowrap mb-[22px] shadow-custom">
                    <div className="w-[16px] h-[16px] aspect-squar shrink-0 bg-white flex items-center justify-center text-theme rounded-full">
                        <span className="h-[130%]">+</span>
                    </div>
                    <span className="truncate block">مشاهده همه</span>
                </Link>
                <Link href={'#'} className="btn-alert whitespace-nowrap shadow-custom">
                    <div className="w-[16px] h-[16px] aspect-squar shrink-0 bg-white flex items-center justify-center text-alert rounded-full">
                        <span className="h-[120%]">+</span>
                    </div>
                    <span className="truncate block">مشاهده همه</span>
                </Link>
            </div>
        </div>
    );
}