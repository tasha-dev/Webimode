// Forcing nextJS to render this component as client side component
'use client';

// Improrting part
import {ReactNode} from 'react';
import Link from 'next/link';
import IconComponent from '@/chunk/iconComponent';
import InputComponent from '@/chunk/inputComponent';
import HalfDividerComponent from '@/chunk/halfDividerComponent';
import Image from 'next/image';
import LeftSideImage from '@/public/img/img-sign-in.png';
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

// Defining type of form
const formSchema = z.object({
  email: z.string().email('لطفا ایمیل را به درستی وارد کنید.'),
  password: z.string().min(8, 'رمز عبور نمیتواند کمتر از 8 کارکتر باشد.').max(12, 'رمز عبور نمیتواند بیشتر از 12 کارکتر باشد.'),
  passwordRepeat: z.string().min(8, 'رمز عبور نمیتواند کمتر از 8 کارکتر باشد.').max(12, 'رمز عبور نمیتواند بیشتر از 12 کارکتر باشد.'),
  name: z.string().min(2, 'نام کمتر از 2 کارکتر میباشد.').max(100, 'نام بیشتر از 100 کارکتر میباشد.'),
  company: z.string().min(8, 'شماره شرکت از 8 عدد کمتر نباید باشد.').max(8, 'شماره شرکت از 8 عدد بیشتر نباید باشد.'),
  tel: z.string().min(8, 'شماره تلفن از 8 عدد کمتر نباید باشد.').max(8, 'شماره تلفن از 8 عدد بیشتر نباید باشد.')
});

type formType = z.infer<typeof formSchema>;

// Creating and exporting sign in page as default
export default function SignInPage():ReactNode {
  // Defining useForm hook to handle form
  const {
    register,
    handleSubmit,
    setError,
    formState: {
      errors,
      isValidating
    }
  } = useForm<formType>({
    resolver: zodResolver(formSchema)
  });

  // Handling submit event of form
  const submitEventHandler: SubmitHandler<formType> = (data) => {
    if (data.password !== data.passwordRepeat) {
      setError('password', {message: 'مقدار گذرواژه و تکرار ان باید یکی باشد'})
      setError('passwordRepeat', {message: 'مقدار گذرواژه و تکرار ان باید یکی باشد'})
    } else {
      console.log(data);
    }
  }

  // Returning JSX 
  return (
    <section className='lg:mb-0 mb-[50px]'>
      <div className="container px-[20px] pb-[20px]">
        <div className='lg:block hidden'>
          <div className="sign">ثبت نام</div>
        </div>
        <div className="lg:grid flex flex-col-reverse grid-cols-2 lg:gap-[64px] gap-[40px]">
          <div>
            <header className="lg:mb-[48px] mb-[20px] lg:block flex items-center justify-center flex-col">
              <div className='lg:hidden block'>
                <div className="sign-mb-0">ثبت نام</div>
              </div>
              <h1 className="font-semibold lg:text-[40px] text-[20px] text-dark lg:leading-[74px] leading-[40px] lg:mb-[12px] lg:text-start text-center">
                <span className="text-theme inline-block ml-[1ch]">به راحتی ثبت نام کن</span>
                و به خانواده وبیمود ملحق شو !
              </h1>
              <p className="paragraph lg:text-start text-center">به راحتی در وب سایت وبیمود ثبت نام کنید و از نمونه کار های ما دیدن کنید و اگر ایده ای دارین برای ما مطرح کنید تا به واقعیت بپیوندد .</p>
            </header>
            <main>
              <form onSubmit={handleSubmit(submitEventHandler)} action="#" className="grid lg:grid-cols-2 grid-cols-1 gap-[20px] mb-[32px]">
                <InputComponent errorText={errors.name?.message} register={register} name="name" placeHolder="نام و نام خانوادگی ...." inputType="text" icon="person" />
                <InputComponent errorText={errors.tel?.message} register={register} name="tel" placeHolder="شماره تلفن ...." inputType="tel" icon="telephone" />
                <InputComponent errorText={errors.company?.message} register={register} name="company" placeHolder="شماره شرکت ( اختیاری )" inputType="tel" icon="caller" />
                <InputComponent errorText={errors.email?.message} register={register} name="email" placeHolder="ایمیل ...." inputType="email" icon="mail" />
                <InputComponent errorText={errors.password?.message} register={register} icon='slash-eye' name="password" placeHolder="رمز عبور ...." inputType="password" />
                <InputComponent errorText={errors.passwordRepeat?.message} register={register} icon='slash-eye' name="passwordRepeat" placeHolder="تکرار رمز عبور ...." inputType="password" />
                <button disabled={isValidating} className="lg:col-span-2 col-span-1 mt-[40px] btn-secondary-theme">
                  ثبت نام کنید
                  <IconComponent size={16} name="chevron-left" />   
                </button>
              </form>
              <HalfDividerComponent>یا</HalfDividerComponent>
              <Link href='#' className="btn-light-border mt-[32px]">
                <div className='flex justify-center items-center gap-[12px]'>
                  <IconComponent size={24} name="google" />
                  ثبت نام با حساب گوگل
                </div>
                <span className='lg:hidden block'>
                  <IconComponent size={16} name='chevron-left' />
                </span>
              </Link>
              <HalfDividerComponent>از قبل اکانت دارم</HalfDividerComponent>
              <div className="flex justify-center items-center mt-[32px]">
                <Link href="/log-in" className="btn-secondary lg:w-[50%] w-full">
                  <span className='truncate'>ورود به حساب</span>
                  <IconComponent size={16} name="chevron-left" />
                </Link>
              </div>
            </main>
          </div>
          <div className="lg:rounded-[48px] rounded-[20px] flex overflow-hidden lg:h-auto h-[200px]">
            <Image src={LeftSideImage.src} alt="عکس" width={634} height={883} className="w-full h-full object-cover" />
          </div>
        </div>  
      </div>
    </section>
  );
}
