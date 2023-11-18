// Importing part
import {ReactNode} from 'react';
import IconComponent from '@/chunk/iconComponent';

// Creating and exporting fourth section of home page as default
export default function FourthSectionComponent():ReactNode {
  // Returning JSX
  return (
    <section className="mt-[256px]">
      <header className={'flex items-center justify-center flex-col mx-auto lg:mb-[40px] mb-[32px]'}>
        <div className={'sign'}>مهارت وبیمود</div>
        <h4 className={'relative lg:text-[48px] text-[20px] font-bold mb-[8px] text-center'}>
          <span className={'inline-block ml-[1ch] text-theme'}>مهارت های</span>
          <span className={'inline-block text-dark'}>تیم وبیمود</span>
          <span className={'text-theme absolute left-full bottom-full lg:flex hidden flex-col w-[30px]'}>
            <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
            <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
            <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
          </span>
        </h4>
        <p className={'lg:text-[20px] text-[13px] text-center text-lightGrey lg:leading-[36px] leading-[28px]'}>
            تیم وبیمود افتخار این را دارد که بتواند تمام نیاز های کارفمایان را در انواع زمینههای مختلف طراحی و برنامه نوسی و...
            <br/>
            در بهترین حالت ممکن برطرف کند .
        </p>
      </header>
      <main>
        
      </main>
    </section>
  );
}
