// Importing part 
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import AiModeComponent from "@/chunk/page/chat-gpt/aiModeComponent";
import RandomImage from '@/public/img/blog/img-random.png';
import TraiangleImage2 from '@/public/img/chat-gpt/shapes/img-traiangle-purple.svg';
import Image from "next/image";

// Creating and exporting second section of chat gpt page as default]
export default function SecondSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className="lg:pt-[120px] lg:pb-[156px] pb-[50px] pt-[30px] bg-dark relative">
            <Image className="absolute top-0 right-0 z-[1] lg:block hidden" alt="" width={269} height={269} src={TraiangleImage2.src} />
            <div className="container p-[20px] z-[2] relative">
                <header className="flex flex-col items-center justify-center relative z-[3] lg:mb-[48px] mb-[32px]">
                    <div className="sign-white">خدمات AI</div>
                    <h1 className="lg:text-[36px] text-[20px] text-white font-semibold relative text-center">
                        <span className="relative text-theme inline-block ml-[1ch]">
                            کامل ترین خدمات
                            <span className={'text-theme absolute left-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                                <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </span>
                        هوش مصنوعی با تیم وبمیود
                    </h1>
                </header>
                <main>
                    <div className="grid lg:grid-cols-2 gap-x-[20px] gap-y-[48px]">
                        <AiModeComponent icon="image" img={RandomImage.src} link="#" title="حالت Midjourney">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است .</AiModeComponent>
                        <AiModeComponent icon="question-chat" img={RandomImage.src} link="#" title="حالت GPT - 4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است .</AiModeComponent>
                        <AiModeComponent icon="chat" img={RandomImage.src} link="#" title="حالت Davinci">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است .</AiModeComponent>
                        <AiModeComponent icon="ai" img={RandomImage.src} link="#" title="حالت Babbage">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است .</AiModeComponent>
                    </div>
                </main>
            </div>
        </section>
    );
}