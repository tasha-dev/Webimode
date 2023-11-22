// Importing part
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import {ReactNode} from "react";

// Creating and exporting eleventh section of home page as default
export default function EleventhSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <div className="container p-[20px] w-[50%]">
                <header>
                    <div className="sign">ارتباط با ما</div>
                    <h4 className={'relative lg:text-[48px] text-[20px] font-bold mb-[8px] text-center'}>
                        <span className={'inline-block ml-[1ch] text-dark'}>به راحتی با تیم ما</span>
                        <span className={'inline-block text-theme'}>ارتباط بگیر !</span>
                        <span className={'text-theme absolute right-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                            <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                        </span>
                    </h4>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .</p>
                </header>
                <main>
                    <div>
                        <Link href='tel:0912999999999'>
                            <div><IconComponent size={16} name="telephone" /></div>
                            0912999999999
                        </Link>
                        <Link href='mailto:webimode@yahoo.com'>
                            <div><IconComponent size={16} name="mail" /></div>
                            webimode@yahoo.com
                        </Link>
                    </div>
                    <div>
                        <div><IconComponent size={16} name="location" /></div>
                        <p>تهران ، میدان انقلاب ، کوچه سوم ، ساختمان الماس ، هلدینگ وبیمود ، طبقه سوم ، درب اول</p>
                    </div>
                </main>
            </div>
        </section>
    );
}