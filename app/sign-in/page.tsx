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
        <div>
          <div>
            <header>
              <h1>
                <span>به راحتی ثبت نام کن</span>
                و به خانواده وبیمود ملحق شو !
              </h1>
              <p className="paragraph">به راحتی در وب سایت وبیمود ثبت نام کنید و از نمونه کار های ما دیدن کنید و اگر ایده ای دارین برای ما مطرح کنید تا به واقعیت بپیوندد .</p>
            </header>
            <main>
              <Link href='#'>
                <IconComponent size={24} name="google" />
                ثبت نام با حساب گوگل
              </Link>
              <HalfDividerComponent>یا</HalfDividerComponent>
              <form action="#">
                <InputComponent placeHolder="نام و نام خانوادگی ...." inputType="text" icon="person" />
                <InputComponent placeHolder="شماره تلفن ...." inputType="tell" icon="telephone" />
                <InputComponent placeHolder="شماره شرکت ( اختیاری )" inputType="tell" icon="caller" />
                <InputComponent placeHolder="ایمیل ...." inputType="mail" icon="mail" />
                <InputComponent placeHolder="رمز عبور ...." inputType="password" />
                <InputComponent placeHolder="تکرار رمز عبور ...." inputType="password" />
                <button>
                  ثبت نام کنید
                  <IconComponent size={16} name="chevron-left" />   
                </button>
              </form>
              <HalfDividerComponent>از قبل اکانت دارم</HalfDividerComponent>
              <Link href="/log-in">
                ورود به حساب
                <IconComponent size={16} name="chevron-left" />
              </Link>
            </main>
          </div>
          <div>
          </div>
        </div> 
        <Image src={LeftSideImage.src} alt="عکس" width={634} height={883} />
      </div>
    </section>
  );
}
