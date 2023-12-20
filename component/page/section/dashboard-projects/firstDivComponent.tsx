// Importing part
import Link from "next/link";
import {ReactNode} from "react";
import Image from "next/image";
import DarkLeftSideImg from '@/public/img/dashboard-projects/img-right-side.png';
import DarkLeftSideImgMQ from '@/public/img/dashboard-projects/img-right-side-mq.png';
import PieChartComponent from "@/chunk/page/dashboard/pieChartComponent";

// Creating and exporting first divider of projects page in dashboard as default
export default function FirstDivComponent():ReactNode {
    // Returning JSX
    return (
        <div className="flex xl:flex-row flex-col gap-[20px]">
            <div className="col-span-3 bg-dark shadow-lg rounded-[32px] shadow-custom grid-cols-4 lg:h-[181px] xl:w-[70%] w-full relative lg:grid hidden">
                <div className="px-[32px] py-[22px] col-span-2">
                    <p className="w-full mb-[12px] flex">
                        <span className="text-white font-normal whitespace-nowrap text-[24px] inline-block ml-[1ch]">همین الان به راحتی </span>
                        <span className="text-white font-semibold truncate text-[24px] inline-block">پروژه خودت رو اضافه کنید</span>
                    </p>
                    <p className="text-[13px] text-white font-normal mb-[16px] line-clamp-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</p>
                    <Link href={'/create'} className="small-btn-primary xl:w-[50%] w-full">
                        <div className="w-[16px] h-[16px] flex items-center justify-center rounded-full bg-white text-theme">
                            <span className="block h-full">+</span>
                        </div>
                        <span className="block truncate">ثبت پروژه جدید</span>
                    </Link>
                </div>
                <Image alt="" width={272} height={218} src={DarkLeftSideImg.src} className="w-[300px] absolute top-0 left-[30px] -translate-y-[40px] lg:block hidden" /> 
                <Image alt="" width={272} height={218} src={DarkLeftSideImgMQ.src} className="w-full lg:hidden block" /> 
            </div>
            <div className="xl:w-[30%] w-full">
                <PieChartComponent small data={[10, 15, 20, 25, 14]} link="" title="" type="project-counts" noTop />
            </div>
        </div>
    );
}