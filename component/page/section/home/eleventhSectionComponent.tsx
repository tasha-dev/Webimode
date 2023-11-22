// Importing part
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import {ReactNode} from "react";

// Creating and exporting eleventh section of home page as default
export default function EleventhSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className="mt-[196px] w-[50%] ml-[150px]">
            <div className="container p-[20px]">
                <header className="mb-[56px]">
                    <div className="sign">ارتباط با ما</div>
                    <h4 className={'relative lg:text-[48px] text-[20px] font-bold mb-[8px] text-start'}>
                        <span className={'inline-block ml-[1ch] text-dark'}>به راحتی با تیم ما</span>
                        <span className={'inline-block text-theme'}>ارتباط بگیر !</span>
                        <span className={'text-theme absolute right-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                            <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                        </span>
                    </h4>
                    <p className="text-lightGrey font-normal text-[20px] leading-[36px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .</p>
                </header>
                <main>
                    <div className="flex gap-[32px] items-center flex-wrap mb-[32px]">
                        <Link className="flex gap-[16px] items-center group" href='tel:0912999999999'>
                            <div className="border border-theme bg-white transition-all duration-500 flex justify-center items-center text-theme w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-theme group-hover:text-white">
                                <IconComponent size={16} name="telephone" />
                                </div>
                            <span className="text-[20px] font-normal text-theme">0912999999999</span>
                        </Link>
                        <Link className="flex gap-[16px] items-center group" href='mailto:webimode@yahoo.com'>
                            <div className="border border-theme bg-white transition-all duration-500 flex justify-center items-center text-theme w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-theme group-hover:text-white">
                                <IconComponent size={16} name="mail" />
                                </div>
                            <span className="text-[20px] font-normal text-theme">webimode@yahoo.com</span>
                        </Link>
                    </div>
                    <div className="flex gap-[16px] items-center group">
                        <div className="border border-theme bg-white transition-all duration-500 flex justify-center items-center text-theme w-[56px] h-[56px] aspect-square rounded-full group-hover:bg-theme group-hover:text-white">
                            <IconComponent size={16} name="location" />
                        </div>
                        <p className="text-[20px] font-normal text-theme">تهران ، میدان انقلاب ، کوچه سوم ، ساختمان الماس ، هلدینگ وبیمود ، طبقه سوم ، درب اول</p>
                    </div>
                </main>
            </div>
        </section>
    );
}