// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import ChatDateComponent from "@/chunk/page/chat-gpt-app/chatDateComponent";
import ChatItemComponent from "@/chunk/page/chat-gpt-app/chatItemComponent";

// Creating and exporting left side of chat gpt app page as default
export default function LeftSideComponent():ReactNode {
    // Defining states of component
    const [chats, setChats]:[Array<string | null>, Dispatch<any>] = useState([]);

    // Returning JSX
    return (
        <div className="bg-pageDark lg:block hidden h-[100vh]">
            <div data-has-chats={(chats.length !== 0)} className="p-[20px] overflow-auto no-scroll h-[80vh] data-[has-chats='false']:flex data-[has-chats='false']:items-center data-[has-chats='false']:justify-center">
                {
                    (chats.length !== 0)
                        ? (
                            <>
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
                            </>
                        ) : <span className="text-center text-[16px] font-normal text-lightGrey block">تاریخچه شما خالی است</span>
                }
            </div>
            <div className="p-[20px] flex items-center justify-end flex-col w-full h-[20vh]">
                <div className="h-[2px] bg-gradient-to-r from-transparent w-full to-transparent mb-[24px] via-lightGrey" />
                <Link href='/' className="btn-alert">
                    <IconComponent name="exit" size={16} />
                    <span>بازگشت به صفحه اصلی</span>
                </Link>
            </div>
        </div>
    );
}