// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import ChatDateComponent from "@/chunk/page/chat-gpt-app/chatDateComponent";
import ChatItemComponent from "@/chunk/page/chat-gpt-app/chatItemComponent";

// Creating and exporting left side of chat gpt app page as default
export default function LeftSideComponent():ReactNode {
    // Returning JSX
    return (
        <div className="col-span-1 bg-pageDark overflow-auto no-scroll">
            <div className="p-[20px] no-scroll">
                <div className="chat-tag">
                    <IconComponent size={16} name="chat" />
                    ایجاد پیام جدید
                </div>
                <div className="mb-[24px]">
                    <ChatDateComponent date={new Date()} />
                    <ul className="flex flex-col gap-[16px]">
                        <ChatItemComponent link="#">لورم ایپسوم متن ساختگی با تولید ....</ChatItemComponent>
                        <ChatItemComponent link="#">لورم ایپسوم متن ساختگی با تولید ....</ChatItemComponent>
                        <ChatItemComponent link="#">لورم ایپسوم متن ساختگی با تولید ....</ChatItemComponent>
                        <ChatItemComponent link="#">لورم ایپسوم متن ساختگی با تولید ....</ChatItemComponent>
                    </ul>
                </div>
                <div>
                    <ChatDateComponent date={new Date()} />
                    <ul className="flex flex-col gap-[16px]">
                        <ChatItemComponent link="#">لورم ایپسوم متن ساختگی با تولید ....</ChatItemComponent>
                        <ChatItemComponent link="#">لورم ایپسوم متن ساختگی با تولید ....</ChatItemComponent>
                        <ChatItemComponent link="#">لورم ایپسوم متن ساختگی با تولید ....</ChatItemComponent>
                        <ChatItemComponent link="#">لورم ایپسوم متن ساختگی با تولید ....</ChatItemComponent>
                    </ul>
                </div>
            </div>
            <div className="p-[20px] flex items-center justify-end flex-col w-full">
                <div className="h-[2px] bg-gradient-to-r from-transparent w-full to-transparent mb-[24px] via-lightGrey" />
                <Link href='/' className="btn-alert">
                    <IconComponent name="exit" size={16} />
                    <span>بازگشت به صفحه اصلی</span>
                </Link>
            </div>
        </div>
    );
}