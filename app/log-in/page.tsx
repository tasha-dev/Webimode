// Improrting part
import {ReactNode} from 'react';
import Link from 'next/link';
import IconComponent from '@/chunk/iconComponent';
import InputComponent from '@/chunk/inputComponent';
import HalfDividerComponent from '@/chunk/halfDividerComponent';
import Image from 'next/image';
import LeftSideImage from '@/public/img/img-log-in.jpg';

// Creating and exporting Log in page as default
export default function LogInPage():ReactNode {
  // Returning JSX 
  return (
    <section className='lg:mb-0 mb-[105px]'>
      <div className="container px-[20px] pb-[20px] lg:pt-[250px] pt-[68px]">
        <div className='lg:block hidden'>
          <div className="sign">ورود به حساب</div>
        </div>
        <div className="lg:grid flex flex-col-reverse grid-cols-2 lg:gap-[64px] gap-[40px]">
          <div>
            <header className="lg:mb-[48px] mb-[40px] lg:block flex items-center justify-center flex-col">
              <div className='lg:hidden block'>
                <div className="sign-mb-0">ورود به حساب</div>
              </div>
              <h1 className="font-semibold lg:text-[40px] text-[20px] text-dark leading-[74px] mb-[12px] lg:text-start text-center">
                به دنیای ایده های وبیمود
                <span className="text-theme inline-block mr-[1ch]">خوش آمدید</span>
              </h1>
              <p className="paragraph lg:text-start text-center">وارد حساب کاربریتان شوید و از روند پروژه هایتان مطلع شوید و با متخصصان ما در مورد روند پروژه صحبت کنید</p>
            </header>
            <main>
              <Link href='#' className="btn-light-border">
                <div className='flex justify-center items-center gap-[12px]'>
                  <IconComponent size={24} name="google" />
                  ورود با حساب گوگل
                </div>
                <span className='lg:hidden block'>
                  <IconComponent size={16} name='chevron-left' />
                </span>
              </Link>
              <HalfDividerComponent>یا</HalfDividerComponent>
              <form action="#" className="grid lg:grid-cols-2 grid-cols-1 gap-[20px] my-[32px]">
                <InputComponent name="name-email-input" required placeHolder="نام کاربری یا ایمیل ...." inputType="text" icon="person" />
                <InputComponent icon='slash-eye' name="password-input" required placeHolder="رمز عبور ...." inputType="password" />
                <button className="lg:col-span-2 col-span-1 mt-[40px] btn-secondary-theme">
                    ورود به حساب
                  <IconComponent size={16} name="chevron-left" />   
                </button>
              </form>
              <HalfDividerComponent>اکانت ندارم !</HalfDividerComponent>
              <div className="flex justify-center items-center mt-[32px]">
                <Link href="/sign-in" className="btn-secondary lg:w-[50%] w-[75%]">
                ساخت حساب کاربری    
                  <IconComponent size={16} name="chevron-left" />
                </Link>
              </div>
            </main>
          </div>
          <div className="rounded-[48px] flex overflow-hidden lg:h-auto h-[500px]">
            <Image src={LeftSideImage.src} alt="عکس" width={634} height={883} className="w-full h-full object-cover" />
          </div>
        </div>  
      </div>
    </section>
  );
}
