// Importing part
import IconComponent from '@/chunk/iconComponent';
import ServiceItemComponent from '@/chunk/page/home/thirdSection/serviceItemComponent';
import Link from 'next/link';
import {ReactNode} from 'react';
import FigmaImage from '@/public/img/home/thirdSection/services/img-figma.png';
import CodeImage from '@/public/img/home/thirdSection/services/img-code.png';
import ChartsImage from '@/public/img/home/thirdSection/services/img-charts.png';
import PencilImage from '@/public/img/home/thirdSection/services/img-pencil.png';
import MobileImage from '@/public/img/home/thirdSection/services/img-mobile.png';
import SocialsImage from '@/public/img/home/thirdSection/services/img-socials.png';
import ManImage from '@/public/img/home/thirdSection/services/img-man.png';
import AiImage from '@/public/img/home/thirdSection/services/img-ai.png';

// Creating and exporting third section component as default
export default function ThirdSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className='mt-[500px] p-[20px]'>
            <header className='mb-[40px]'>
                <div className='flex gap-[50px]'>
                    <div>
                        <div className='sign shrink-0'>بهترین حدمات</div>
                        <h4 className='text-[48px]'>
                            <span className='font-bold inline-block ml-[10px] text-theme'>خدمات</span>
                            <span className='font-normal inline-block text-dark'>تیم وبیمود</span>
                        </h4>
                    </div>
                    <div className='flex justify-around flex-col'>
                        <p className='text-lightGrey text-[20px] font-normal truncate'>بهترین و با کیفیت ترین خدمات طراحی و پشتیبانی و برنامه نویسی را با تیم وبیمود در بلاترین سطح تجربه کنید !</p>
                        <div className={'flex lg:flex-row flex-col lg:w-auto lg:flex-wrap lg:gap-[34px] gap-[24px] shrink-0'}>
                            <Link href={'/contact-us'} className={'btn-primary lg:w-auto w-full'}>
                                درخواست همکاری  
                                <IconComponent name='chevron-left' size={16} />
                            </Link>
                            <Link href={'/work-samples'} className={'btn-secondary lg:w-auto w-full'}>
                                نمونه کار های ما
                                <IconComponent name={'chevron-left'} size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <main className='grid grid-cols-2 gap-[20px]'>
                <ServiceItemComponent icon='design' iconGradiant='blue' img={FigmaImage.src} hasButtons hasMobileImageInLeft title='طراحی UI UX'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='window' iconGradiant='purple' img={CodeImage.src} title='برنامه نویسی وب سایت'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='poll' iconGradiant='green' img={ChartsImage.src} title='تولید محتوا'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='pencil-paintbrush' iconGradiant='orange' img={PencilImage.src} title='طراحی لوگو'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='mobile' iconGradiant='deep-green' img={MobileImage.src} title='اپلیکیشن اندروید'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='slack' iconGradiant='dark-blue' img={SocialsImage.src} title='مدیریت شبکه اجتماعی'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='lang' iconGradiant='pink' img={ManImage.src} title='ترجمه مقالات و مدارک'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='ai' iconGradiant='reversed-pink' img={AiImage.src} title='هوش مصنوعی'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
            </main>
        </section>
    );
}