// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState, EventHandler} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import ChatDateComponent from "@/chunk/page/chat-gpt-app/chatDateComponent";
import ChatItemComponent from "@/chunk/page/chat-gpt-app/chatItemComponent";

// Defining type of props
interface propsType {
    isOpened?: boolean;
    closeFunction: EventHandler<any>;
}

// Creating and exporting left side component (in media querys) as default
export default function LeftSideMQComponent({isOpened, closeFunction}:propsType):ReactNode {
    // Defining states of component
    const [chats, setChats]:[Array<string | null>, Dispatch<any>] = useState([]);

    // Returning JSX
    return (
        <div data-opened={isOpened} className="lg:hidden bg-dark p-[20px] overflow-auto block fixed top-0 transition-all duration-500 left-0 w-full h-full z-[50] data-[opened='false']:opacity-0 data-[opened='false']:invisible data-[opened='true']:opacity-100 data-[opened='true']:visible">
            <button onClick={closeFunction} className="shadow-black mb-[32px] w-full bg-pageDark flex items-center justify-between gap-[10px] text-lighterGrey py-[16px] px-[12px] rounded-[12px]">
                <div className="flex items-center justify-start gap-[10px] w-[50%]">
                    <span className="shrink-0">
                        <IconComponent name="undo" size={16} />
                    </span>
                    <span className="shrink-0 font-normal text-[13px] truncate w-full block text-start">پیام جدید و تاریخچه</span>
                </div>
                <span className="shrink-0">
                    <IconComponent size={16} name="chevron-left" />
                </span>
            </button>
            <div>
                <div data-has-chats={(chats.length !== 0)} className="data-[has-chats='false']:flex data-[has-chats='false']:items-center data-[has-chats='false']:justify-center">
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
                <div className="flex items-center justify-end flex-col w-full">
                    <div className="h-[2px] bg-gradient-to-r from-transparent w-full to-transparent my-[24px] via-lightGrey" />
                    <Link href='/' className="btn-alert">
                        <IconComponent name="exit" size={16} />
                        <span>بازگشت به صفحه اصلی</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}