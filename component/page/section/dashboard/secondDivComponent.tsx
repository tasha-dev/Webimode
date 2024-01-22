// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";
import EditInfoInputComponent from "@/chunk/page/dashboard/editInfoInputComponent";
import NotificationComponent from '@/chunk/page/dashboard/notificationComponent';

// Creating and exporting second div component of dashboard pages as default
export default function SecondDivComponent():ReactNode {
    // Returning JSX
    return (
        <div className="grid lg:grid-cols-2 gap-[32px]">
            <div>
                <div className="flex items-center justify-between gap-[10px] mb-[26px]">
                    <span className="text-[20px] font-normal dark:text-white text-dark block truncate">اطلاعات حساب کاربری</span>
                    <div className="lg:hidden block">
                        <Link href={'/dashboard/profile'} className="btn-secondary-theme-icon">
                            <IconComponent name="chevron-left" size={10} />
                        </Link>
                    </div>
                    <div className="lg:block hidden">
                        <Link href={'/dashboard/profile'} className="btn-primary whitespace-nowrap">
                            مشاهده همه
                            <span className="w-[16px] h-[16px] aspect-squar bg-white flex items-center justify-center text-theme rounded-full">
                                <IconComponent name="chevron-left" size={10} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="lg:h-[300px] dark:bg-pageDark bg-lighterGrey rounded-[32px] border border-lightGrey dark:border-lightestDark lg:overflow-auto px-[25px] py-[14px]">
                    <form action="#" className="grid lg:grid-cols-2 lg:gap-x-[23px] lg:gap-y-[32px] gap-x-[20px] gap-y-[20px]">
                        <EditInfoInputComponent type="text" label="نام و نام خانوادگی :"  id="name-input" placeHolder="احسان امانیان" />
                        <EditInfoInputComponent type="tel" label="شماره تلفن :"  id="tel-input" placeHolder="09216542162" />
                        <EditInfoInputComponent type="email" label="ایمیل :"  id="email-input" placeHolder="dasnasldj@yahoo.com" />
                        <EditInfoInputComponent type="text" label="کد ملی  :" id="meli-code-input"  placeHolder="09216542162" />
                        <div className="lg:col-span-2 flex items-center lg:justify-end w-full">
                            <div className="dark:hidden block w-full">
                                <button className="btn-dark lg:w-auto w-full">
                                    <IconComponent name="penicl-circle" size={16} />
                                    تغیر اطلاعات
                                </button>
                            </div>
                            <div className="dark:block hidden w-full">
                                <button className="btn-white lg:w-auto w-full">
                                    <IconComponent name="penicl-circle" size={16} />
                                    تغیر اطلاعات
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between gap-[10px] mb-[26px]">
                    <span className="text-[20px] font-normal dark:text-white text-dark block truncate">پیام های من</span>
                    <div className="lg:hidden block">
                        <Link href={'/dashboard/profile'} className="btn-secondary-theme-icon">
                            <IconComponent name="chevron-left" size={10} />
                        </Link>
                    </div>
                    <div className="lg:block hidden">
                        <Link href={'/dashboard/profile'} className="btn-primary whitespace-nowrap">
                            مشاهده همه
                            <span className="w-[16px] h-[16px] aspect-squar bg-white flex items-center justify-center text-theme rounded-full">
                                <IconComponent name="chevron-left" size={10} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="h-[300px] bg-lighterGrey border border-lightGrey dark:border-lightestDark dark:bg-pageDark rounded-[32px] pr-[25px] py-[14px] flex flex-col relative overflow-hidden">
                    <div className="bg-gradient-to-t from-dark/20 dark:from-white/20 to-transparent pointer-events-none w-full h-full left-0 top-0 absolute" />
                    <div className="h-full overflow-auto scroll-notification-dashboard w-full pl-[25px]">
                        <ul className="flex flex-col gap-[16px]">
                            <NotificationComponent link="idk" count={3} date={new Date()} sender="تیم پشتیبانی">ما در تیم پشتیبانی بعد تحقیق فراوان در مورد درخواست شما ، تصمیم گرفته ایم که محصول شما را .....</NotificationComponent>
                            <NotificationComponent link="idk" count={3} date={new Date()} sender="تیم پشتیبانی">ما در تیم پشتیبانی بعد تحقیق فراوان در مورد درخواست شما ، تصمیم گرفته ایم که محصول شما را .....</NotificationComponent>
                            <NotificationComponent link="idk" count={3} date={new Date()} sender="تیم پشتیبانی">ما در تیم پشتیبانی بعد تحقیق فراوان در مورد درخواست شما ، تصمیم گرفته ایم که محصول شما را .....</NotificationComponent>
                            <NotificationComponent link="idk" count={3} date={new Date()} sender="تیم پشتیبانی">ما در تیم پشتیبانی بعد تحقیق فراوان در مورد درخواست شما ، تصمیم گرفته ایم که محصول شما را .....</NotificationComponent>
                            <NotificationComponent link="idk" count={3} date={new Date()} sender="تیم پشتیبانی">ما در تیم پشتیبانی بعد تحقیق فراوان در مورد درخواست شما ، تصمیم گرفته ایم که محصول شما را .....</NotificationComponent>
                            <NotificationComponent link="idk" count={3} date={new Date()} sender="تیم پشتیبانی">ما در تیم پشتیبانی بعد تحقیق فراوان در مورد درخواست شما ، تصمیم گرفته ایم که محصول شما را .....</NotificationComponent>
                            <NotificationComponent link="idk" count={3} date={new Date()} sender="تیم پشتیبانی">ما در تیم پشتیبانی بعد تحقیق فراوان در مورد درخواست شما ، تصمیم گرفته ایم که محصول شما را .....</NotificationComponent>
                            <NotificationComponent link="idk" count={3} date={new Date()} sender="تیم پشتیبانی">ما در تیم پشتیبانی بعد تحقیق فراوان در مورد درخواست شما ، تصمیم گرفته ایم که محصول شما را .....</NotificationComponent>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}