// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import ContactComponent from '@/chunk/footer/contactComponent';
import Link from "next/link";
import Image from 'next/image';
import LogoImage from '@/app/favicon.ico';
import IconComponent from "@/chunk/iconComponent";
import {usePathname} from 'next/navigation';
import BeforeFooterComponent from "@/component/footer/beforeFooterComponent";

// Creating and exporting footer component of pages
export default function FooterComponent():ReactNode {
    // Getting URL of current page
    const pathname:string = usePathname();

    // Defining URL's with which dont need contact component, no margin in top of footer and no footer at all
    const noContactComponentURL:Array<string> = ['/sign-in', '/log-in', '/estimate', '/chat-gpt', '/request-project', '/dashboard', '/dashboard/notifications', '/dashboard/payments', '/dashboard/faq', '/dashboard/profile', '/dashboard/projects', '/dashboard/faq'];
    const noMarginTopPages:Array<string> = ['/estimate', '/chat-gpt', '/dashboard', '/dashboard/notifications', '/dashboard/payments', '/dashboard/faq', '/dashboard/profile', '/dashboard/projects', '/dashboard/faq'];
    const noFooterPages:Array<string> = ['/chat-gpt/app'];

    // Conditional rendering
    if (noFooterPages.includes(pathname)) {
        return false;
    } else {
        return (
            <>
                {(!noContactComponentURL.includes(pathname) && !pathname.startsWith('/dashboard/tickets')) ? <BeforeFooterComponent /> : false}
                <footer data-hasbefore={(!noContactComponentURL.includes(pathname) && !pathname.startsWith('/dashboard/tickets'))} data-hasmargintop={(!noMarginTopPages.includes(pathname) && !pathname.startsWith('/dashboard/tickets'))} className="bg-gradient-to-b from-darkerTheme to-darkerTheme data-[hasmargintop='true']:lg:mt-[150px] lg:relative">
                    {
                        (!noContactComponentURL.includes(pathname) && !pathname.startsWith('/dashboard/tickets'))
                            ? (
                                <div className="container lg:p-[20px] lg:relative lg:mb-0 mb-[80px]">
                                    <ContactComponent />
                                </div>
                            ) : false
                    }
                    <div className="container p-[20px]">
                        <main>
                            <Link className="block h-[56px] w-[56px] mb-[12px] lg:mx-0 mx-auto" href={'/'}>
                                <Image src={LogoImage.src} alt={'لوگو وبیمود'} width={56} height={56} />
                            </Link>
                            <h5 className="lg:mb-[16px] mb-[8px] text-white lg:text-[24px] text-[20px] font-semibold lg:text-start text-center">تیم وبیمود</h5>
                            <div className="grid lg:grid-cols-6 grid-cols-2 gap-[58px] lg:mb-[56px] mb-[32px]">
                                <div className="lg:col-span-3 col-span-2">
                                    <p className="text-white lg:text-[16px] text-[13px] font-normal mb-[56px] lg:leading-[36px] leading-[26px] lg:text-start text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</p>
                                    <div className="lg:block hidden">
                                        <div className="flex gap-[32px] items-center flex-wrap mb-[32px]">
                                            <Link className="flex gap-[16px] items-center group" href='tel:0912999999999'>
                                                <div className="border border-white bg-transparent transition-all duration-500 shadow-none flex justify-center items-center text-white w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-white group-hover:text-theme group-hover:shadow-lg">
                                                    <IconComponent size={16} name="telephone" />
                                                </div>
                                                <span className="text-[20px] font-normal text-white lg:text-start text-center">0912999999999</span>
                                            </Link>
                                            <Link className="flex gap-[16px] items-center group" href='mailto:webimode@yahoo.com'>
                                                <div className="border border-white bg-transparent transition-all duration-500 shadow-none flex justify-center items-center text-white w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-white group-hover:text-theme group-hover:shadow-lg">
                                                    <IconComponent size={16} name="mail" />
                                                </div>
                                                <span className="text-[20px] font-normal text-white lg:text-start text-center">webimode@yahoo.com</span>
                                            </Link>
                                        </div>
                                        <div className="flex gap-[16px] items-center group">
                                            <div className="border border-white bg-transparent transition-all duration-500 shadow-none flex justify-center items-center text-white w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-white group-hover:text-theme group-hover:shadow-lg">
                                                <IconComponent size={16} name="location" />
                                            </div>
                                            <p className="text-[20px] font-normal text-white lg:text-start text-center">تهران ، میدان انقلاب ، کوچه سوم ، ساختمان الماس ، هلدینگ وبیمود ، طبقه سوم ، درب اول</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-white truncate block lg:text-[20px] text-[16px] font-normal w-full mb-[16px]">دسته بندی</span>
                                    <ul className="flex flex-col gap-[16px]">
                                        <li><Link className="transition-all duration-500 text-white lg:text-[16px] text-[13px] hover:text-theme block truncate font-normal " href='/products'>محصولات ما</Link></li>
                                        <li><Link className="transition-all duration-500 text-white lg:text-[16px] text-[13px] hover:text-theme block truncate font-normal " href='/asembled-cases'>کیس هاس اسمبل شده</Link></li>
                                        <li><Link className="transition-all duration-500 text-white lg:text-[16px] text-[13px] hover:text-theme block truncate font-normal " href='/online-asemble'>اسمبل آنلاین</Link></li>
                                        <li><Link className="transition-all duration-500 text-white lg:text-[16px] text-[13px] hover:text-theme block truncate font-normal " href='/gaming-products'>محصولات گیمینگ</Link></li>
                                        <li><Link className="transition-all duration-500 text-white lg:text-[16px] text-[13px] hover:text-theme block truncate font-normal " href='/not-new-products'>دسته دوم</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <span className="text-white truncate block lg:text-[20px] text-[16px] font-normal w-full mb-[16px]">خدمات تیم وبیمود</span>
                                    <ul className="flex flex-col gap-[16px]">
                                        <li><Link className="transition-all duration-500 text-white lg:text-[16px] text-[13px] hover:text-theme block truncate font-normal " href='/installments'>خرید اقساطی</Link></li>
                                        <li><Link className="transition-all duration-500 text-white lg:text-[16px] text-[13px] hover:text-theme block truncate font-normal " href='/organized-sell'>فروش سازمانی</Link></li>
                                        <li><Link className="transition-all duration-500 text-white lg:text-[16px] text-[13px] hover:text-theme block truncate font-normal " href='/atra-magazine'>مجله آترا</Link></li>
                                        <li><Link className="transition-all duration-500 text-white lg:text-[16px] text-[13px] hover:text-theme block truncate font-normal " href='/about-us'>درباره ما</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <span className="text-white truncate block lg:text-[20px] text-[16px] font-normal w-full mb-[16px]">خدمات مربوط کاربران</span>
                                    <ul className="flex flex-col gap-[16px]">
                                        <li><Link className="transition-all duration-500 text-white lg:text-[16px] text-[13px] hover:text-theme block truncate font-normal " href='/profile'>حساب کابری</Link></li>
                                        <li><Link className="transition-all duration-500 text-white lg:text-[16px] text-[13px] hover:text-theme block truncate font-normal " href='/cart'>سبد خرید</Link></li>
                                        <li><Link className="transition-all duration-500 text-white lg:text-[16px] text-[13px] hover:text-theme block truncate font-normal " href='/rules'>شرایط و قوانین</Link></li>
                                        <li><Link className="transition-all duration-500 text-white lg:text-[16px] text-[13px] hover:text-theme block truncate font-normal " href='/privacy'>حفظ حریم خصوصی</Link></li>
                                        <li><Link className="transition-all duration-500 text-white lg:text-[16px] text-[13px] hover:text-theme block truncate font-normal " href='/gurantee'>گارانتی محصولات</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:hidden block">
                                <div className="flex flex-col lg:gap-[32px] gap-[16px] items-center flex-wrap mb-[32px]">
                                    <Link className="flex flex-col gap-[16px] items-center group" href='tel:0912999999999'>
                                        <div className="border border-white bg-transparent transition-all duration-500 shadow-none flex justify-center items-center text-white w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-white group-hover:text-theme group-hover:shadow-lg">
                                            <IconComponent size={16} name="telephone" />
                                        </div>
                                        <span className="text-[20px] font-normal text-white lg:text-start text-center">0912999999999</span>
                                    </Link>
                                    <Link className="flex flex-col gap-[16px] items-center group" href='mailto:webimode@yahoo.com'>
                                        <div className="border border-white bg-transparent transition-all duration-500 shadow-none flex justify-center items-center text-white w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-white group-hover:text-theme group-hover:shadow-lg">
                                            <IconComponent size={16} name="mail" />
                                        </div>
                                        <span className="text-[20px] font-normal text-white lg:text-start text-center">webimode@yahoo.com</span>
                                    </Link>
                                </div>
                                <div className="flex flex-col gap-[16px] items-center group">
                                    <div className="border border-white bg-transparent transition-all duration-500 shadow-none flex justify-center items-center text-white w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-white group-hover:text-theme group-hover:shadow-lg">
                                        <IconComponent size={16} name="location" />
                                    </div>
                                    <p className="text-[20px] font-normal text-white lg:text-start text-center">تهران ، میدان انقلاب ، کوچه سوم ، ساختمان الماس ، هلدینگ وبیمود ، طبقه سوم ، درب اول</p>
                                </div>
                            </div>
                            <div className="h-[2px] bg-gradient-to-r from-transparent via-white to-transparent w-full my-[40px]" />
                            <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-[20px] flex-wrap">
                                <h6 className="lg:text-[20px] text-[13px] text-white font-normal">
                                    تمامی حقوق این وبسایت برای
                                    <span className="text-theme font-bold inline-block mx-[1ch]">وبیمود</span>
                                    است
                                </h6>
                                <div className="flex gap-[16px] lg:overflow-hidden overflow-auto">
                                    <Link className="w-[48px] h-[48px] flex items-center justify-center border transition-all duration-500 bg-transparent rounded-full border-white text-white hover:text-theme hover:bg-white" href='/'><IconComponent name="whatsapp" size={24} /></Link>
                                    <Link className="w-[48px] h-[48px] flex items-center justify-center border transition-all duration-500 bg-transparent rounded-full border-white text-white hover:text-theme hover:bg-white" href='/'><IconComponent name="instagram" size={24} /></Link>
                                    <Link className="w-[48px] h-[48px] flex items-center justify-center border transition-all duration-500 bg-transparent rounded-full border-white text-white hover:text-theme hover:bg-white" href='/'><IconComponent name="linkedin" size={24} /></Link>
                                </div>
                            </div>
                        </main>
                    </div>
                </footer>
            </>
        );
    }
}
