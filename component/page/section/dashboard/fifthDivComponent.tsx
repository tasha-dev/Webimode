// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import TicketComponent from '@/chunk/page/dashboard/ticketComponent';
import PaymentComponent from '@/chunk/page/dashboard/paymentComponent';

// Creatingnand exporting fifth devider of dashboard page as default
export default function FifthDivComponent():ReactNode {
    // Returning JSX
    return (
        <div className="grid lg:grid-cols-2 gap-[20px]">
            <div>
                <div className="flex items-center justify-between gap-[10px] mb-[26px]">
                    <span className="text-[20px] font-normal text-dark block truncate">تیکت و درخواست من</span>
                    <div className="lg:hidden block">
                        <Link href={'/dashboard/tickets'} className="btn-secondary-theme-icon">
                            <IconComponent name="chevron-left" size={10} />
                        </Link>
                    </div>
                    <div className="lg:block hidden">
                        <Link href={'/dashboard/tickets'} className="btn-primary whitespace-nowrap">
                            مشاهده همه
                            <span className="w-[16px] h-[16px] aspect-squar bg-white flex items-center justify-center text-theme rounded-full">
                                <IconComponent name="chevron-left" size={10} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-[20px]">
                    <TicketComponent date={new Date('August 3 2022 22:30').toISOString()} link="idk" sender="تیم پشتیبانی">ما در تیم پشتیبانی بعد تحقیق فراوان در مورد درخواست شما ، تصمیم گرفته ایم که محصول شما را .....</TicketComponent>
                    <TicketComponent date={new Date('August 3 2022 22:30').toISOString()} link="idk" sender="تیم پشتیبانی">ما در تیم پشتیبانی بعد تحقیق فراوان در مورد درخواست شما ، تصمیم گرفته ایم که محصول شما را .....</TicketComponent>
                    <TicketComponent date={new Date('August 3 2022 22:30').toISOString()} link="idk" sender="تیم پشتیبانی">ما در تیم پشتیبانی بعد تحقیق فراوان در مورد درخواست شما ، تصمیم گرفته ایم که محصول شما را .....</TicketComponent>
                    <TicketComponent date={new Date('August 3 2022 22:30').toISOString()} link="idk" sender="تیم پشتیبانی">ما در تیم پشتیبانی بعد تحقیق فراوان در مورد درخواست شما ، تصمیم گرفته ایم که محصول شما را .....</TicketComponent>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between gap-[10px] mb-[26px]">
                    <span className="text-[20px] font-normal text-dark block truncate">مدیریت پرداخت ها</span>
                    <div className="lg:hidden block">
                        <Link href={'/dashboard/payments'} className="btn-secondary-theme-icon">
                            <IconComponent name="chevron-left" size={10} />
                        </Link>
                    </div>
                    <div className="lg:block hidden">
                        <Link href={'/dashboard/payments'} className="btn-primary whitespace-nowrap">
                            مشاهده همه
                            <span className="w-[16px] h-[16px] aspect-squar bg-white flex items-center justify-center text-theme rounded-full">
                                <IconComponent name="chevron-left" size={10} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 gap-[22px]">
                    <PaymentComponent date={new Date('August 3 2022 22:30').toISOString()} link="#" paymentType="deposit" price={256000} />
                    <PaymentComponent date={new Date('August 3 2022 22:30').toISOString()} link="#" paymentType="cash-out" price={256000} />
                    <PaymentComponent date={new Date('August 3 2022 22:30').toISOString()} link="#" paymentType="cash-out" price={256000} />
                    <PaymentComponent date={new Date('August 3 2022 22:30').toISOString()} link="#" paymentType="deposit" price={256000} />
                    <PaymentComponent date={new Date('August 3 2022 22:30').toISOString()} link="#" paymentType="deposit" price={256000} />
                    <PaymentComponent date={new Date('August 3 2022 22:30').toISOString()} link="#" paymentType="cash-out" price={256000} />
                </div>
            </div>
        </div>
    );
}