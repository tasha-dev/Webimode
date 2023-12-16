// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState, useEffect, Dispatch} from "react";
import LogoImage from '@/app/favicon.ico';
import Image from "next/image";
import Link from "next/link";
import DropdownComponent from "@/chunk/header/dropdownComponent";
import IconComponent from "@/chunk/iconComponent";
import LinkComponent from "@/chunk/header/linkComponent";
import {usePathname} from "next/navigation";
import ImageOfMrEhsan from '@/public/img/blog/img-ehsan.jpg';

// Creating and exporting header component as default
export default function HeaderComponent():ReactNode {
    // Defining state of component
    const [isScrolled, setScrolled]:[boolean, Dispatch<boolean>] = useState(false);

    // Getting url of page 
    const pathname:string = usePathname();

    // Defining page which have dark background and pages which have no header at all
    const darkBgUrl:Array<string> = ['/estimate', '/chat-gpt'];
    const noHeaderPages:Array<string> = ['/chat-gpt/app'];
    const dashboardPages:Array<string> = ['/dashboard'];

    // Using useEffect hook to add event listener to check if page is scrolled scrolled or not
    useEffect(() => addEventListener('scroll', () => setScrolled((scrollY !== 0))), [])

    // Conditional rendering
    if (noHeaderPages.includes(pathname)) {
        return false;
    } else if (dashboardPages.includes(pathname)) {
        return(
            <div className="bg-white w-full p-[20px]">
                <header className="flex justify-between gap-[10px] flex-wrap lg:px-[24px] lg:py-[16px] lg:bg-lightestGrey lg:rounded-[24px] lg:border-b-0 border-b border-b-dark">
                    <div className="flex items-center gap-[30px] lg:w-auto lg:justify-start w-full justify-between">
                        <button
                            className={'lg:hidden flex justify-center items-center transition-all duration-500 border text-dark border-dark hover:bg-dark hover:text-white bg-white  aspect-square w-[40px] rounded-[12px]'}
                        >
                            <IconComponent name={'list-right'} size={20} />
                        </button>
                        <Link href={'/'}>
                            <Image src={LogoImage.src} alt={'لوگو وبیمود'} width={56} height={56} />
                        </Link>
                        <div className={'vertical-divider lg:block hidden'} />
                        <ul className={'lg:flex hidden items-center gap-[30px]'}>
                            <li><LinkComponent theme={(darkBgUrl.includes(pathname)) ? 'dark' : 'white'} activeInHome link={'/work-samples'}>نمونه کار ها</LinkComponent></li>
                            <DropdownComponent link={'/services'} title={'خدمات ما'}>
                                <li><Link className={'px-[15px] truncate text-[16px] text-dark font-normal py-[5px] block hover:bg-white/30 transition-all duration-500'} href={'#'}>لینک ۱</Link></li>
                                <li><Link className={'px-[15px] truncate text-[16px] text-dark font-normal py-[5px] block hover:bg-white/30 transition-all duration-500'} href={'#'}>لینک ۲</Link></li>
                                <li><Link className={'px-[15px] truncate text-[16px] text-dark font-normal py-[5px] block hover:bg-white/30 transition-all duration-500'} href={'#'}>لینک ۳</Link></li>
                                <li><Link className={'px-[15px] truncate text-[16px] text-dark font-normal py-[5px] block hover:bg-white/30 transition-all duration-500'} href={'#'}>لینک ۴</Link></li>
                                <li><Link className={'px-[15px] truncate text-[16px] text-dark font-normal py-[5px] block hover:bg-white/30 transition-all duration-500'} href={'#'}>لینک ۵</Link></li>
                            </DropdownComponent>
                        </ul>
                        <div className="lg:hidden block">
                            <button className="btn-secondary-theme-icon hover:text-white">
                                <span className="block">+</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-[30px]">
                        <div className="lg:flex hidden">
                            <Link href={'/create'} className={'btn-primary no-py h-full'}>
                                <div className="w-[24px] h-[24px] rounded-full bg-white text-theme flex justify-center items-center">
                                    <span className="block h-full">+</span>
                                </div>
                                درخواست همکاری
                            </Link>
                        </div>
                        <div className="lg:flex hidden items-center justify-center">
                            <div className={'vertical-divider'} />
                        </div>
                        <Link href={'/dashboard/notifications'} className="w-[56px] h-[56px] aspect-square lg:flex hidden items-center justify-center transition-all duration-500 border border-lightGrey hover:bg-lightGrey rounded-[16px] relative text-lightGrey hover:text-dark">
                            <IconComponent name="bell-ring" size={24} />
                            <div className="absolute bottom-0 right-0 translate-y-[50%] translate-x-[50%] rounded-full flex items-center justify-center aspect-square w-[20px] h-[20px] bg-theme text-white text-[12px] font-bold">
                                3
                            </div>
                        </Link>
                        <div className="group relative lg:block hidden">
                            <button className="p-[8px] bg-white rounded-[16px] flex items-center justify-between gap-[28px] w-[228px] transition-all duration-500 group-hover:bg-dark/10">
                                <div className="flex items-center gap-[12px] w-[70%]">
                                    <Image alt="عکس پروفایل شما" width={1000} height={1000} src={ImageOfMrEhsan.src} className="w-[40px] shrink-0 rounded-[12px] h-[40px] aspect-square" />
                                    <div className="w-full">
                                        <span className="text-dark font-normal text-[14px] truncate w-full block mb-[8px]">خوش اومدی احسان</span>
                                        <div className="flex items-center text-lightGrey gap-[12px]">
                                            <span className="shrink-0">
                                                <IconComponent name="calender-clock" size={10} />
                                            </span>
                                            <span className="font-normal text-[10px] block truncate">{new Date().toLocaleDateString('fa-ir')}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-lightGrey shrink-0">
                                    <IconComponent size={14} name="chevron-down" />
                                </div>
                            </button>
                            <div className="opacity-0 bg-theme py-[10px] rounded-[10px] w-full invisible transition-all duration-500 group-hover:visible group-hover:opacity-100 absolute top-[110%] left-0">
                                <ul>
                                    <li><Link className={'px-[15px] truncate text-[16px] text-dark font-normal py-[5px] block hover:bg-white/30 transition-all duration-500'} href={'#'}>لینک ۱</Link></li>
                                    <li><Link className={'px-[15px] truncate text-[16px] text-dark font-normal py-[5px] block hover:bg-white/30 transition-all duration-500'} href={'#'}>لینک ۲</Link></li>
                                    <li><Link className={'px-[15px] truncate text-[16px] text-dark font-normal py-[5px] block hover:bg-white/30 transition-all duration-500'} href={'#'}>لینک ۳</Link></li>
                                    <li><Link className={'px-[15px] truncate text-[16px] text-dark font-normal py-[5px] block hover:bg-white/30 transition-all duration-500'} href={'#'}>لینک ۴</Link></li>
                                    <li><Link className={'px-[15px] truncate text-[16px] text-dark font-normal py-[5px] block hover:bg-white/30 transition-all duration-500'} href={'#'}>لینک ۵</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    } else {
        return (
            <header data-hasdarkbg={darkBgUrl.includes(pathname)} data-scrolled={isScrolled} className="lg:fixed static top-0 transition-all duration-500 w-full data-[hasdarkbg='true']:bg-dark data-[hasdarkbg='false']:lg:bg-white z-[100] lg:shadow-lg lg:data-[scrolled='false']:shadow-transparent lg:data-[scrolled='true']:shadow-lightGrey/20">
                <div className="container lg:px-[32px] px-[20px] lg:py-[20px] py-[10px] lg:flex items-center justify-between gap-[10px] flex-wrap">
                    <div className={'flex items-center lg:justify-start justify-between lg:w-auto w-full gap-[30px]'}>
                        <button 
                            data-hasdarkbg={darkBgUrl.includes(pathname)} 
                            className={'lg:hidden flex justify-center items-center transition-all duration-500 border data-[hasdarkbg="false"]:text-dark data-[hasdarkbg="false"]:border-dark data-[hasdarkbg="false"]:hover:bg-dark data-[hasdarkbg="false"]:hover:text-white data-[hasdarkbg="false"]:bg-white data-[hasdarkbg="true"]:text-white data-[hasdarkbg="true"]:border-white data-[hasdarkbg="true"]:hover:bg-white data-[hasdarkbg="true"]:hover:text-dark data-[hasdarkbg="true"]:bg-dark aspect-square w-[40px] text-dark rounded-[12px]'}
                        >
                            <IconComponent name={'list-right'} size={20} />
                        </button>
                        <Link href={'/'}>
                            <Image src={LogoImage.src} alt={'لوگو وبیمود'} width={56} height={56} />
                        </Link>
                        <div className={'vertical-divider lg:block hidden'} />
                        <ul className={'lg:flex hidden items-center gap-[30px]'}>
                            <li><LinkComponent theme={(darkBgUrl.includes(pathname)) ? 'dark' : 'white'} activeInHome link={'/work-samples'}>نمونه کار ها</LinkComponent></li>
                            <DropdownComponent link={'/services'} title={'خدمات ما'}>
                                <li><Link className={'px-[15px] truncate text-[16px] text-dark font-normal py-[5px] block hover:bg-white/30 transition-all duration-500'} href={'#'}>لینک ۱</Link></li>
                                <li><Link className={'px-[15px] truncate text-[16px] text-dark font-normal py-[5px] block hover:bg-white/30 transition-all duration-500'} href={'#'}>لینک ۲</Link></li>
                                <li><Link className={'px-[15px] truncate text-[16px] text-dark font-normal py-[5px] block hover:bg-white/30 transition-all duration-500'} href={'#'}>لینک ۳</Link></li>
                                <li><Link className={'px-[15px] truncate text-[16px] text-dark font-normal py-[5px] block hover:bg-white/30 transition-all duration-500'} href={'#'}>لینک ۴</Link></li>
                                <li><Link className={'px-[15px] truncate text-[16px] text-dark font-normal py-[5px] block hover:bg-white/30 transition-all duration-500'} href={'#'}>لینک ۵</Link></li>
                            </DropdownComponent>
                        </ul>
                    </div>
                    <div className={'lg:flex hidden gap-[20px]'}>
                        <Link href={'#'} className={'btn-primary no-py'}>
                            درخواست همکاری
                            <IconComponent name={'chevron-left'} size={15} />
                        </Link>
                        <button data-hasdarkbg={darkBgUrl.includes(pathname)} className={'flex justify-center items-center transition-all duration-500 border aspect-square w-[50px] rounded-[14px] data-[hasdarkbg="false"]:text-dark data-[hasdarkbg="false"]:border-dark data-[hasdarkbg="false"]:hover:bg-dark data-[hasdarkbg="false"]:hover:text-white data-[hasdarkbg="false"]:bg-white data-[hasdarkbg="true"]:text-white data-[hasdarkbg="true"]:border-white data-[hasdarkbg="true"]:hover:bg-white data-[hasdarkbg="true"]:hover:text-dark data-[hasdarkbg="true"]:bg-dark'}>
                            <IconComponent name={'list'} size={20} />
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}
