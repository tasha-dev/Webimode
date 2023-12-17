// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import {usePathname} from "next/navigation";
import NavItemComponent from "@/chunk/page/dashboard/navItemComponent";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import Image from "next/image";
import CreateLinkImage from '@/public/img/dashboard/img-nav-create.svg';

// Creating and exporting nav component of dashboard pages as default
export default function DashboardNavComponent():ReactNode {
    // Getting pathname of current url
    const pathname:string = usePathname();

    // Returning JSX
    return (
        <nav className="p-[16px] bg-lightestGrey rounded-[24px]">
            <ul className="flex flex-col gap-[20px] lg:mb-[250px] mb-[142px]">
                <NavItemComponent icon="window" isActive={(pathname === '/dashboard')} link="/dashboard" title="فعالیت های اخیر" />
                <NavItemComponent icon="circle-state" isActive={(pathname === '/dashboard/projects')} link="/dashboard/projects" title="مدیریت پروژه ها" />
                <NavItemComponent icon="bell-ring" isActive={(pathname === '/dashboard/notifications')} link="/dashboard/notifications" title="پیام های من" />
                <NavItemComponent icon="ticket" isActive={(pathname === '/dashboard/tickets')} link="/dashboard/tickets" title="تیکت و درخواست من" />
                <NavItemComponent icon="wallet" isActive={(pathname === '/dashboard/payments')} link="/dashboard/payments" title="مدیریت پرداخت ها" />
                <NavItemComponent icon="question-circle" isActive={(pathname === '/dashboard/faq')} link="/dashboard/faq" title="راهنما داشبورد" />
                <NavItemComponent icon="gear" isActive={(pathname === '/dashboard/settings')} link="/dashboard/settings" title="تنظیمات حساب" />
            </ul>
            <div className="bg-dark shadow-custom p-[12px] mb-[16px] shadow-black rounded-[24px]">
                <div className="bg-lightestDark h-[64px] mb-[12px] rounded-[16px] relative">
                    <Image alt="" width={150} height={150} src={CreateLinkImage.src} className="lg:w-full h-[150px] w-[50%] absolute bottom-0 lg:left-0 left-[50%] lg:translate-x-0 -translate-x-[50%]" />
                </div>
                <p className="mb-[8px] text-[12px] font-normal leading-[24px] text-white lg:text-start text-center">
                    <span className="text-theme font-semibold inline-block ml-[1ch]">همین الان به راحتی</span>
                    هر پروژه ای که داری رو ثبت کن و به تیم حرفه ای ما بسپارش 
                    !
                </p>
                <Link href={'/create'} className={'btn-primary'}>
                    <div className="w-[24px] h-[24px] rounded-full bg-white text-theme flex justify-center items-center">
                        <span className="block h-full">+</span>
                    </div>
                    درخواست همکاری
                </Link>
            </div>
            <Link href="/" className="btn-alert">
                <IconComponent name="exit" size={20} />
                خروج از داشبور
            </Link>
        </nav>
    );
}