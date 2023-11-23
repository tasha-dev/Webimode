// Importing part
import {ReactNode} from "react";
import LogoImage from '@/app/favicon.ico';
import Image from "next/image";
import Link from "next/link";
import DropdownComponent from "@/chunk/header/dropdownComponent";
import IconComponent from "@/chunk/iconComponent";
import LinkComponent from "@/chunk/header/linkComponent";

// Creating and exporting header component as default
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <header className="fixed top-0 w-full bg-white z-[100] shadow-xl">
            <div className="container lg:px-[32px] px-[20px] lg:py-[20px] py-[10px] lg:flex items-center justify-between gap-[10px] flex-wrap">
                <div className={'flex items-center lg:justify-start justify-between lg:w-auto w-full gap-[30px]'}>
                    <button className={'lg:hidden flex justify-center items-center transition-all duration-500 hover:bg-dark hover:text-white bg-white border border-dark aspect-square w-[40px] text-dark rounded-[12px]'}>
                        <IconComponent name={'list-right'} size={20} />
                    </button>
                    <Link href={'/'}>
                        <Image src={LogoImage.src} alt={'لوگو وبیمود'} width={56} height={56} />
                    </Link>
                    <button className={'lg:hidden flex justify-center items-center bg-theme theme-shadow transition-all duration-500 hover:bg-darkerTheme aspect-square w-[40px] text-white rounded-[12px]'}>
                        <IconComponent name={'shaking-hands'} size={20} />
                    </button>
                    <div className={'vertical-divider lg:block hidden'} />
                    <ul className={'lg:flex hidden items-center gap-[30px]'}>
                        <li><LinkComponent activeInHome link={'/work-samples'}>نمونه کار ها</LinkComponent></li>
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
                    <button className={'flex justify-center items-center transition-all duration-500 hover:bg-dark hover:text-white bg-white border border-dark aspect-square w-[50px] text-dark rounded-[14px]'}>
                        <IconComponent name={'list'} size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
}