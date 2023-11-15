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
        <section className={'lg:relative lg:pt-[100px] pt-[96px]'}>
            <img className={'absolute top-0 right-0 z-[-1]'} src={bgZigzagImage.src} alt="عکس زیگزاگ در پس زمینه" />
            <div className={'flex xl:flex-row flex-col lg:gap-[186px] gap-[112px] justify-between items-start px-[20px]'}>
                <main className={'xl:w-[50%] w-full lg:block flex items-center flex-col'}>
                    <div className={'px-[12px] py-[8px] bg-theme theme-shadow lg:mb-[10px] mb-[20px] inline-block lg:text-[15px] text-[10px] font-normal text-white rounded-l-[12px] rounded-tr-[12px]'}>تیم وبیمود</div>
                    <h1 className={'lg:block hidden text-[64px] text-dark font-bold'}>وبیمود</h1>
                    <h2 className={'lg:inline-block hidden text-[64px] relative mb-[24px]'}>
                        <span className={'text-dark font-normal inline-block ml-[10px]'}>واقعی کردن</span>
                        <span className={'text-theme font-bold inline-block'}>ایده ها</span>
                        <span className={'text-theme absolute right-[102%] bottom-full flex flex-col w-[30px]'}>
                            <span className={'self-center'}><IconComponent name={'star'} size={10} /></span>
                            <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                        </span>
                    </h2>
                    <h1 className={'relative lg:hidden block text-[20px] font-bold mb-[8px] text-center'}>
                        <span className={'inline-block ml-[1ch] text-dark'}>وبیمود وقعی کردن</span>
                        <span className={'inline-block text-theme'}>ایده ها</span>
                        <span className={'text-theme absolute right-full bottom-full flex flex-col w-[15px]'}>
                            <span className={'self-center'}><IconComponent name={'star'} size={4} /></span>
                            <span className={'self-end'}><IconComponent name={'star'} size={5} /></span>
                            <span className={'self-start'}><IconComponent name={'star'} size={7} /></span>
                        </span>
                    </h1>
                    <p className={'lg:text-[28px] text-[13px] lg:text-start text-center font-normal text-lightGrey lg:leading-[56px] leading-[26px] lg:mb-[58px] mb-[32px]'}>بهترین خدمات برنامه نویسی ، طرای سایت ، طراحی لوگو ، انیمیشن و... با تیم حرفه ای وبیمود کسب و کار خود را به سطح باللاتری ببرید !</p>
                    <div className={'flex lg:flex-row flex-col lg:w-auto w-full lg:flex-wrap lg:gap-[34px] gap-[24px]'}>
                        <Link href={'tel:9120000000'} className={'btn-primary text-big lg:w-auto w-full'}>
                            <span className={'lg:inline hidden'}><IconComponent name={'telephone'} size={16} /></span>
                            <span className={'lg:hidden inline'}><IconComponent name={'telephone'} size={20} /></span>
                            ارتباط با ما
                        </Link>
                        <Link href={'/work-samples'} className={'btn-secondary text-big lg:w-auto w-full'}>
                            نمونه کار های ما
                            <IconComponent name={'chevron-left'} size={16} />
                        </Link>
                    </div>
                </main>
                <div className={'xl:w-[50%] w-full'}>
                    <Image width={625} height={962} src={leftSideImage.src} alt={'عکس گوشی'} className={'w-full lg:-mt-[30px]'} />
                </div>
            </div>
        </section>
    );
}