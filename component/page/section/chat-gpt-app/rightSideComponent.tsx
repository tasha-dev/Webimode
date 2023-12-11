// Importing part
import {ReactNode} from "react";
import ProfileComponent from "@/chunk/page/chat-gpt-app/profileComponent";
import ImageOfMrEhsan from '@/public/img/blog/img-ehsan.jpg';
import CostComponent from "@/chunk/page/chat-gpt-app/costComponent";

// Creating and exporting right side of chat gpt app as default
export default function RightSideComponent():ReactNode {
    // Returning JSX
    return (
        <div className="col-span-1 bg-pageDark overflow-auto p-[32px]">
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
                <ul>
                    <CostComponent price={1} step={1000} title="حالت davinci" total={1300} />
                    <CostComponent price={1} step={1000} title="حالت babbage" total={1300} />
                    <CostComponent price={1} step={1000} title="حالت GPT4 send" total={1300} />
                    <CostComponent price={1} step={1000} title="حالت GPT4 receive" total={1300} />
                </ul>
            </div>
        </div>
    );
}