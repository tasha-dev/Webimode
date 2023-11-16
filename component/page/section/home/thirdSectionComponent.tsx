// Importing part
import IconComponent from '@/chunk/iconComponent';
import ServiceItemComponent from '@/chunk/page/home/thirdSection/serviceItemComponent';
import Link from 'next/link';
import {ReactNode} from 'react';

// Creating and exporting third section component as default
export default function ThirdSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <header>
                <div>
                    <div className='sign'>بهترین حدمات</div>
                    <p>بهترین و با کیفیت ترین خدمات طراحی و پشتیبانی و برنامه نویسی را با تیم وبیمود در بلاترین سطح تجربه کنید !</p>
                </div>
                <div>
                    <h4>
                        <span>خدمات</span>
                        <span>تیم وبیمود</span>
                    </h4>
                    <div className={'flex lg:flex-row flex-col lg:w-auto w-full lg:flex-wrap lg:gap-[34px] gap-[24px]'}>
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
            </header>
            <main>
                <ServiceItemComponent icon='design' iconGradiant='blue' img='' hasButtons hasMobileImageInLeft title='طراحی UI UX'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='window' iconGradiant='purple' img='' title='برنامه نویسی وب سایت'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='poll' iconGradiant='green' img='' title='تولید محتوا'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='pencil-paintbrush' iconGradiant='orange' img='' title='طراحی لوگو'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='mobile' iconGradiant='deep-green' img='' title='اپلیکیشن اندروید'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='slack' iconGradiant='dark-blue' img='' title='مدیریت شبکه اجتماعی'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='lang' iconGradiant='pink' img='' title='ترجمه مقالات و مدارک'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='ai' iconGradiant='reversed-pink' img='' title='هوش مصنوعی'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
            </main>
        </section>
    );
}