// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import StepComponent from "@/chunk/page/create/thirdSection/stepComponet";
import WebsiteSubjectComponent from "@/chunk/page/create/thirdSection/websiteSubjectComponent";

// Creating and exporting third section of create page as default
export default function ThirdSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <div className="container p-[20px]">
                <main>
                    <div>
                        <div className="sign">سفارش سایت</div>
                        <h3>
                            در
                            <span>
                                کوتاه ترین زمان
                                <span className={'text-dark absolute left-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                                    <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                    <span className={'self-start'}><IconComponent name={'star'} size={14} /></span>
                                    <span className={'self-end'}><IconComponent name={'star'} size={18} /></span>
                                </span>
                            </span>
                            ممکن سایت خود را سفارش دهید
                        </h3>
                        <p>در اینجا می توانید در کوئتاه ترین زمان ممکن سایت رویا هاتون رو با تمام جزییات به راحتی و سریع سفارش دهید .</p>
                        <div>
                            <div>
                                <div />
                                <StepComponent icon="rounded-star" index={1} link="#" progress="in-progress" title="موضوع سایت" />
                                <StepComponent icon="browser" index={2} link="#" progress="waiting" title="نوع سایت" />
                                <StepComponent icon="file" index={3} link="#" progress="waiting" title="تعدا صفحات سایت" />
                                <StepComponent icon="calender-clock" index={4} link="#" progress="waiting" title="مدت زمان طراحی" />
                            </div>
                            <div>
                                <div />
                                <StepComponent icon="dollor-circle" index={5} link="#" progress="waiting" title="بودجه تخمینی" />
                                <StepComponent icon="poll" index={6} link="#" progress="waiting" title="توضیحات تکمیلی" />
                                <StepComponent icon="globe" index={7} link="#" progress="waiting" title="سایت های مشابه" />
                                <StepComponent icon="list" index={8} link="#" progress="waiting" title="گزینه تکمیلی" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="notebook-divider" />
                        <div className="notebook-divider" />
                        <div className="notebook-divider" />
                        <div className="notebook-divider" />
                        <div className="notebook-divider" />
                        <div className="notebook-divider" />
                        <div className="notebook-divider" />
                        <div className="notebook-divider" />
                        <div className="notebook-divider" />
                    </div>
                    <div>
                        <h3>موضوع سایت خود را انتخاب کنید</h3>
                        <div>
                            <WebsiteSubjectComponent icon="house-buliding" isSelected={false} title="طراحی سایت شرکتی" />
                            <WebsiteSubjectComponent icon="shop" isSelected={true} title="طراحی سایت فروشگاهی" />
                            <WebsiteSubjectComponent icon="file" isSelected={false} title="طراحی سایت خبری" />
                            <WebsiteSubjectComponent icon="person" isSelected={false} title="طراحی سایت شخصی" />
                            <WebsiteSubjectComponent icon="wp" isSelected={false} title="نصب افزونه و پلاگین" />
                            <WebsiteSubjectComponent icon="browser" isSelected={false} title="طراحی قالب سایت" />
                            <WebsiteSubjectComponent icon="shield-check" isSelected={false} title="امنیت و عملکرد" />
                            <WebsiteSubjectComponent icon="ban-bug" isSelected={false} title="رفع باگ" />
                            <WebsiteSubjectComponent icon="cloud-upload" isSelected={false} title="بکاپ گیری و انتقال اطلاعات" />
                            <WebsiteSubjectComponent icon="addsign" isSelected={false} title="خرید راه اندازی قالب سایت" />
                        </div>
                        <div>
                            <button className="btn-secondary-white">
                                <IconComponent name="chevron-right" size={16} />
                                مرحله قبل
                            </button>
                            <button className="btn-primary">
                                مرحله بعد
                                <IconComponent name="chevron-left" size={16} />
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}