// Improrting part
import {ReactNode} from 'react';
import Link from 'next/link';
import IconComponent from '@/chunk/iconComponent';
import InputComponent from '@/chunk/inputComponent';
import HalfDividerComponent from '@/chunk/halfDividerComponent';
import Image from 'next/image';
import LeftSideImage from '@/public/img/img-sign-in.png';

// Creating and exporting sign in page as default
export default function SignInPage():ReactNode {
  // Returning JSX 
  return (
    <section>
      <div className="container px-[20px] pb-[20px] lg:pt-[250px] pt-[200px]">
        <div className="sign">ثبت نام</div>
        <div className="grid grid-cols-2 gap-[64px]">
          <div>
            <header className="mb-[48px]">
              <h1 className="font-semibold text-[40px] text-dark leading-[74px] mb-[12px]">
                <span className="text-theme inline-block ml-[1ch]">به راحتی ثبت نام کن</span>
                و به خانواده وبیمود ملحق شو !
              </h1>
              <p className="paragraph">به راحتی در وب سایت وبیمود ثبت نام کنید و از نمونه کار های ما دیدن کنید و اگر ایده ای دارین برای ما مطرح کنید تا به واقعیت بپیوندد .</p>
            </header>
            <main>
              <Link href='#' className="btn-light-border">
                <IconComponent size={24} name="google" />
                ثبت نام با حساب گوگل
              </Link>
              <HalfDividerComponent>یا</HalfDividerComponent>
              <form action="#" className="grid grid-cols-2 gap-[20px] my-[32px]">
                <InputComponent name="name-input" required placeHolder="نام و نام خانوادگی ...." inputType="text" icon="person" />
                <InputComponent name="tel-input" required placeHolder="شماره تلفن ...." inputType="tel" icon="telephone" />
                <InputComponent name="company-tell-input" required placeHolder="شماره شرکت ( اختیاری )" inputType="tel" icon="caller" />
                <InputComponent name="email-input" required placeHolder="ایمیل ...." inputType="email" icon="mail" />
                <InputComponent icon='slash-eye' name="password-input" required placeHolder="رمز عبور ...." inputType="password" />
                <InputComponent icon='slash-eye' name="password-repeat-input" required placeHolder="تکرار رمز عبور ...." inputType="password" />
                <button className="col-span-2 mt-[40px] btn-secondary-theme">
                  ثبت نام کنید
                  <IconComponent size={16} name="chevron-left" />   
                </button>
              </form>
              <HalfDividerComponent>از قبل اکانت دارم</HalfDividerComponent>
              <div className="flex justify-center items-center">
                <Link href="/log-in" className="btn-secondary w-[50%] mt-[32px]">
                  ورود به حساب
                  <IconComponent size={16} name="chevron-left" />
                </Link>
              </div>
            </main>
          </div>
          <div className="rounded-[48px] flex overflow-hidden">
            <Image src={LeftSideImage.src} alt="عکس" width={634} height={883} className="w-full h-full" />
          </div>
        </div>  
      </div>
    </section>
  );
}
