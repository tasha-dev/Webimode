// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";
import EditInfoInputComponent from "@/chunk/page/dashboard/editInfoInputComponent";
import NotificationComponent from '@/chunk/page/dashboard/notificationComponent';
import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

// Defining type of form
const formSchema = z.object({
    tel: z.string().min(11, 'شماره تلفن از 11 عدد کمتر نباید باشد.').max(11, 'شماره تلفن از 11 عدد بیشتر نباید باشد.'),
    email: z.string().email('لطفا ایمیل را به درستی وارد کنید.'),
    meli: z.string().min(10, 'کد ملی نمیتواند کمتر از 10 کارکتر باشد.').max(12, 'کد ملی نمیتواند بیشتر از 10 کارکتر باشد.'),
    password: z.string().min(8, 'رمز عبور نمیتواند کمتر از 8 کارکتر باشد.').max(12, 'رمز عبور نمیتواند بیشتر از 12 کارکتر باشد.')
});

type formType = z.infer<typeof formSchema>;

// Creating and exporting second div component of dashboard pages as default
export default function SecondDivComponent():ReactNode {
    // Defining useForm hook to use later
    const {
        register,
        handleSubmit,
        formState: {
            isValidating,
            errors
        }
    } = useForm<formType>({
        resolver: zodResolver(formSchema)
    });

    // Defining a function to handle onSubmit event of form
    const onSubmitHandler:SubmitHandler<formType> = (data) => {
        console.log(data);
    }

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
                    <form onSubmit={handleSubmit(onSubmitHandler)} action="#" className="grid lg:grid-cols-2 lg:gap-x-[23px] lg:gap-y-[32px] gap-x-[20px] gap-y-[20px]">
                        <EditInfoInputComponent register={register} errorText={errors.tel?.message} name="tel" label="شماره تلفن :" placeHolder="09216542162" type="tel" />
                        <EditInfoInputComponent register={register} errorText={errors.email?.message} name="email" label="ایمیل :" placeHolder="dasnasldj@yahoo.com" type="email" />
                        <EditInfoInputComponent register={register} errorText={errors.meli?.message} name="meli" label="کد ملی :" placeHolder="09216542162" type="text" />
                        <EditInfoInputComponent register={register} errorText={errors.password?.message} name="password" label="رمز عبور :" placeHolder="XXXXXXXXX" type="passowrd" />
                        <div className="lg:col-span-2 flex items-center lg:justify-end w-full">
                            <div className="dark:hidden block w-full">
                                <button disabled={isValidating} className="btn-dark lg:w-auto w-full">
                                    <IconComponent name="penicl-circle" size={16} />
                                    تغیر اطلاعات
                                </button>
                            </div>
                            <div className="dark:block hidden w-full">
                                <button disabled={isValidating} className="btn-white lg:w-auto w-full">
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