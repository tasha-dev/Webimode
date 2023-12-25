// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import ProjectStepsComponent from '@/chunk/page/dashboard/projectStepsComponent';

// Creating and exporting third divider of dashboard page as default
export default function ThirdDivComponent():ReactNode {
    // Returning JSX
    return (
        <div>
            <div className="flex items-center justify-between gap-[10px] mb-[26px]">
                <span className="text-[20px] font-normal dark:text-white text-dark block truncate">روند تکمیل آخرین پروژه</span>
                <div className="lg:hidden block">
                    <Link href={'/dashboard/projects'} className="btn-secondary-theme-icon">
                        <IconComponent name="chevron-left" size={10} />
                    </Link>
                </div>
                <div className="lg:block hidden">
                    <Link href={'/dashboard/projects'} className="btn-primary whitespace-nowrap">
                        مشاهده همه
                        <span className="w-[16px] h-[16px] aspect-squar bg-white flex items-center justify-center text-theme rounded-full">
                            <IconComponent name="chevron-left" size={10} />
                        </span>
                    </Link>
                </div>
            </div>
            <div className="p-[32px] border dark:border-lightestDark border-lighterGrey rounde-[48px] grid lg:grid-cols-3 rounded-[48px]">
                <div className="lg:col-span-2 lg:pb-[32px] pb-[32px] lg:px-[20px]">
                    <span className="text-[20px] font-normal dark:text-white text-dark block truncate mb-[32px]">پروژه طراحی سایت فروشگاهی آفلند</span>
                    <div className="grid grid-cols-4 overflow-auto xl:gap-[50px] sm:gap-[30px] gap-[20px]">
                        <ProjectStepsComponent percent={100} title="طراحی UI UX" />
                        <ProjectStepsComponent percent={64} title="برنامه نویسی فرانت اند" />
                        <ProjectStepsComponent percent={48} title="برنامه نویسی بک اند" />
                        <ProjectStepsComponent isLastOne percent={23} title="دیباگ کردن پروژه" />
                    </div>
                </div>
                <div className="lg:border-r border-0 lg:border-t-0 border-t  border-lightGrey lg:pr-[32px] lg:pt-0 pt-[32px]">
                    <span className="text-[16px] font-normal text-dark block truncate mb-[12px]">توضیحات پروژه :</span>
                    <p className="text-[13px] font-normal dark:text-white text-lightGrey leading-[28px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است شیش شکیئخ شجختنی</p>
                </div>
            </div>
        </div>
    );
}