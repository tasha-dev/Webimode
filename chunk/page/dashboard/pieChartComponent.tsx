// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";
import {Chart as ChartJS, ArcElement} from "chart.js";
import {Doughnut} from "react-chartjs-2";

// Defining type of props
interface propsType {
    data: Array<number>;
    title: string;
    link: string;
    type: 'wallet' | 'project-counts';
    noTop?: boolean;
    small?: boolean;
}

// Creaating and exporting pie chart component as default
export default function PieChartComponent({data, link, title, type, noTop = false, small = false}:propsType):ReactNode {
    // register chartJS
    ChartJS.register(ArcElement);

    // Conditional rendering
    if (type === 'wallet') {
        return (
            <div>
                {
                    (!noTop)
                        ? (
                            <div className="flex items-center justify-between gap-[10px] mb-[26px]">
                                <span className="text-[20px] font-normal dark:text-white text-dark block truncate">{title}</span>
                                <div className="lg:hidden block">
                                    <Link href={link} className="btn-secondary-theme-icon">
                                        <IconComponent name="chevron-left" size={10} />
                                    </Link>
                                </div>
                                <div className="lg:block hidden">
                                    <Link href={link} className="btn-primary whitespace-nowrap">
                                        مشاهده همه
                                        <span className="w-[16px] h-[16px] aspect-squar bg-white flex items-center justify-center text-theme rounded-full">
                                            <IconComponent name="chevron-left" size={10} />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ) : false
                }
                <div className="p-[24px] dark:bg-pageDark bg-lightestGrey border dark:border-black border-lightGrey rounded-[40px] flex lg:flex-row flex-col items-start gap-[24px]">
                    <div className="w-[120px] h-[120px] dark:bg-lightestDark bg-white rounded-full overflow-hidden shrink-0">
                        <Doughnut data={{
                            labels: ['taken', 'given'],
                            datasets: [
                                {
                                    data: data,
                                    backgroundColor: [
                                        '#FF7089',
                                        '#49B486'
                                    ],
                                },
                            ],
                        }} options={{responsive: true}} />
                    </div>
                    <div className="w-full">
                        <div className="mb-[8px] text-lightGrey flex items-center gap-[12px] flex-wrap">
                            <IconComponent size={16} name="wallet" />
                            <span className="text-[13px] font-normal text-current">کیف پول من</span>
                        </div>
                        <div className="flex flex-wrap items-end gap-[1ch]  mb-[16px]">
                            <span className="dark:text-white text-dark text-[28px] font-bold">{(15360000).toLocaleString()}</span>
                            <span className="dark:text-white text-dark text-[16px] font-normal">تومان</span>
                        </div>
                        <div className="mb-[16px] lg:hidden flex flex-col gap-[16px]">
                            <div className="flex-wrap flex whitespace-nowrap overflow-auto no-scroll items-center gap-[1ch]">
                                <div className="w-[12px] h-[12px] bg-theme rounded-full" />
                                <span className="text-[13px] font-bold text-dark dark:text-white">میزان واریزی :</span>
                                <span className="text-[10px] font-normal text-theme">{(18000000).toLocaleString()}</span>
                                <span className="text-[10px] font-normal text-theme">میلیون تومان</span>
                            </div>
                            <div className="flex-wrap flex whitespace-nowrap overflow-auto no-scroll items-center gap-[1ch]">
                                <div className="w-[12px] h-[12px] bg-alert rounded-full shrink-0" />
                                <span className="text-[13px] shrink-0 font-bold text-dark dark:text-white">میزان برداشتی :</span>
                                <span className="text-[10px] shrink-0 font-normal text-alert">{(18000000).toLocaleString()}</span>
                                <span className="text-[10px] shrink-0 font-normal text-alert">میلیون تومان</span>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-[24px]">
                            <div>
                                <div className="mb-[16px] lg:flex hidden whitespace-nowrap overflow-auto no-scroll items-center gap-[1ch]">
                                    <div className="w-[12px] h-[12px] bg-theme rounded-full" />
                                    <span className="text-[13px] font-bold text-dark dark:text-white">میزان واریزی :</span>
                                    <span className="text-[10px] font-normal text-theme">{(18000000).toLocaleString()}</span>
                                    <span className="text-[10px] font-normal text-theme">میلیون تومان</span>
                                </div>
                                <Link href={link} className="btn-primary whitespace-nowrap">
                                    <div className="w-[16px] h-[16px] aspect-squar shrink-0 bg-white flex items-center justify-center text-theme rounded-full">
                                        <span className="h-[130%]">+</span>
                                    </div>
                                    <span className="truncate block">مشاهده همه</span>
                                </Link>
                            </div>
                            <div>
                                <div className="mb-[16px] lg:flex hidden whitespace-nowrap overflow-auto no-scroll items-center gap-[1ch]">
                                    <div className="w-[12px] h-[12px] bg-alert rounded-full shrink-0" />
                                    <span className="text-[13px] shrink-0 font-bold text-dark dark:text-white">میزان برداشتی :</span>
                                    <span className="text-[10px] shrink-0 font-normal text-alert">{(18000000).toLocaleString()}</span>
                                    <span className="text-[10px] shrink-0 font-normal text-alert">میلیون تومان</span>
                                </div>
                                <Link href={link} className="btn-alert whitespace-nowrap">
                                    <div className="w-[16px] h-[16px] aspect-squar shrink-0 bg-white flex items-center justify-center text-alert rounded-full">
                                        <span className="h-[120%]">+</span>
                                    </div>
                                    <span className="truncate block">مشاهده همه</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                {
                    (!noTop)
                        ? (
                            <div className="flex items-center justify-between gap-[10px] mb-[26px]">
                                <span className="text-[20px] font-normal dark:text-white text-dark block truncate">{title}</span>
                                <div className="lg:hidden block">
                                    <Link href={link} className="btn-secondary-theme-icon">
                                        <IconComponent name="chevron-left" size={10} />
                                    </Link>
                                </div>
                                <div className="lg:block hidden">
                                    <Link href={link} className="btn-primary whitespace-nowrap">
                                        مشاهده همه
                                        <span className="w-[16px] h-[16px] aspect-squar bg-white flex items-center justify-center text-theme rounded-full">
                                            <IconComponent name="chevron-left" size={10} />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ) : false
                }
                <div className="p-[24px] dark:bg-pageDark bg-lightestGrey border dark:border-black border-lightGrey rounded-[40px]">
                    <div className="flex lg:flex-row flex-col items-start gap-[24px]">
                        <div data-small={small} className="data-[small='false']:w-[120px] data-[small='false']:h-[120px] data-[small='true']:w-[68px] data-[small='true']:h-[68px] dark:bg-lightestDark bg-white rounded-full overflow-hidden shrink-0">
                            <Doughnut data={{
                                labels: ['web-design', 'logo-design', 'motion-graphic', 'seo', 'application'],
                                datasets: [
                                    {
                                        data: data,
                                        backgroundColor: [
                                            '#FF7089',
                                            '#9288F8',
                                            '#FF9E45',
                                            '#49B486',
                                            '#2B96CC'
                                        ],
                                    },
                                ],
                            }} options={{ responsive: true }} />
                        </div>
                        <div className="w-full">
                            <div className="mb-[12px] text-lightGrey flex items-center gap-[12px] flex-wrap">
                                <IconComponent size={16} name="circle-state" />
                                <span className="text-[13px] font-normal text-current">تعداد کل پروژه ها</span>
                            </div>
                            {
                                (!small)
                                    ? (
                                        <>
                                            <div className="flex items-end gap-[1ch] mb-[20px]">
                                                <span className="dark:text-white text-dark text-[28px] font-bold">{3}</span>
                                                <span className="dark:text-white text-dark text-[16px] font-normal">پروژه</span>
                                            </div>
                                            <div className="flex gap-[16px] flex-wrap">
                                                <div className="flex items-center gap-[6px]">
                                                    <div className="w-[12px] h-[12px] aspect-square shrink-0 bg-alert rounded-full" />
                                                    <span className="text-[13px] font-normal text-alert">طراحی سایت</span>
                                                </div>
                                                <div className="flex items-center gap-[6px]">
                                                    <div className="w-[12px] h-[12px] aspect-square shrink-0 bg-themePurple rounded-full" />
                                                    <span className="text-[13px] font-normal text-themePurple">طراحی لوگو</span>
                                                </div>
                                                <div className="flex items-center gap-[6px]">
                                                    <div className="w-[12px] h-[12px] aspect-square shrink-0 bg-lightOrange rounded-full" />
                                                    <span className="text-[13px] font-normal text-lightOrange">موشن گرافیک</span>
                                                </div>
                                                <div className="flex items-center gap-[6px]">
                                                    <div className="w-[12px] h-[12px] aspect-square shrink-0 bg-darkFrogGreen rounded-full" />
                                                    <span className="text-[13px] font-normal text-darkFrogGreen">سئو</span>
                                                </div>
                                                <div className="flex items-center gap-[6px]">
                                                    <div className="w-[12px] h-[12px] aspect-square shrink-0 bg-themeBlue rounded-full" />
                                                    <span className="text-[13px] font-normal text-themeBlue">اپلیکیشن</span>
                                                </div>
                                            </div>
                                        </>
                                    ) : false
                            }
                        </div>
                    </div>
                    {
                        (small)
                            ? (
                                <>
                                    <div className="flex items-end gap-[1ch] mb-[20px]">
                                        <span className="dark:text-white text-dark text-[28px] font-bold">{3}</span>
                                        <span className="dark:text-white text-dark text-[16px] font-normal">پروژه</span>
                                    </div>
                                    <div className="flex gap-[16px] flex-wrap">
                                        <div className="flex items-center gap-[6px]">
                                            <div className="w-[12px] h-[12px] aspect-square shrink-0 bg-alert rounded-full" />
                                            <span className="text-[13px] font-normal text-alert">طراحی سایت</span>
                                        </div>
                                        <div className="flex items-center gap-[6px]">
                                            <div className="w-[12px] h-[12px] aspect-square shrink-0 bg-themePurple rounded-full" />
                                            <span className="text-[13px] font-normal text-themePurple">طراحی لوگو</span>
                                        </div>
                                        <div className="flex items-center gap-[6px]">
                                            <div className="w-[12px] h-[12px] aspect-square shrink-0 bg-lightOrange rounded-full" />
                                            <span className="text-[13px] font-normal text-lightOrange">موشن گرافیک</span>
                                        </div>
                                        <div className="flex items-center gap-[6px]">
                                            <div className="w-[12px] h-[12px] aspect-square shrink-0 bg-darkFrogGreen rounded-full" />
                                            <span className="text-[13px] font-normal text-darkFrogGreen">سئو</span>
                                        </div>
                                        <div className="flex items-center gap-[6px]">
                                            <div className="w-[12px] h-[12px] aspect-square shrink-0 bg-themeBlue rounded-full" />
                                            <span className="text-[13px] font-normal text-themeBlue">اپلیکیشن</span>
                                        </div>
                                    </div>
                                </>
                            ) : false
                    }
                </div>
            </div>
        );
    }
}