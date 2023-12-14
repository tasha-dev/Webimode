// Importing part
import {EventHandler, ReactNode} from "react";
import WebsiteSubjectComponent from "@/chunk/requestComponent/websiteSubjectComponent";
import InputComponent from "@/chunk/requestComponent/inputComponent";

// Defining type of props
interface propsType {
    step: number;
    activeSubject: string;
    activeType: string;
    activePageCount: string;
    activeDate: number;
    activeEstimatedMoney: string;
    relatedWebsites: Array<string>;
    activeAditional: Array<string>;
    setActiveSubject: EventHandler<any>;
    setActiveType: EventHandler<any>;
    setActivePageCount: EventHandler<any>;
    setActiveDate: EventHandler<any>;
    setActiveEstimatedMoney: EventHandler<any>;
    setTextAreaDetails: EventHandler<any>;
    setRelatedWebsites: EventHandler<any>;
    setActiveAditional: EventHandler<any>;
}

// Creating and exporting step component as default
export default function StepComponent({ 
    step,
    activeSubject,
    setActiveSubject,
    activeType,
    setActiveType,
    activePageCount,
    setActivePageCount ,
    activeDate,
    setActiveDate,
    activeEstimatedMoney,
    setActiveEstimatedMoney,
    setTextAreaDetails,
    relatedWebsites,
    setRelatedWebsites,
    setActiveAditional,
    activeAditional
}:propsType):ReactNode {
    // Conditional rendering
    if (step === 1) {
        return (
            <div className="mb-[32px]">
                <h3 className="text-center lg:text-[32px] text-[20px] font-normal mb-[40px] text-white">موضوع سایت خود را انتخاب کنید</h3>
                <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-[20px] gap-[32px]">
                    <WebsiteSubjectComponent onClick={() => setActiveSubject("طراحی سایت شرکتی")} icon="house-buliding" isSelected={(activeSubject === "طراحی سایت شرکتی")} title="طراحی سایت شرکتی" />
                    <WebsiteSubjectComponent onClick={() => setActiveSubject("طراحی سایت فروشگاهی")} icon="shop" isSelected={(activeSubject === "طراحی سایت فروشگاهی")} title="طراحی سایت فروشگاهی" />
                    <WebsiteSubjectComponent onClick={() => setActiveSubject("طراحی سایت خبری")} icon="file" isSelected={(activeSubject === "طراحی سایت خبری")} title="طراحی سایت خبری" />
                    <WebsiteSubjectComponent onClick={() => setActiveSubject("طراحی سایت شخصی")} icon="person" isSelected={(activeSubject === "طراحی سایت شخصی")} title="طراحی سایت شخصی" />
                    <WebsiteSubjectComponent onClick={() => setActiveSubject("نصب افزونه و پلاگین")} icon="wp" isSelected={(activeSubject === "نصب افزونه و پلاگین")} title="نصب افزونه و پلاگین" />
                    <WebsiteSubjectComponent onClick={() => setActiveSubject("طراحی قالب سایت")} icon="browser" isSelected={(activeSubject === "طراحی قالب سایت")} title="طراحی قالب سایت" />
                    <WebsiteSubjectComponent onClick={() => setActiveSubject("امنیت و عملکرد")} icon="shield-check" isSelected={(activeSubject === "امنیت و عملکرد")} title="امنیت و عملکرد" />
                    <WebsiteSubjectComponent onClick={() => setActiveSubject("رفع باگ")} icon="ban-bug" isSelected={(activeSubject === "رفع باگ")} title="رفع باگ" />
                    <WebsiteSubjectComponent onClick={() => setActiveSubject("بکاپ گیری و انتقال اطلاعات")} icon="cloud-upload" isSelected={(activeSubject === "بکاپ گیری و انتقال اطلاعات")} title="بکاپ گیری و انتقال اطلاعات" />
                    <WebsiteSubjectComponent onClick={() => setActiveSubject("خرید راه اندازی قالب سایت")} icon="addsign" isSelected={(activeSubject === "خرید راه اندازی قالب سایت")} title="خرید راه اندازی قالب سایت" />
                </div>
            </div>
        );
    } else if (step === 2) {
        return (
            <div className="mb-[32px]">
                <h3 className="text-center lg:text-[32px] text-[20px] font-normal mb-[40px] text-white">نوع سایت خود را انتخاب کنید</h3>
                <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-[20px] gap-[32px]">
                    <WebsiteSubjectComponent onClick={() => setActiveType("طراحی سایت آماده")} icon="" isSelected={(activeType === "طراحی سایت آماده")} title="طراحی سایت آماده" />
                    <WebsiteSubjectComponent onClick={() => setActiveType("طراحی سایت تخصصی")} icon="" isSelected={(activeType === "طراحی سایت تخصصی")} title="طراحی سایت تخصصی" />
                </div>
            </div>
        );
    } else if (step === 3) {
        return (
            <div className="mb-[32px]">
                <h3 className="text-center lg:text-[32px] text-[20px] font-normal mb-[40px] text-white">تعداد صفحات سایت خود را انتخاب کنید</h3>
                <div className="grid lg:grid-cols-6 grid-cols-1 lg:gap-[20px] gap-[32px]">
                    <WebsiteSubjectComponent onClick={() => setActivePageCount('1')} icon="" isSelected={(activePageCount === '1')} title="سایت تک صفحه ای" />
                    <WebsiteSubjectComponent onClick={() => setActivePageCount('2 and 5')} icon="" isSelected={(activePageCount === '2 and 5')} title="بین 2 تا 5 صفحه" />
                    <WebsiteSubjectComponent onClick={() => setActivePageCount('10 and 15')} icon="" isSelected={(activePageCount === '10 and 15')} title="بین 10 تا 15 صفحه" />
                    <WebsiteSubjectComponent onClick={() => setActivePageCount('15 and 20')} icon="" isSelected={(activePageCount === '15 and 20')} title="بین 15 تا 20 صفحه" />
                    <WebsiteSubjectComponent onClick={() => setActivePageCount('20 and 25')} icon="" isSelected={(activePageCount === '20 and 25')} title="بین 20 تا 25 صفحه" />
                    <WebsiteSubjectComponent onClick={() => setActivePageCount('25 and 30')} icon="" isSelected={(activePageCount === '25 and 30')} title="بین 25 تا 30 صفحه" />
                </div>
            </div>
        );
    } else if (step === 4) {
        return (
            <div className="mb-[32px]">
                <h3 className="text-center lg:text-[32px] text-[20px] font-normal mb-[40px] text-white">مدت زمان طراحی سایت خود را انتخاب کنید</h3>
                <div className="grid lg:grid-cols-6 grid-cols-1 lg:gap-[20px] gap-[32px]">
                    <WebsiteSubjectComponent onClick={() => setActiveDate(5)} icon="" isSelected={(activeDate === 5)} title="حدودا 5 روز" />
                    <WebsiteSubjectComponent onClick={() => setActiveDate(10)} icon="" isSelected={(activeDate === 10)} title="حدودا 10 روز" />
                    <WebsiteSubjectComponent onClick={() => setActiveDate(20)} icon="" isSelected={(activeDate === 20)} title="حدودا 20 روز" />
                    <WebsiteSubjectComponent onClick={() => setActiveDate(25)} icon="" isSelected={(activeDate === 25)} title="حدودا 25 روز" />
                    <WebsiteSubjectComponent onClick={() => setActiveDate(60)} icon="" isSelected={(activeDate === 60)} title="حدودا 2 ماه" />
                    <WebsiteSubjectComponent onClick={() => setActiveDate(90)} icon="" isSelected={(activeDate === 90)} title="حدودا 3 ماه" />
                </div>
            </div>
        );
    } else if (step === 5) {
        return (
            <div className="mb-[32px]">
                <h3 className="text-center lg:text-[32px] text-[20px] font-normal mb-[40px] text-white">بودجه تخمینی طراحی سایت خود را انتخاب کنید</h3>
                <div className="grid lg:grid-cols-6 grid-cols-1 lg:gap-[20px] gap-[32px]">
                    <WebsiteSubjectComponent onClick={() => setActiveEstimatedMoney('100 and 700')} icon="" isSelected={(activeEstimatedMoney ==='100 and 700')} title="100 تا 700 هزار تومن" />
                    <WebsiteSubjectComponent onClick={() => setActiveEstimatedMoney('1 and 3')} icon="" isSelected={(activeEstimatedMoney === '1 and 3')} title="1 تا 3 میلیون تومن" />
                    <WebsiteSubjectComponent onClick={() => setActiveEstimatedMoney('3 and 6')} icon="" isSelected={(activeEstimatedMoney === '3 and 6')} title="3 تا 6 میلیون تومن" />
                    <WebsiteSubjectComponent onClick={() => setActiveEstimatedMoney('6 and 9')} icon="" isSelected={(activeEstimatedMoney === '6 and 9')} title="6 تا 9 میلیون تومن" />
                    <WebsiteSubjectComponent onClick={() => setActiveEstimatedMoney('9 and 12')} icon="" isSelected={(activeEstimatedMoney === '9 and 12')} title="9 تا 12 میلیون تومن" />
                    <WebsiteSubjectComponent onClick={() => setActiveEstimatedMoney('12 and 15')} icon="" isSelected={(activeEstimatedMoney === '12 and 15')} title="12 تا 15 میلیون تومن" />
                </div>
            </div>
        );
    } else if (step === 6) {
        return (
            <div className="mb-[32px]">
                <h3 className="text-center lg:text-[32px] text-[20px] font-normal mb-[40px] text-white">توضیحات تکمیلی سایت خود را وارد کنید</h3>
                <textarea 
                    onChange={(event) => setTextAreaDetails(event.target.value)} 
                    name="more-datils" 
                    id="more-datils-textearea" 
                    placeholder="کمی بیشتر درباره خواسته خود در مورد طراحی سایت خود توضیح دهید" 
                    className="text-[16px] h-[156px] border text-white border-white outline-0 rounded-[16px] font-normal text-whited bg-transparent w-full block p-[20px] placeholder:text-white placeholder:text-[16px] transiton-all duration-500 focus:bg-white focus:text-theme focus:placeholder:text-theme"
                />
            </div>
        );
    } else if (step === 7) {
        return (
            <div className="mb-[32px]">
                <h3 className="text-center lg:text-[32px] text-[20px] font-normal mb-[40px] text-white">سایت های مشابهی که به طراحی کمک می کند را وارد کنید</h3>
                <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-[20px] gap-[32px]">
                    <InputComponent isEditable onSubmit={(event) => {
                            event.preventDefault();

                            const valueOfInput:string = event.target[0].value;
                            const urlRegExp:RegExp = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);

                            if (!valueOfInput.startsWith(" ") && valueOfInput.match(urlRegExp)) {
                                setRelatedWebsites(() => [...relatedWebsites, valueOfInput])
                            }
                        }} 
                    />
                    {
                        (relatedWebsites.length !== 0)
                            ? relatedWebsites.map((item:string, index:number) => (
                                <InputComponent key={index} deleteFunction={() => setRelatedWebsites(relatedWebsites.filter(item2 => item2 !== item))}>
                                    {item}
                                </InputComponent>
                            )) : false
                    }
                </div>
            </div>
        );
    } else if (step === 8) {
        return (
            <div className="mb-[32px]">
                <h3 className="text-center lg:text-[32px] text-[20px] font-normal mb-[40px] text-white">گزینه تکمیلی تکمیلی سایت خود را وارد کنید</h3>
                <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-[20px] gap-[32px]">
                    <WebsiteSubjectComponent onClick={() => {
                        (activeAditional.includes('cms'))
                            ? setActiveAditional(() => activeAditional.filter(item => item !== 'cms'))
                            : setActiveAditional(() => [...activeAditional, 'cms']);
                    }} icon="" isSelected={activeAditional.includes('cms')} title="سیستم مدیریت محتوا" hasSwitch />
                    <WebsiteSubjectComponent onClick={() => {
                        (activeAditional.includes('multiple-lang'))
                            ? setActiveAditional(() => activeAditional.filter(item => item !== 'multiple-lang'))
                            : setActiveAditional(() => [...activeAditional, 'multiple-lang']);
                    }} icon="" isSelected={activeAditional.includes('multiple-lang')} title="امکان چند زبانه شدن" hasSwitch />
                    <WebsiteSubjectComponent onClick={() => {
                        (activeAditional.includes('with-blog'))
                            ? setActiveAditional(() => activeAditional.filter(item => item !== 'with-blog'))
                            : setActiveAditional(() => [...activeAditional, 'with-blog']);
                    }} icon="" isSelected={activeAditional.includes('with-blog')} title="بلاگ داشته باشد" hasSwitch />
                    <WebsiteSubjectComponent onClick={() => {
                        (activeAditional.includes('seo'))
                            ? setActiveAditional(() => activeAditional.filter(item => item !== 'seo'))
                            : setActiveAditional(() => [...activeAditional, 'seo']);
                    }} icon="" isSelected={activeAditional.includes('seo')} title="بهینه سازی سئو وب سایت" hasSwitch />
                </div>
            </div>
        );
    }
}