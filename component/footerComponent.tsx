// Importing part
import {ReactNode} from "react";
import ContactComponent from '@/chunk/footer/contactComponent';
import Link from "next/link";
import Image from 'next/image';
import LogoImage from '@/app/favicon.ico';
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting footer component of pages
export default function FooterComponent():ReactNode {
    // Returning JSX
    return (
        <footer className="bg-gradient-to-b from-darkerTheme to-darkerTheme  mt-[150px] relative">
            <div className="container p-[20px] relative">
                <ContactComponent />
            </div>
            <div className="container p-[20px]">
                <main>
                    <Link className="block h-[56px] w-[56px] mb-[12px]" href={'/'}>
                        <Image src={LogoImage.src} alt={'لوگو وبیمود'} width={56} height={56} />
                    </Link>
                    <h5 className="mb-[16px] text-white text-[24px] font-semibold">تیم وبیمود</h5>
                    <div className="grid grid-cols-6 gap-[58px] mb-[56px]">
                        <div className="col-span-3">
                            <p className="text-white text-[16px] font-normal mb-[56px] leading-[36px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</p>
                            <div className="flex lg:flex-row flex-col lg:gap-[32px] gap-[24px] items-center flex-wrap lg:mb-[32px] mb-[24px]">
                                <Link className="flex lg:flex-row flex-col lg:gap-[16px] gap-[12px] items-center group" href='tel:0912999999999'>
                                    <div className="border border-white bg-transparent transition-all duration-500 shadow-none flex justify-center items-center text-white w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-white group-hover:text-theme group-hover:shadow-lg">
                                        <IconComponent size={16} name="telephone" />
                                    </div>
                                    <span className="text-[20px] font-normal text-white lg:text-start text-center">0912999999999</span>
                                </Link>
                                <Link className="flex lg:flex-row flex-col lg:gap-[16px] gap-[12px] items-center group" href='mailto:webimode@yahoo.com'>
                                    <div className="border border-white bg-transparent transition-all duration-500 shadow-none flex justify-center items-center text-white w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-white group-hover:text-theme group-hover:shadow-lg">
                                        <IconComponent size={16} name="mail" />
                                    </div>
                                    <span className="text-[20px] font-normal text-white lg:text-start text-center">webimode@yahoo.com</span>
                                </Link>
                            </div>
                            <div className="flex lg:flex-row flex-col lg:gap-[16px] gap-[12px] items-center group">
                                <div className="border border-white bg-transparent transition-all duration-500 shadow-none flex justify-center items-center text-white w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-white group-hover:text-theme group-hover:shadow-lg">
                                    <IconComponent size={16} name="location" />
                                </div>
                                <p className="text-[20px] font-normal text-white lg:text-start text-center">تهران ، میدان انقلاب ، کوچه سوم ، ساختمان الماس ، هلدینگ وبیمود ، طبقه سوم ، درب اول</p>
                            </div>
                        </div>
                        <div>
                            <span className="text-white truncate block text-[20px] font-normal w-full mb-[16px]">دسته بندی</span>
                            <ul className="flex flex-col gap-[16px]">
                                <li><Link className="transition-all duration-500 text-white text-[16px] hover:text-theme block truncate font-normal " href='/products'>محصولات ما</Link></li>
                                <li><Link className="transition-all duration-500 text-white text-[16px] hover:text-theme block truncate font-normal " href='/asembled-cases'>کیس هاس اسمبل شده</Link></li>
                                <li><Link className="transition-all duration-500 text-white text-[16px] hover:text-theme block truncate font-normal " href='/online-asemble'>اسمبل آنلاین</Link></li>
                                <li><Link className="transition-all duration-500 text-white text-[16px] hover:text-theme block truncate font-normal " href='/gaming-products'>محصولات گیمینگ</Link></li>
                                <li><Link className="transition-all duration-500 text-white text-[16px] hover:text-theme block truncate font-normal " href='/not-new-products'>دسته دوم</Link></li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-white truncate block text-[20px] font-normal w-full mb-[16px]">خدمات تیم وبیمود</span>
                            <ul className="flex flex-col gap-[16px]">
                                <li><Link className="transition-all duration-500 text-white text-[16px] hover:text-theme block truncate font-normal " href='/installments'>خرید اقساطی</Link></li>
                                <li><Link className="transition-all duration-500 text-white text-[16px] hover:text-theme block truncate font-normal " href='/organized-sell'>فروش سازمانی</Link></li>
                                <li><Link className="transition-all duration-500 text-white text-[16px] hover:text-theme block truncate font-normal " href='/atra-magazine'>مجله آترا</Link></li>
                                <li><Link className="transition-all duration-500 text-white text-[16px] hover:text-theme block truncate font-normal " href='/about-us'>درباره ما</Link></li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-white truncate block text-[20px] font-normal w-full mb-[16px]">خدمات مربوط کاربران</span>
                            <ul className="flex flex-col gap-[16px]">
                                <li><Link className="transition-all duration-500 text-white text-[16px] hover:text-theme block truncate font-normal " href='/profile'>حساب کابری</Link></li>
                                <li><Link className="transition-all duration-500 text-white text-[16px] hover:text-theme block truncate font-normal " href='/cart'>سبد خرید</Link></li>
                                <li><Link className="transition-all duration-500 text-white text-[16px] hover:text-theme block truncate font-normal " href='/rules'>شرایط و قوانین</Link></li>
                                <li><Link className="transition-all duration-500 text-white text-[16px] hover:text-theme block truncate font-normal " href='/privacy'>حفظ حریم خصوصی</Link></li>
                                <li><Link className="transition-all duration-500 text-white text-[16px] hover:text-theme block truncate font-normal " href='/gurantee'>گارانتی محصولات</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-[2px] bg-gradient-to-r from-transparent via-white to-transparent w-full my-[40px]" />
                    <div className="flex items-center justify-between gap-[20px] flex-wrap">
                        <h6 className="text-[20px] text-white font-normal">
                            تمامی حقوق این وبسایت برای 
                            <span className="text-theme font-bold inline-block mx-[1ch]">وبیمود</span>
                            است
                        </h6>
                        <div className="flex gap-[16px]">
                            <Link className="w-[48px] h-[48px] flex items-center justify-center border transition-all duration-500 bg-transparent rounded-full border-white text-white hover:text-theme hover:bg-white" href='/'><IconComponent name="whatsapp" size={24} /></Link>
                            <Link className="w-[48px] h-[48px] flex items-center justify-center border transition-all duration-500 bg-transparent rounded-full border-white text-white hover:text-theme hover:bg-white" href='/'><IconComponent name="instagram" size={24} /></Link>
                            <Link className="w-[48px] h-[48px] flex items-center justify-center border transition-all duration-500 bg-transparent rounded-full border-white text-white hover:text-theme hover:bg-white" href='/'><IconComponent name="linkedin" size={24} /></Link>
                        </div>
                    </div>
                </main>
            </div>
        </footer>
    );
}