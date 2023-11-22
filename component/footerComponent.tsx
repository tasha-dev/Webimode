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
        <footer>
            <ContactComponent />
            <main>
                <Link href={'/'}>
                    <Image src={LogoImage.src} alt={'لوگو وبیمود'} width={56} height={56} />
                </Link>
                <h5>تیم وبیمود</h5>
                <div>
                    <div>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</p>
                        <div className="flex lg:flex-row flex-col lg:gap-[32px] gap-[24px] items-center flex-wrap lg:mb-[32px] mb-[24px]">
                            <Link className="flex lg:flex-row flex-col lg:gap-[16px] gap-[12px] items-center group" href='tel:0912999999999'>
                                <div className="border border-white bg-transparent transition-all duration-500 shadow-none flex justify-center items-center text-white w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-white group-hover:text-theme group-hover:shadow-lg">
                                    <IconComponent size={16} name="telephone" />
                                </div>
                                <span className="text-[20px] font-normal text-theme lg:text-start text-center">0912999999999</span>
                            </Link>
                            <Link className="flex lg:flex-row flex-col lg:gap-[16px] gap-[12px] items-center group" href='mailto:webimode@yahoo.com'>
                                <div className="border border-white bg-transparent transition-all duration-500 shadow-none flex justify-center items-center text-white w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-white group-hover:text-theme group-hover:shadow-lg">
                                    <IconComponent size={16} name="mail" />
                                </div>
                                <span className="text-[20px] font-normal text-theme lg:text-start text-center">webimode@yahoo.com</span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <span>دسته بندی</span>
                        <ul>
                            <li><Link href='/products'>محصولات ما</Link></li>
                            <li><Link href='/asembled-cases'>کیس هاس اسمبل شده</Link></li>
                            <li><Link href='/online-asemble'>اسمبل آنلاین</Link></li>
                            <li><Link href='/gaming-products'>محصولات گیمینگ</Link></li>
                            <li><Link href='/not-new-products'>دسته دوم</Link></li>
                        </ul>
                    </div>
                    <div>
                        <span>خدمات تیم وبیمود</span>
                        <ul>
                            <li><Link href='/installments'>خرید اقساطی</Link></li>
                            <li><Link href='/organized-sell'>فروش سازمانی</Link></li>
                            <li><Link href='/atra-magazine'>مجله آترا</Link></li>
                            <li><Link href='/about-us'>درباره ما</Link></li>
                        </ul>
                    </div>
                    <div>
                        <span>خدمات مربوط کاربران</span>
                        <ul>
                            <li><Link href='/profile'>حساب کابری</Link></li>
                            <li><Link href='/cart'>سبد خرید</Link></li>
                            <li><Link href='/rules'>شرایط و قوانین</Link></li>
                            <li><Link href='/privacy'>حفظ حریم خصوصی</Link></li>
                            <li><Link href='/gurantee'>گارانتی محصولات</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:gap-[16px] gap-[12px] items-center group">
                    <div className="border border-white bg-white transition-all duration-500 shadow-none flex justify-center items-center text-white w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-white group-hover:text-theme group-hover:shadow-lg">
                        <IconComponent size={16} name="location" />
                    </div>
                    <p className="text-[20px] font-normal text-white lg:text-start text-center">تهران ، میدان انقلاب ، کوچه سوم ، ساختمان الماس ، هلدینگ وبیمود ، طبقه سوم ، درب اول</p>
                </div>
                <div />
                <div>
                    <h6>
                        تمامی حقوق این وبسایت برای 
                        <span>وبیمود</span>
                        است
                    </h6>
                    <div>
                        <Link href='/'><IconComponent name="whatsapp" size={24} /></Link>
                        <Link href='/'><IconComponent name="instagram" size={24} /></Link>
                        <Link href='/'><IconComponent name="linkedin" size={24} /></Link>
                    </div>
                </div>
            </main>
        </footer>
    );
}