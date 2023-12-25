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
import TicketComponent from "@/chunk/page/dashboard/ticketComponent";

// Creating and exporting nav component of dashboard pages as default
export default function DashboardNavComponent():ReactNode {
    // Getting pathname of current url
    const pathname:string = usePathname();

    // Conditional rendering
    if (!pathname.startsWith('/dashboard/tickets')) {
        return (
            <nav className="p-[16px] bg-lightestGrey dark:bg-pageDark rounded-[24px]">
                <ul className="flex flex-col gap-[20px] lg:mb-[250px] mb-[142px]">
                    <NavItemComponent icon="window" isActive={(pathname === '/dashboard')} link="/dashboard" title="فعالیت های اخیر" />
                    <NavItemComponent icon="circle-state" isActive={(pathname === '/dashboard/projects')} link="/dashboard/projects" title="مدیریت پروژه ها" />
                    <NavItemComponent icon="bell-ring" isActive={(pathname === '/dashboard/notifications')} link="/dashboard/notifications" title="پیام های من" />
                    <NavItemComponent icon="ticket" isActive={(pathname === '/dashboard/tickets')} link="/dashboard/tickets" title="تیکت و درخواست من" />
                    <NavItemComponent icon="wallet" isActive={(pathname === '/dashboard/payments')} link="/dashboard/payments" title="مدیریت پرداخت ها" />
                    <NavItemComponent icon="question-circle" isActive={(pathname === '/dashboard/faq')} link="/dashboard/faq" title="راهنما داشبورد" />
                    <NavItemComponent icon="gear" isActive={(pathname === '/dashboard/profile')} link="/dashboard/profile" title="تنظیمات حساب" />
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
    } else {
        return (
            <div className="grid lg:grid-cols-2 lg:col-span-2 bg-lightestGrey dark:bg-pageDark rounded-[24px] overflow-hidden">
                <nav className="p-[16px]">
                    <ul className="flex flex-col gap-[20px] lg:mb-[250px] mb-[142px]">
                        <NavItemComponent icon="window" isActive={false} link="/dashboard" title="فعالیت های اخیر" />
                        <NavItemComponent icon="circle-state" isActive={false} link="/dashboard/projects" title="مدیریت پروژه ها" />
                        <NavItemComponent icon="bell-ring" isActive={false} link="/dashboard/notifications" title="پیام های من" />
                        <NavItemComponent icon="ticket" isActive={true} link="/dashboard/tickets" title="تیکت و درخواست من" />
                        <NavItemComponent icon="wallet" isActive={false} link="/dashboard/payments" title="مدیریت پرداخت ها" />
                        <NavItemComponent icon="question-circle" isActive={false} link="/dashboard/faq" title="راهنما داشبورد" />
                        <NavItemComponent icon="gear" isActive={false} link="/dashboard/profile" title="تنظیمات حساب" />
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
                            <div className="w-[24px] h-[24px] rounded-full bg-white text-theme flex justify-center items-center shrink-0">
                                <span className="block h-full">+</span>
                            </div>
                            <span className="block truncate">درخواست همکاری</span>
                        </Link>
                    </div>
                    <Link href="/" className="btn-alert">
                        <IconComponent name="exit" size={20} />
                        خروج از داشبور
                    </Link>
                </nav>
                <div className="rounded-[24px] h-[990px] shadow-[14px_-47px_85px_0_rgba(0,0,0,0.12)_inset] flex flex-col overflow-hidden">
                    <div className="p-[16px] shrink-0">
                        <span className="block text-[16px] font-normal mb-[16px] dark:text-white text-dark">تیکت و پیام های من</span>                        
                        <Link href={'#'} className="small-btn-primary">
                            <div className="w-[16px] h-[16px] flex items-center justify-center rounded-full bg-white text-theme">
                                <span className="block h-full">+</span>
                            </div>
                            <span className="block truncate">افزودن تیکت</span>
                        </Link>
                        <div className="w-full mt-[24px] border-b-[2px] border-dashed dark:border-b-lightestDark border-b-lighterGrey" />
                    </div>
                    <div className="h-[100%] overflow-auto scroll-notification-dashboard">
                        <div className="max-h-[10000px] w-full p-[16px] flex flex-col gap-[32px]">
                            <TicketComponent title="بررسی تیکت طراحی صفحه لندینگ ...." newMassagesCount={3} style="big" date={new Date().toISOString()} link="idk">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</TicketComponent>
                            <TicketComponent title="بررسی تیکت طراحی صفحه لندینگ ...." newMassagesCount={3} style="big" date={new Date().toISOString()} link="idk">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</TicketComponent>
                            <TicketComponent title="بررسی تیکت طراحی صفحه لندینگ ...." newMassagesCount={3} style="big" date={new Date().toISOString()} link="idk">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</TicketComponent>
                            <TicketComponent title="بررسی تیکت طراحی صفحه لندینگ ...." newMassagesCount={3} style="big" date={new Date().toISOString()} link="idk">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</TicketComponent>
                            <TicketComponent title="بررسی تیکت طراحی صفحه لندینگ ...." newMassagesCount={3} style="big" date={new Date().toISOString()} link="idk">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</TicketComponent>
                            <TicketComponent title="بررسی تیکت طراحی صفحه لندینگ ...." newMassagesCount={3} style="big" date={new Date().toISOString()} link="idk">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</TicketComponent>
                            <TicketComponent title="بررسی تیکت طراحی صفحه لندینگ ...." newMassagesCount={3} style="big" date={new Date().toISOString()} link="idk">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</TicketComponent>
                            <TicketComponent title="بررسی تیکت طراحی صفحه لندینگ ...." newMassagesCount={3} style="big" date={new Date().toISOString()} link="idk">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</TicketComponent>
                            <TicketComponent title="بررسی تیکت طراحی صفحه لندینگ ...." newMassagesCount={3} style="big" date={new Date().toISOString()} link="idk">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</TicketComponent>
                            <TicketComponent title="بررسی تیکت طراحی صفحه لندینگ ...." newMassagesCount={3} style="big" date={new Date().toISOString()} link="idk">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</TicketComponent>
                            <TicketComponent title="بررسی تیکت طراحی صفحه لندینگ ...." newMassagesCount={3} style="big" date={new Date().toISOString()} link="idk">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</TicketComponent>
                            <TicketComponent title="بررسی تیکت طراحی صفحه لندینگ ...." newMassagesCount={3} style="big" date={new Date().toISOString()} link="idk">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</TicketComponent>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}