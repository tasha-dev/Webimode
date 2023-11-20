// Importing part
import {ReactNode} from "react";
import FeaturesComponent from "@/chunk/page/home/seventhSection/featuresComponent";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting seventh section of home page as default
export default function SeventhSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <div className="container p-[20px]">
                <header className="mb-[100px]">
                    <div className="sign">امنیت وبیمود</div>
                    <div className="flex items-center justify-between gap-[100px]">
                        <div>
                            <h4 className="text-[48px] block text-dark font-normal whitespace-nowrap relative">
                                ما 
                                <span className="text-theme mr-[1ch] font-bold">امنیت پرداختی و سرویس</span>    
                                <span className={'text-theme absolute right-[102%] bottom-full flex flex-col w-[30px]'}>
                                    <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                    <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                    <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                                </span>
                            </h4>
                            <h4 className="text-[48px] whitespace-nowrap block text-dark font-normal">شما را تضمین میکنیم.</h4>
                        </div>
                        <p className="text-[20px] text-lightGrey font-normal leading-[36px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان .</p>
                    </div>
                </header>
                <main className="grid grid-cols-6 gap-[20px]">
                    <FeaturesComponent icon="shield-check" isActive={true} isGoingToBeActive={false} position="top" title="خرید امن با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                    <FeaturesComponent icon="hand-holding-dollor" isActive={true} isGoingToBeActive={true} position="bottom" title="مرکز حل اختلافات با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                    <FeaturesComponent icon="shaking-hands" isActive={false} isGoingToBeActive={false} position="top" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                    <FeaturesComponent icon="shaking-hands" isActive={false} isGoingToBeActive={false} position="bottom" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                    <FeaturesComponent icon="hand-holding-dollor" isActive={false} isGoingToBeActive={false} position="top" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                    <FeaturesComponent isLastOfType icon="shaking-hands" isActive={false} isGoingToBeActive={false} position="bottom" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                </main>
            </div>
        </section>
    );
}