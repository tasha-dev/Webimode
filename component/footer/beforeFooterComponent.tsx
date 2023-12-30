// Importing part
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import {ReactNode} from "react";

// Creating and exporting before footer component as default
export default function BeforeFooterComponent():ReactNode {
    // Returning JSX
    return (
        <section className="lg:mt-[128px] mt-[50px]">
            <div className="container p-[20px]">
                <div className="lg:w-[50%] lg:ml-[150px]">
                    <header className="lg:mb-[56px] mb-[24px] lg:block flex items-center justify-center flex-col">
                        <div className="sign">ارتباط با ما</div>
                        <h4 className={'relative lg:text-[48px] text-[20px] font-bold mb-[8px] lg:text-start text-center'}>
                            <span className={'inline-block ml-[1ch] text-dark'}>به راحتی با تیم ما</span>
                            <span className={'inline-block text-theme'}>ارتباط بگیر !</span>
                            <span className={'text-theme absolute right-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                                <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </h4>
                        <p className="paragraph lg:text-start text-center">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                        </p>
                    </header>
                    <main>
                        <div className="flex lg:flex-row flex-col lg:gap-[32px] gap-[24px] items-center flex-wrap lg:mb-[32px] mb-[24px]">
                            <Link className="flex lg:flex-row flex-col lg:gap-[16px] gap-[12px] items-center group" href='tel:0912999999999'>
                                <div className="border border-theme bg-white transition-all duration-500 shadow-none flex justify-center items-center text-theme w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-theme group-hover:text-white group-hover:shadow-lg">
                                    <IconComponent size={16} name="telephone" />
                                </div>
                                <span className="text-[20px] font-normal text-theme lg:text-start text-center">0912999999999</span>
                            </Link>
                            <Link className="flex lg:flex-row flex-col lg:gap-[16px] gap-[12px] items-center group" href='mailto:webimode@yahoo.com'>
                                <div className="border border-theme bg-white transition-all duration-500 shadow-none flex justify-center items-center text-theme w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-theme group-hover:text-white group-hover:shadow-lg">
                                    <IconComponent size={16} name="mail" />
                                </div>
                                <span className="text-[20px] font-normal text-theme lg:text-start text-center">webimode@yahoo.com</span>
                            </Link>
                        </div>
                        <div className="flex lg:flex-row flex-col lg:gap-[16px] gap-[12px] items-center group">
                            <div className="border border-theme bg-white transition-all duration-500 shadow-none flex justify-center items-center text-theme w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-theme group-hover:text-white group-hover:shadow-lg">
                                <IconComponent size={16} name="location" />
                            </div>
                            <p className="text-[20px] font-normal text-theme lg:text-start text-center">تهران ، میدان انقلاب ، کوچه سوم ، ساختمان الماس ، هلدینگ وبیمود ، طبقه سوم ، درب اول</p>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}