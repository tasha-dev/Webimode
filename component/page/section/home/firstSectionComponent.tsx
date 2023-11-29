// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";
import Image from 'next/image';
import leftSideImage from '@/public/img/home/firstSection/left-side/img-left-side.png';
import leftSideImageBG from '@/public/img/home/firstSection/left-side/img-left-side-bg.png';
import bgZigzagImage from '@/public/img/home/firstSection/img-bg-zigzag.svg';
import LineMorphComponent from "@/chunk/lineMorphComponent";

// Creating and exporting first section of home page as default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'lg:relative'}>
            <div className="container lg:pt-[250px] pt-[68px]">
                <img className={'absolute top-0 right-0 z-[-1]'} src={bgZigzagImage.src} alt="عکس زیگزاگ در پس زمینه" />
                <div className={'flex xl:flex-row flex-col lg:gap-[186px] gap-[112px] justify-between items-start px-[20px]'}>
                    <main className={'xl:w-[50%] w-full lg:block flex items-center flex-col'}>
                        <div className={'sign'}>تیم وبیمود</div>
                        <h1 className={'lg:block hidden text-[64px] text-dark font-bold'}>وبیمود</h1>
                        <h2 className={'lg:inline-block hidden text-[64px] relative mb-[24px]'}>
                            <span className={'text-dark font-normal inline-block ml-[10px]'}>واقعی کردن</span>
                            <span className={'text-theme font-bold inline-block'}>ایده ها</span>
                            <span className={'text-theme absolute right-[102%] bottom-full flex flex-col w-[30px]'}>
                                <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </h2>
                        <h2 className={'relative lg:hidden block text-[20px] font-bold mb-[8px] text-center'}>
                            <span className={'inline-block ml-[1ch] text-dark'}>وبیمود وقعی کردن</span>
                            <span className={'inline-block text-theme'}>ایده ها</span>
                            <span className={'text-theme absolute right-full bottom-full flex flex-col w-[30px]'}>
                                <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </h2>
                        <p className={'paragraph-big lg:text-start text-center'}>بهترین خدمات برنامه نویسی ، طرای سایت ، طراحی لوگو ، انیمیشن و... با تیم حرفه ای وبیمود کسب و کار خود را به سطح باللاتری ببرید !</p>
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
                    <div className={'xl:w-[50%] w-full relative overflow-hidden'}>
                        <Image width={625} height={962} src={leftSideImage.src} alt={'عکس گوشی'} className={'w-full lg:-mt-[30px] z-[3] relative'} />
                        <LineMorphComponent strokeColor="#49B486" className="absolute top-0 lg:translate-y-[-70px] translate-y-[-50px] left-0 z-[2] w-full" />
                        <Image width={500} height={395} src={leftSideImageBG.src} alt={'عکس  بکگراند گوشی'} className={'w-full hiden absolute top-0 left-0 z-[1]'} />
                    </div>
                </div>
            </div>
        </section>
    );
}
