// Importing part
import {ReactNode} from 'react';
import IconComponent from '@/chunk/iconComponent';
import Image from 'next/image';
import chatGPTImage from '@/public/img/home/fourthSection/img-chat-gpt.png';
import JavaImage from '@/public/img/home/fourthSection/img-java.png';
import cPlusPlusImage from '@/public/img/home/fourthSection/img-c++.png';
import IndisignImage from '@/public/img/home/fourthSection/img-indisign.png';
import reactImage from '@/public/img/home/fourthSection/img-react.png';
import cssImage from '@/public/img/home/fourthSection/img-css.png';
import phpImage from '@/public/img/home/fourthSection/img-php.png';
import jsImage from '@/public/img/home/fourthSection/img-js.png';
import htmlImage from '@/public/img/home/fourthSection/img-html.png';
import illustratorImage from '@/public/img/home/fourthSection/img-ilustrator.png';
import PhotoahopImage from '@/public/img/home/fourthSection/img-photoshop.png';
import XDImage from '@/public/img/home/fourthSection/img-xd.png';
import cSharpImage from '@/public/img/home/fourthSection/img-c#.png';
import figmaImage from '@/public/img/home/fourthSection/img-figma.png';

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
        <div>
          <button><IconComponent size={16} name="chevron-right" /></button>
          <div>
            <ul>
              <li><Image src={chatGPTImage.src} alt="عکس لوگو چت بی تی" width={56} height={56} /></li>
              <li><Image src={JavaImage.src} alt="عکس لوگو جاوا" width={56} height={56} /></li>
              <li><Image src={cPlusPlusImage.src} alt="عکس لوگو سی پلاس پلاس" width={56} height={56} /></li>
              <li><Image src={IndisignImage.src} alt="عکس لوگو ایندیزاین" width={56} height={56} /></li>
              <li><Image src={reactImage.src} alt="عکس لوگو ریکت" width={56} height={56} /></li>
              <li><Image src={cssImage.src} alt="عکس لوگو سی اس اس" width={56} height={56} /></li>
              <li><Image src={phpImage.src} alt="عکس لوگو پی اچ پی" width={56} height={56} /></li>
              <li><Image src={jsImage.src} alt="عکس لوگو جاوااسکریپت" width={56} height={56} /></li>
              <li><Image src={htmlImage.src} alt="عکس لوگو اچ تی ام ال" width={56} height={56} /></li>
              <li><Image src={illustratorImage.src} alt="عکس لوگو ایلوستریتور" width={56} height={56} /></li>
              <li><Image src={PhotoahopImage.src} alt="عکس لوگو فوتوشاپ" width={56} height={56} /></li>
              <li><Image src={XDImage.src} alt="عکس لوگو ادوبی ایکس دی" width={56} height={56} /></li>
              <li><Image src={cSharpImage.src} alt="عکس لوگو سی شارپ" width={56} height={56} /></li>
              <li><Image src={figmaImage.src} alt="عکس لوگو فیگما" width={56} height={56} /></li>
              <li><Image src={JavaImage.src} alt="عکس لوگو جاوا" width={56} height={56} /></li>
              <li><Image src={chatGPTImage.src} alt="عکس لوگو چت بی تی" width={56} height={56} /></li>
              <li><Image src={JavaImage.src} alt="عکس لوگو جاوا" width={56} height={56} /></li>
              <li><Image src={cPlusPlusImage.src} alt="عکس لوگو سی پلاس پلاس" width={56} height={56} /></li>
              <li><Image src={IndisignImage.src} alt="عکس لوگو ایندیزاین" width={56} height={56} /></li>
              <li><Image src={reactImage.src} alt="عکس لوگو ریکت" width={56} height={56} /></li>
              <li><Image src={cssImage.src} alt="عکس لوگو سی اس اس" width={56} height={56} /></li>
              <li><Image src={phpImage.src} alt="عکس لوگو پی اچ پی" width={56} height={56} /></li>
              <li><Image src={jsImage.src} alt="عکس لوگو جاوااسکریپت" width={56} height={56} /></li>
              <li><Image src={htmlImage.src} alt="عکس لوگو اچ تی ام ال" width={56} height={56} /></li>
              <li><Image src={illustratorImage.src} alt="عکس لوگو ایلوستریتور" width={56} height={56} /></li>
              <li><Image src={PhotoahopImage.src} alt="عکس لوگو فوتوشاپ" width={56} height={56} /></li>
              <li><Image src={XDImage.src} alt="عکس لوگو ادوبی ایکس دی" width={56} height={56} /></li>
              <li><Image src={cSharpImage.src} alt="عکس لوگو سی شارپ" width={56} height={56} /></li>
              <li><Image src={figmaImage.src} alt="عکس لوگو فیگما" width={56} height={56} /></li>
              <li><Image src={JavaImage.src} alt="عکس لوگو جاوا" width={56} height={56} /></li>
            </ul>
          </div>
          <button><IconComponent size={16} name="chevron-left" /></button>
        </div>
      </main>
    </section>
  );
}
