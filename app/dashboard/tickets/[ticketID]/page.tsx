// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ChangeEvent, Dispatch, MutableRefObject, ReactNode, useRef, useState} from "react";
import DashboardPageComponent from "@/component/dashboard/dashboardPageTemplate";
import ImageOfMrEhsan from '@/public/img/blog/img-ehsan.jpg';
import Image from "next/image";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";

// Creating and exporting ticket's chat page as default 
export default function DashboardTicketChatPage():ReactNode {
    // Defining states of component
    const [chats, setChats]:[Array<{sender: 'them' | 'you', date: Date, content: string} | null>, Dispatch<any>] = useState([
        {
            sender: 'them',
            date: new Date(),
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.'
        },{
            sender: 'you',
            date: new Date(),
            content: 'سلام خدمت شما ، امیدوارم حالتون خوب باشه'
        }
    ]);
    const [isInputFocused, setInputFocused]:[boolean, Dispatch<boolean>] = useState(false);
    const [isFetching, setFetching]:[boolean, Dispatch<boolean>] = useState(false);
    const [massageInInput, setMassageInInput]:[string, Dispatch<string>] = useState('');

    // Defining refrences to scrollable content
    const scrollableContentRef:MutableRefObject<any> = useRef()

    // Returning JSX
    return (
        <DashboardPageComponent>
           <div className="flex flex-col gap-[32px] lg:h-[990px] h-[1000px]">
                <div className="flex items-start justify-start ">
                    <div className="bg-lightestGrey w-full row-span-1 px-[16px] py-[20px] rounded-[16px] flex items-center justify-between gap-[20px]">
                        <div className="flex gap-[12px]">
                            <Image className="w-[48px] h-[48px] shrink-0 aspect-square rounded-[12px]" alt="عکسی پروفایل" width={48} height={48} src={ImageOfMrEhsan.src} />
                            <div className="w-full overflow-hidden">
                                <span className="block truncate mb-[6px] text-dark font-normal text-[15px]">بررسی تیکت مربطو به طراحی صفحه لندینگ پیج</span>
                                <div className="flex items-center gap-[8px] text-lightGrey w-full">
                                    <IconComponent size={12} name="calender-clock" />
                                    <p className="text-[11px] text-lightGrey font-normal truncate">
                                        {new Date().toLocaleDateString('fa-ir')}
                                        <span className="inline-block mx-[1ch]">/</span>
                                        {new Date().getMinutes().toLocaleString()}
                                        <span className="inline-block mx-[1ch]">:</span>
                                        {new Date().getHours().toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 border-r border-r-dark">
                            <Link href={'/dashboard/tickets'} className="p-[16px] flex items-center text-dark justify-center transition-all duration-500 hover:text-theme">
                                <IconComponent name="circle-x" size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div ref={scrollableContentRef} className="overflow-auto no-scroll flex flex-col gap-[40px] h-full">
                    {
                        (chats.length !== 0)
                            ? chats.map((item, index) => (
                                <div key={index} data-sender={item?.sender} className="data-[sender='them']:self-end data-[sender='you']:self-start">
                                    <div data-sender={item?.sender} className="mb-[12px] flex items-center gap-[8px] justify-start data-[sender='them']:text-theme data-[sender='you']:text-lightGrey">
                                        <span className="shrink-0"><IconComponent size={16} name="clock" /></span>
                                        <span className="text-[13px] font-normal truncate ml-[1ch]">{item?.date.toLocaleDateString('fa-ir')}</span>
                                        <span className="text-[13px] font-normal truncate">
                                            {item?.date.getHours().toLocaleString('fa-ir')}
                                            :
                                            {item?.date.getMinutes().toLocaleString('fa-ir')}
                                        </span>
                                    </div>
                                    <div data-sender={item?.sender} className="border-[1.5px] p-[16px] data-[sender='you']:bg-lightestGrey data-[sender='you']:border-lightGrey data-[sender='you']:rounded-l-[12px] data-[sender='you']:rounded-tr-[12px] data-[sender='them']:bg-theme data-[sender='them']:border-theme data-[sender='them']:rounded-r-[12px] data-[sender='them']:rounded-tl-[12px]">
                                        <p data-sender={item?.sender} className="lg:text-[16px] text-[13px] font-normal lg:leading-[36px] leading-[28px] data-[sender='you']:text-lightGrey data-[sender='them']:text-white">{item?.content}</p>
                                    </div>
                                </div>
                            )) : false
                    }
                </div>
                <div className="flex items-end justify-start">
                    <form
                        action="#"
                        data-focused={isInputFocused}
                        className="bg-lightestGrey row-span-1 border data-[focused='false']:border-lightGrey transition-all duration-500 data-[focused='true']:border-theme rounded-[12px] flex w-full items-center overflow-hidden"
                        dir="ltr"
                        onSubmit={(event) => {
                            // Preventing from sending form to url
                            event.preventDefault();

                            // A function that adds massage to state
                            async function addMassage() {
                                setChats(() => [...chats, {
                                    content: massageInInput,
                                    sender: 'you',
                                    date: new Date()
                                }, {
                                    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                                    sender: 'them',
                                    date: new Date()
                                }])
                            }

                            // A condition to see if massage in input exists
                            if (!massageInInput.startsWith(' ')) {
                                const scrollableContent: HTMLDivElement = scrollableContentRef.current;

                                // Runnung "assMassage" function and after that ...
                                addMassage()
                                    .then(() => {
                                        // Scrolling to bottom of the container
                                        scrollableContent.scrollBy({
                                            left: 0,
                                            top: scrollableContent.scrollHeight,
                                            behavior: 'smooth'
                                        })

                                        // Removing typef value of input
                                        setMassageInInput('');
                                    })
                            }
                        }}
                    >
                        <input
                            tabIndex={(isFetching) ? -1 : 0}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setMassageInInput(event.target.value)}
                            required
                            value={massageInInput}
                            onFocus={() => setInputFocused(true)}
                            onBlur={() => setInputFocused(false)}
                            placeholder="چیزی تایپ کنید ...."
                            type="text"
                            className="px-[16px] py-[12px] w-full bg-transparent text-[20px] font-normal outline-0 placeholder:text-lightGrey text-dark"
                        />
                        <button tabIndex={(isFetching) ? -1 : 0} className="p-[10px] shrink-0 aspect-square w-[50px] flex items-center justify-center">
                            <span className="rotate-180 text-lightGrey"><IconComponent size={24} name="send" /></span>
                        </button>
                    </form>
                </div>
           </div>
        </DashboardPageComponent>
    );
}