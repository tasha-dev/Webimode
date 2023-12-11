// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting middle side of chat gpt app page as default
export default function MiddleSideComponent():ReactNode {
    // Returning JSX
    return (
        <div className="col-span-3 bg-dark h-[100vh] grid grid-cols-1 grid-rows-6">
            <div className="overflow-x-auto overflow-y-hidden flex gap-[24px] items-center justify-center row-span-1 p-[32px]">
                <button data-active={true} className="chat-ai-btn">babbage</button>
                <button data-active={false} className="chat-ai-btn">davinci</button>
                <button data-active={false} className="chat-ai-btn">GPT4</button>
                <button data-active={false} className="chat-ai-btn">midjourny</button>
            </div>
            <div className="flex items-center justify-center col-span-1 row-span-4 overflow-x-hidden overflow-y-auto p-[32px]">
                <div className="p-[24px] w-[75%] shadow-black border border-lightestDark bg-pageDark rounded-[40px]">
                    <div className="flex w-[50%] items-center mx-auto p-[16px] bg-white/20 rounded-[12px] justify-between gap-[10px] shadow-black mb-[32px]">
                        <span className="text-lightGrey shrink-0"><IconComponent name="circle-warn" size={16} /></span>
                        <span className="text-lightGrey block truncate text-[20px] font-normal">توجه داشته باشید</span>
                        <span className="text-lightGrey shrink-0"><IconComponent name="circle-warn" size={16} /></span>
                    </div>
                    <ul className="list-disc flex flex-col gap-[24px] w-[75%] mx-auto">
                        <li className="text-lightGrey">
                            <span className="text-[16px] font-normal truncate block">هزینه هر درخواست تولید عکس ( تولید 4 عکس ) 2000 تومان می باشد</span>
                        </li>
                        <li className="text-lightGrey">
                            <span className="text-[16px] font-normal truncate block">هزینه درخواست هر variation یا upscale برابر با 2000 تومان می باشد</span>
                        </li>
                        <li className="text-lightGrey">
                            <span className="text-[16px] font-normal truncate block">میانگین زمان تولید یا تغییر عکس حدود 5 دقیقه خواهد بود</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-span-1 row-span-1 p-[32px]">
                <form action="#" className="bg-pageDark border border-lightestDark rounded-[12px] shadow-black flex items-center overflow-hidden" dir="ltr">
                    <input placeholder="چیزی تایپ کنید ...." type="text" className="px-[16px] py-[12px] w-full bg-transparent text-[20px] font-normal outline-0 placeholder:text-white/50 text-white" />
                    <button className="p-[10px] shrink-0 aspect-square w-[50px] flex items-center justify-center">
                        <span className="rotate-180 text-lightGrey"><IconComponent size={24} name="send" /></span>
                    </button>
                </form>
            </div>
        </div>
    );
}

