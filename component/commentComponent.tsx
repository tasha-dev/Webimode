// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining props type
interface propsType {
    name: string;
    rating: number;
    children: string;
    dislikeCount: number;
    likeCount: number;
    adminReply?: string;
}

// Creating and exporting comment component as default
export default function CommentComponent({children, dislikeCount, likeCount, name, rating, adminReply = ''}:propsType):ReactNode {
    // Defining states of component
    const [isCommentLiked, setCommentLiked]:[boolean, Dispatch<boolean>] = useState(false);
    const [isCommentDisliked, setCommentDisliked]:[boolean, Dispatch<boolean>] = useState(false);
    const [isCommentShowing, setCommentShowing]:[boolean, Dispatch<boolean>] = useState(false);

    // Returning JSX
    return (
        <div className='lg:p-[24px] p-[20px] lg:rounded-[32px] rounded-[20px] transition-all duration-500 border border-lightGrey hover:border-theme group'>
            <div className="flex items-center justify-between gap-[10px] mb-[8px]">
                <div className="flex items-center justify-between gap-[12px] w-full">
                    <div className="w-[33px] h-[33px] transition-all duration-500 aspect-square flex justify-center items-center bg-lighterGrey text-lightGrey group-hover:bg-theme group-hover:text-white rounded-r-[8px] rounded-tl-[8px] shadow-lightGrey">
                        <IconComponent size={18} name={'rounded-star'} />
                    </div>
                    <span className="truncate block text-dark text-[20px] font-normal w-full">{name}</span>
                </div>
                <div className="w-[33px] h-[33px] transition-all duration-500 shrink-0 aspect-square flex justify-center items-center bg-lighterGrey text-lightGrey group-hover:bg-theme group-hover:text-white rounded-l-[8px] rounded-tr-[8px] shadow-lightGrey text-[13px] font-bold">
                    {rating}
                </div>
            </div>
            <p className="text-lightGrey text-[13px] font-normal leading-[24px] mb-[16px]">{children}</p>
            <div className="flex justify-between items-center gap-[10px] flex-wrap">
                <button 
                    onClick={() => {
                        (isCommentShowing)
                            ? setCommentShowing(false)
                            : setCommentShowing(true)
                    }} 
                 
                    className="flex items-start transition-all duration-500 justify-between gap-[12px] text-lightGrey hover:text-theme"
                >
                    <span className="text-[13px] font-normal">ثبت پاسخ</span>    
                    <IconComponent name="chevron-left" size={16} />
                </button>
                <div className="flex items-center gap-[16px]">
                    <button 
                        onClick={() => {
                            setCommentDisliked(false);
                            (isCommentLiked)
                                ? setCommentLiked(false)
                                : setCommentLiked(true)
                        }} 
                        data-liked={isCommentLiked}                     
                        className="flex items-center gap-[8px] transition-all duration-500 text-lightGrey data-[liked='true']:text-theme"
                    >
                        {likeCount}
                        <IconComponent name="like" size={18} />
                    </button>
                    <button 
                        onClick={() => {
                            setCommentLiked(false);
                            (isCommentDisliked)
                                ? setCommentDisliked(false)
                                : setCommentDisliked(true)
                        }}  
                        data-disliked={isCommentDisliked}
                        className="flex items-center gap-[8px] transition-all duration-500 text-lightGrey data-[disliked='true']:text-red-600"
                    >
                        {dislikeCount}
                        <IconComponent name="dislike" size={18} />
                    </button>
                </div>
            </div>
            {
                (adminReply !== '')
                    ? (
                        <div className="mt-[16px]">
                            <div className="w-full h-[2px] bg-gradient-to-r from-transparent to-transparent transition-all duration-500 via-lightGrey group-hover:via-theme mb-[16px]" />
                            <div className="sign">پاسخ وبیمود</div>
                            <p className="transition-all duration-500 group-hover:text-theme text-lightGrey text-[13px] font-normal leading-[24px] mb-[16px]">
                                {adminReply}
                            </p>
                        </div>
                    ) : false
            }
            <div data-showing={isCommentShowing} className="transition-all duration-500 data-[showing='false']:hidden data-[showing='true']:block">
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent to-transparent transition-all duration-500 via-lightGrey group-hover:via-theme my-[16px]" />
                <form action={'#'} className="flex items-end gap-[20px] bg-lighterGrey border border-lightGrey rounded-[16px] overflow-hidden">
                    <textarea required name="comment" id="comment-input" placeholder="پاسخ خود را بنویسید" className="p-[12px] w-full bg-transparent h-[92px] outline-none resize-none placeholder:text-[13px] placeholder:text-lightGrey text-[13px] text-dark"/>
                    <button className="w-[28px] h-[28px] aspect-square rounded-[8px] m-[12px] bg-lightGrey text-gray-500 flex items-center justify-center transition-all duration-500 hover:bg-gray-500 hover:text-gray-700">
                        <IconComponent name="send" size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
}