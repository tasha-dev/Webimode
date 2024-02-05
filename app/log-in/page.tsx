// Forcing nextJS to render this component as client side component
'use client';

// importing part
import {ReactNode} from 'react';
import Link from 'next/link';
import IconComponent from '@/chunk/iconComponent';
import InputComponent from '@/chunk/inputComponent';
import HalfDividerComponent from '@/chunk/halfDividerComponent';
import Image from 'next/image';
import LeftSideImage from '@/public/img/img-log-in.jpg';
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {SubmitHandler, useForm} from "react-hook-form";

// Defining type of form
const formSchema = z.object({
  email: z.string().email('لطفا ایمیل را به درستی وارد کنید.'),
  password: z.string().min(8, 'رمز عبور نمیتواند کمتر از 8 کارکتر باشد.').max(12, 'رمز عبور نمیتواند بیشتر از 12 کارکتر باشد.')
});

type formType = z.infer<typeof formSchema>;

// Creating and exporting Log in page as default
export default function LogInPage():ReactNode {
  // Defining useForm hook to handle form
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValidating
    }
  } = useForm<formType>({
    resolver: zodResolver(formSchema)
  });

  // Handling submit event of form
  const submitEventHandler: SubmitHandler<formType> = (data) => {
    console.log(data);
  }

  // Returning JSX 
  return (
    <section className='lg:mb-0 mb-[50px]'>
      <div className="container px-[20px] pb-[20px]">
        <div className='lg:block hidden'>
          <div className="sign">ورود به حساب</div>
        </div>
        <div className="lg:grid flex flex-col-reverse grid-cols-2 lg:gap-[64px] gap-[40px]">
          <div>
            <header className="lg:mb-[48px] mb-[20px] lg:block flex items-center justify-center flex-col">
              <div className='lg:hidden block'>
                <div className="sign-mb-0">ورود به حساب</div>
              </div>
              <h1 className="font-semibold lg:text-[40px] text-[20px] text-dark lg:leading-[74px] leading-[40px] lg:mb-[12px] lg:text-start text-center">
                به دنیای ایده های وبیمود
                <span className="text-theme inline-block mr-[1ch]">خوش آمدید</span>
              </h1>
              <p className="paragraph lg:text-start text-center">وارد حساب کاربریتان شوید و از روند پروژه هایتان مطلع شوید و با متخصصان ما در مورد روند پروژه صحبت کنید</p>
            </header>
            <main>
              <form onSubmit={handleSubmit(submitEventHandler)} action="#" className="grid lg:grid-cols-2 grid-cols-1 gap-[20px] mb-[32px]">
                <InputComponent inputType={'email'} errorText={errors.email?.message} register={register} name="email" placeHolder="ایمیل ...." icon="person" />
                <InputComponent inputType={'password'} errorText={errors.password?.message} register={register} icon='slash-eye' name="password" placeHolder="رمز عبور ...." />
                <button disabled={isValidating} className="lg:col-span-2 col-span-1 mt-[40px] btn-secondary-theme">
                    ورود به حساب
                  <IconComponent size={16} name="chevron-left" />   
                </button>
              </form>
              <HalfDividerComponent>یا</HalfDividerComponent>
              <Link href='#' className="btn-light-border mt-[32px]">
                <div className='flex justify-center items-center gap-[12px]'>
                  <IconComponent size={24} name="google" />
                  ورود با حساب گوگل
                </div>
                <span className='lg:hidden block'>
                  <IconComponent size={16} name='chevron-left' />
                </span>
              </Link>
              <HalfDividerComponent>اکانت ندارم !</HalfDividerComponent>
              <div className="flex justify-center items-center mt-[32px]">
                <Link href="/sign-in" className="btn-secondary lg:w-[50%] w-full">
                  <span className='truncate'>ساخت حساب کاربری</span>
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
