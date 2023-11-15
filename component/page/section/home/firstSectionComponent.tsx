// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";
import Image from 'next/image';
import leftSideImage from '@/public/img/home/firstSection/img-left-side.png';
import bgZigzagImage from '@/public/img/home/firstSection/img-bg-zigzag.svg';

// Creating and exporting first section of home page as default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'relative pt-[100px]'}>
            <img className={'absolute top-0 z-[-1]'} src={bgZigzagImage.src} alt="عکس زیگزاگ در پس زمینه" />
            <div className={'flex gap-[186px] justify-between items-start px-[20px]'}>
                <main className={'w-[50%]'}>
                    <div className={'px-[12px] py-[8px] bg-theme theme-shadow mb-[10px] inline-block text-[15px] font-normal text-white rounded-l-[12px] rounded-tr-[12px]'}>تیم وبیمود</div>
                    <h1 className={'text-[64px] text-dark font-bold'}>وبیمود</h1>
                    <h2 className={'text-[64px] relative inline-block mb-[24px]'}>
                        <span className={'text-dark font-normal inline-block ml-[10px]'}>واقعی کردن</span>
                        <span className={'text-theme font-bold inline-block'}>ایده ها</span>
                        <span className={'text-theme absolute right-[102%] bottom-full flex flex-col w-[30px]'}>
                            <span className={'self-center'}><IconComponent name={'star'} size={10} /></span>
                            <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                        </span>
                    </h2>
                    <p className={'text-[28px] font-normal text-lightGrey leading-[56px] mb-[58px]'}>بهترین خدمات برنامه نویسی ، طرای سایت ، طراحی لوگو ، انیمیشن و... با تیم حرفه ای وبیمود کسب و کار خود را به سطح باللاتری ببرید !</p>
                    <div className={'flex flex-wrap gap-[34px]'}>
                        <Link href={'tel:9120000000'} className={'btn-primary text-big'}>
                            <IconComponent name={'telephone'} size={16} />
                            ارتباط با ما
                        </Link>
                        <Link href={'/work-samples'} className={'btn-secondary text-big'}>
                            نمونه کار های ما
                            <IconComponent name={'chevron-left'} size={16} />
                        </Link>
                    </div>
                </main>
                <div className={'w-[50%]'}>
                    <Image width={625} height={962} src={leftSideImage.src} alt={'عکس گوشی'} className={'w-full'} />
                </div>
            </div>
        </section>
    );
}