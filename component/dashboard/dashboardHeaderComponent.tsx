// Importing part
import {ReactNode} from "react";
import ImageOfMrEhsan from '@/public/img/blog/img-ehsan.jpg';
import LogoImage from '@/app/favicon.ico';
import Image from "next/image";
import Link from "next/link";
import LinkComponent from "@/chunk/header/linkComponent";
import IconComponent from "@/chunk/iconComponent";
import DropdownComponent from "@/chunk/header/dropdownComponent";
import BackgroundImage from '@/public/img/dashboard/img-lines-header.svg';

// Creating and exporting header of dashboard pages as default
export default function DashboardHeaderComponent():ReactNode {
    // Returning JSX 
    return (
        <div className="bg-white w-full lg:p-[20px] container">
            <header className="flex justify-between gap-[10px] flex-wrap lg:px-[24px] lg:py-[16px] lg:bg-lightestGrey lg:rounded-[24px]">
                <div className="flex items-center gap-[30px] lg:w-auto lg:justify-start w-full justify-between lg:border-b-0 border-b border-b-dark lg:pb-0 pb-[20px] lg:mx-0 mx-[20px] lg:mt-0 mt-[20px]">
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
                        <li><LinkComponent theme={'white'} activeInHome link={'/work-samples'}>نمونه کار ها</LinkComponent></li>
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
                <div className="flex lg:flex-nowrap flex-wrap gap-[30px] lg:p-0 p-[20px]">
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
                    <Link href={'/dashboard/notifications'} className="w-[56px] h-[56px] aspect-square flex items-center justify-center transition-all duration-500 border border-lightGrey hover:bg-lightGrey rounded-[16px] relative text-lightGrey hover:text-dark">
                        <IconComponent name="bell-ring" size={24} />
                        <div className="absolute bottom-0 right-0 translate-y-[50%] translate-x-[50%] rounded-full flex items-center justify-center aspect-square w-[20px] h-[20px] bg-theme text-white text-[12px] font-bold">
                            3
                        </div>
                    </Link>
                    <div className="group relative">
                        <Image src={BackgroundImage.src} width={212} height={100} alt="" className="w-full pointer-events-none lg:block hidden scale-150 h-full z-[1] absolute top-0 left-0" />
                        <button className="p-[8px] z-10 relative bg-white rounded-[16px] lg:shadow-none shadow-xl flex items-center justify-between gap-[28px] w-[228px] transition-all duration-500 group-hover:bg-gray-200">
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
                        <div className="opacity-0 bg-theme z-10 py-[10px] rounded-[10px] w-full invisible transition-all duration-500 group-hover:visible group-hover:opacity-100 absolute top-[110%] left-0">
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
}