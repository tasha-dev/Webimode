// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import ProjectTitleComponent from '@/chunk/page/dashboard/projectTitleComponent';
import ProjectStateComponent from '@/chunk/page/dashboard/projectStateComponent';

// Creating and exporting fourth divider of dashboard page as default
export default function FourthDivComponent():ReactNode {
    // Returning JSX
    return (
        <div className="lg:w-auto w-full overflow-auto">
            <div className="flex items-center justify-between gap-[10px] mb-[26px]">
                <span className="text-[20px] font-normal text-dark block truncate">روند تکمیل آخرین پروژه</span>
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
            <div className="lg:p-[32px] lg:border border-lightGrey lg:rounded-[48px]">
                <div className="lg:grid flex flex-col  grid-cols-3 gap-[23px]">
                    <div className="flex flex-col gap-[24px] lg:shrink shrink-0">
                        <ProjectTitleComponent count={3} link="#" theme="theme" title="طراحی سایت" />
                        <ProjectStateComponent theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" deadLine={new Date('2023/12/18')} uiUxProgress={48} frontEndProgress={73} backEndProgress={24} link='#' />
                        <ProjectStateComponent theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" deadLine={new Date('2023/12/17')} uiUxProgress={48} frontEndProgress={73} backEndProgress={24} link='#' />
                    </div>
                    <div className="flex flex-col gap-[24px] lg:shrink shrink-0">
                        <ProjectTitleComponent count={1} link="#" theme="purple" title="طراحی اپلیکیشن" />
                        <ProjectStateComponent theme="purple" title="پروژه طراحی سایت فروشگاهی مبیت" deadLine={new Date('2023/12/17')} uiUxProgress={48} frontEndProgress={73} backEndProgress={24} link='#' />
                    </div>
                    <div className="flex flex-col gap-[24px] lg:shrink shrink-0">
                        <ProjectTitleComponent count={0} link="#" theme="blue" title="طراحی لوگو" />
                        <ProjectStateComponent theme="blue" title="پروژه طراحی سایت فروشگاهی مبیت" deadLine={new Date('2023/12/18')} uiUxProgress={48} frontEndProgress={73} backEndProgress={24} link='#' />
                        <ProjectStateComponent theme="blue" title="پروژه طراحی سایت فروشگاهی مبیت" deadLine={new Date('2023/12/18')} uiUxProgress={48} frontEndProgress={73} backEndProgress={24} link='#' />
                    </div>
                </div>
            </div>
        </div>
    );
}