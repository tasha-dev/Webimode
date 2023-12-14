// Importing part
import {EventHandler, ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import ProfileComponent from "@/chunk/page/chat-gpt-app/profileComponent";
import ImageOfMrEhsan from '@/public/img/blog/img-ehsan.jpg';
import CostComponent from "@/chunk/page/chat-gpt-app/costComponent";

// Defining type of props
interface propsType {
    isOpened?: boolean;
    closeFunction: EventHandler<any>;
}

// Creating and exporting right side component (in media querys) as default
export default function RightSideMQComponent({isOpened, closeFunction}:propsType):ReactNode {
    // Returning JSX
    return (
        <div data-opened={isOpened} className="lg:hidden bg-dark p-[20px] overflow-auto block fixed top-0 transition-all duration-500 left-0 w-full h-full z-[50] data-[opened='false']:opacity-0 data-[opened='false']:invisible data-[opened='true']:opacity-100 data-[opened='true']:visible">
            <button onClick={closeFunction} className="shadow-black mb-[32px] w-full bg-pageDark flex items-center justify-between gap-[10px] text-lighterGrey py-[16px] px-[12px] rounded-[12px]">
                <div className="flex items-center justify-start gap-[10px] w-[50%]">
                    <span className="shrink-0">
                        <IconComponent name="person" size={16} />
                    </span>
                    <span className="shrink-0 font-normal text-[13px] truncate w-full block text-start">اطلاعات کاربر</span>
                </div>
                <span className="shrink-0">
                    <IconComponent size={16} name="chevron-left" />
                </span>
            </button>
            <div>
                <div>
                    <div className="chat-tag">اطاعات شخصی و اعتبار</div>
                    <ProfileComponent cash={2.500} img={ImageOfMrEhsan.src} name="احسان امانیان" />
                </div>
                <div className="h-[2px] bg-gradient-to-r from-transparent to-transparent my-[24px] via-lightGrey" />
                <div>
                    <div className="chat-tag">توضیحات اختصاصی</div>
                    <p className="paragraph-small">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
                </div>
                <div className="h-[2px] bg-gradient-to-r from-transparent to-transparent my-[24px] via-lightGrey" />
                <div>
                    <div className="chat-tag">هزینه های امکانات</div>
                    <ul className="flex flex-col gap-[24px]">
                        <CostComponent price={1} step={1000} title="حالت davinci" total={1300} />
                        <CostComponent price={1} step={1000} title="حالت babbage" total={1300} />
                        <CostComponent price={1} step={1000} title="حالت GPT4 send" total={1300} />
                        <CostComponent price={1} step={1000} title="حالت GPT4 receive" total={1300} />
                    </ul>
                </div>
            </div>
        </div>
    );
}