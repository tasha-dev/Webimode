// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import DashboardPageTemplate from "@/component/dashboard/dashboardPageTemplate";
import EditInfoInputComponent from '@/chunk/page/dashboard/editInfoInputComponent';
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";
import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

// Defining type of form
const formSchema = z.object({
    name: z.string().min(2, 'نام کمتر از 2 کارکتر میباشد.').max(100, 'نام بیشتر از 100 کارکتر میباشد.'),
    tel: z.string().min(11, 'شماره تلفن از 11 عدد کمتر نباید باشد.').max(11, 'شماره تلفن از 11 عدد بیشتر نباید باشد.'),
    email: z.string().email('لطفا ایمیل را به درستی وارد کنید.'),
    meli: z.string().min(10, 'کد ملی نمیتواند کمتر از 10 کارکتر باشد.').max(12, 'کد ملی نمیتواند بیشتر از 10 کارکتر باشد.'),
    password: z.string().min(8, 'رمز عبور نمیتواند کمتر از 8 کارکتر باشد.').max(12, 'رمز عبور نمیتواند بیشتر از 12 کارکتر باشد.')
});

type formType = z.infer<typeof formSchema>;

// Creating and exporting profile dashboard page as default
export default function DashboardProfilePage():ReactNode {
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
        <DashboardPageTemplate>
            <form onSubmit={handleSubmit(onSubmitHandler)} action="#" className="grid lg:grid-cols-4 gap-[23px]">
                <EditInfoInputComponent register={register} errorText={errors.name?.message} name="name" label="نام و نام خانوادگی :" placeHolder="احسان امانیان" type="text" />
                <EditInfoInputComponent register={register} errorText={errors.tel?.message} name="tel" label="شماره تلفن :" placeHolder="09216542162" type="tel" />
                <EditInfoInputComponent register={register} errorText={errors.email?.message} name="email" label="ایمیل :" placeHolder="dasnasldj@yahoo.com" type="email" />
                <EditInfoInputComponent register={register} errorText={errors.meli?.message} name="meli" label="کد ملی :" placeHolder="09216542162" type="text" />
                <EditInfoInputComponent register={register} errorText={errors.password?.message} name="password" label="رمز عبور :" placeHolder="XXXXXXXXX" type="passowrd" />
                {
                    (errors.root?.message)
                        ? (
                            <div className={'lg:col-span-4 col-span-1'}>
                                <p className={'text-[16px] font-normal text-red-600 mt-[16px]'}>{errors.root?.message}</p>
                            </div>
                        ) : false
                }
                <div className="lg:col-span-3 col-span-1 flex lg:flex lg:flex-row flex-col items-end justify-end gap-[16px]">
                    <Link href='/' className="btn-secondary-alert lg:w-auto w-full">
                        <IconComponent name="circle-x" size={16} />
                        انصراف تغییرات
                    </Link>
                    <div className="dark:hidden block lg:w-auto w-full">
                        <button disabled={isValidating} className="btn-dark lg:w-auto w-full">
                            <IconComponent name="penicl-circle" size={16} />
                            تغیر اطلاعات
                        </button>
                    </div>
                    <div className="dark:block hidden lg:w-auto w-full">
                        <button disabled={isValidating} className="btn-white lg:w-auto w-full">
                            <IconComponent name="penicl-circle" size={16} />
                            تغیر اطلاعات
                        </button>
                    </div>
                </div>
            </form>
        </DashboardPageTemplate>
    );
}