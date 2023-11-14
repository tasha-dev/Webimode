// Importing part
import {ReactNode} from "react";
import LogoImage from '@/app/favicon.ico';
import Image from "next/image";
import Link from "next/link";
import DropdownComponent from "@/chunk/header/dropdownComponent";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting header component as default
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <header>
            <div>
                <Image src={LogoImage.src} alt={'لوگو وبیمود'} width={56} height={56} />
                <div className={'vertical-divider'} />
                <ul>
                    <li><Link href={'/work-samples'}>نمونه کار ها</Link></li>
                    <DropdownComponent title={'خدمات ما'}>
                        <li><Link href={'#'}>لینک ۱</Link></li>
                        <li><Link href={'#'}>لینک ۲</Link></li>
                        <li><Link href={'#'}>لینک ۳</Link></li>
                        <li><Link href={'#'}>لینک ۴</Link></li>
                        <li><Link href={'#'}>لینک ۵</Link></li>
                    </DropdownComponent>
                </ul>
            </div>
            <div>
                <Link href={'#'}>
                    درخواست همکاری
                    <IconComponent name={'chevron-left'} size={15} />
                </Link>
                <button>
                    <IconComponent name={'list'} size={20} />
                </button>
            </div>
        </header>
    );
}