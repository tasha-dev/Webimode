// Importing part
import {ReactNode} from "react";
import FeaturesComponent from "@/chunk/page/home/seventhSection/featuresComponent";

// Creating and exporting seventh section of home page as default
export default function SeventhSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <div className="container p-[20px]">
                <header>
                    <div className="sign">امنیت وبیمود</div>
                    <div>
                        <div>
                            <h4>
                                ما 
                                <span>امنیت پرداختی و سرویس</span>    
                            </h4>
                            <h4>
                                شما را تضمین میکنیم.
                            </h4>
                        </div>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان .</p>
                    </div>
                </header>
                <main>
                    <FeaturesComponent icon="shield-check" isActive={true} position="top" title="خرید امن با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                    <FeaturesComponent icon="hand-holding-dollor" isActive={true} position="top" title="مرکز حل اختلافات با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                    <FeaturesComponent icon="shaking-hands" isActive={true} position="top" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                    <FeaturesComponent icon="shaking-hands" isActive={true} position="top" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                    <FeaturesComponent icon="hand-holding-dollor" isActive={true} position="top" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                    <FeaturesComponent icon="shaking-hands" isActive={true} position="top" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                </main>
            </div>
        </section>
    );
}