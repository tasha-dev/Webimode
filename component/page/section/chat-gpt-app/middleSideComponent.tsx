// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ChangeEvent, Dispatch, EventHandler, MutableRefObject, ReactNode, useRef, useState} from "react";
import IconComponent from "@/chunk/iconComponent";
import LoadingComponent from "@/chunk/loadingComponent";
import SelectImageComponent from '@/chunk/page/chat-gpt-app/selectImageComponent';
import RandomImage from '@/public/img/blog/img-random.png';

// Creating and exporting middle side of chat gpt app page as default
export default function MiddleSideComponent():ReactNode {
    // Defining states of component
    const [activeAi, setActiveAi]:[string, Dispatch<string>] = useState('babbage');
    const [isInputFocused, setInputFocused]:[boolean, Dispatch<boolean>] = useState(false)
    const [massageInInput, setMassageInInput]:[string, Dispatch<string>] = useState('');
    const [massages, setMassages]:[Array<{txt: string, sender: 'you'|'bot', date: Date} | null>, Dispatch<any>] = useState([]);
    const [isFetching, setFetching]:[boolean, Dispatch<boolean>] = useState(false);

    // Defininig refrence to middle side section
    const middleSideRef:MutableRefObject<any> = useRef();

    // Returning JSX
    return (
        <div className="lg:col-span-3 bg-dark lg:h-screen h-auto relative lg:w-auto w-screen">
            <div data-fetching={isFetching} className="absolute top-0 left-0 transition-all duration-500 w-full h-full flex items-center justify-center bg-dark/90 z-[2] data-[fetching='false']:opacity-0 data-[fetching='false']:pointer-events-none">
                <LoadingComponent />
            </div>
            <div className="overflow-x-auto overflow-y-hidden flex gap-[24px] items-center lg:justify-center justify-start lg:h-[20vh] p-[20px] no-scroll w-full">
                <button tabIndex={(isFetching) ? -1 : 0} onClick={() => setActiveAi('babbage')} data-active={(activeAi === 'babbage')} className="chat-ai-btn">babbage</button>
                <button tabIndex={(isFetching) ? -1 : 0} onClick={() => setActiveAi('davinci')} data-active={(activeAi === 'davinci')} className="chat-ai-btn">davinci</button>
                <button tabIndex={(isFetching) ? -1 : 0} onClick={() => setActiveAi('GPT4')} data-active={(activeAi === 'GPT4')} className="chat-ai-btn">GPT4</button>
                <button tabIndex={(isFetching) ? -1 : 0} onClick={() => setActiveAi('midjourny')} data-active={(activeAi === 'midjourny')} className="chat-ai-btn">midjourny</button>
            </div>
            <div ref={middleSideRef} data-has-massage={(massages.length !== 0)} className="relative col-span-1 lg:row-span-4 lg:h-[60vh] h-[100vh] overflow-x-hidden overflow-y-auto lg:pl-[20px] lg:pr-[20px] py-[20px] pl-[30px] pr-[20px] no-scroll">
                <div data-has-massage={(massages.length !== 0)} className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] lg:p-[24px] p-[16px] transition-all duration-500 ease-in-out lg:w-[75%] w-[85%] shadow-black border border-lightestDark bg-pageDark lg:rounded-[40px] rounded-[20px] data-[has-massage='true']:opacity-0 data-[has-massage='true']:invisible data-[has-massage='false']:opacity-100 data-[has-massage='false']:visible">
                    <div className="flex lg:w-[50%] w-[85%] items-center mx-auto p-[16px] bg-white/20 rounded-[12px] justify-between gap-[10px] shadow-black mb-[32px]">
                        <span className="text-lightGrey  shrink-0"><IconComponent name="circle-warn" size={16} /></span>
                        <span className="text-lightGrey block truncate lg:text-[20px] text-[16px] font-normal">توجه داشته باشید</span>
                        <span className="text-lightGrey shrink-0"><IconComponent name="circle-warn" size={16} /></span>
                    </div>
                    <ul className="list-disc flex flex-col gap-[24px] lg:w-[75%] w-full lg:mx-auto lg:pr-0 pr-[20px]">
                        <li className="text-lightGrey">
                            <span className="lg:text-[16px] text-[13px] font-normal truncate block">هزینه هر درخواست تولید عکس ( تولید 4 عکس ) 2000 تومان می باشد</span>
                        </li>
                        <li className="text-lightGrey">
                            <span className="lg:text-[16px] text-[13px] font-normal truncate block">هزینه درخواست هر variation یا upscale برابر با 2000 تومان می باشد</span>
                        </li>
                        <li className="text-lightGrey">
                            <span className="lg:text-[16px] text-[13px] font-normal truncate block">میانگین زمان تولید یا تغییر عکس حدود 5 دقیقه خواهد بود</span>
                        </li>
                    </ul>
                </div>
                <div data-has-massage={(massages.length !== 0)} className="transition-all duration-500 ease-in-out delay-300 data-[has-massage='false']:opacity-0 w-full h-full data-[has-massage='false']:invisible data-[has-massage='true']:opacity-100 data-[has-massage='true']:visible flex flex-col gap-[40px]">
                    {
                        massages.map((item, index) => (
                            <div key={index} data-sender={item?.sender} className="data-[sender='bot']:self-end data-[sender='you']:self-start">
                                <div data-sender={item?.sender} className="mb-[12px] flex items-center gap-[8px] justify-start data-[sender='bot']:text-theme data-[sender='you']:text-lightestDark">
                                    <span className="shrink-0"><IconComponent size={16} name="clock" /></span>
                                    <span className="text-[13px] font-normal truncate ml-[1ch]">{item?.date.toLocaleDateString('fa-ir')}</span>
                                    <span className="text-[13px] font-normal truncate">
                                        {item?.date.getHours().toLocaleString('fa-ir')}
                                        :
                                        {item?.date.getMinutes().toLocaleString('fa-ir')}
                                    </span>
                                </div>
                                <div data-sender={item?.sender} className="border-[1.5px] p-[16px] shadow-black data-[sender='you']:bg-pageDark data-[sender='you']:border-lightestDark data-[sender='you']:rounded-l-[12px] data-[sender='you']:rounded-tr-[12px] data-[sender='bot']:bg-theme data-[sender='bot']:border-theme data-[sender='bot']:rounded-r-[12px] data-[sender='bot']:rounded-tl-[12px]">
                                    <p className="lg:text-[16px] text-[13px] font-normal lg:leading-[36px] leading-[28px] text-white">{item?.txt}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="lg:col-span-1 lg:h-[20vh] lg:pl-[20px] lg:pr-[20px] py-[20px] pl-[30px] pr-[20px] flex items-end relative">
                <div data-opened={(isInputFocused && massageInInput === '')} className="grid lg:grid-cols-4 grid-cols-2 items-center gap-[18px] absolute lg:bottom-[80%] bottom-full left-0 w-full px-[20px] transition-all duration-500 overflow-auto no-scroll data-[opened='false']:opacity-0 data-[opened='false']:invisible data-[opened='true']:opacity-100 data-[opened='true']:visible">
                    <SelectImageComponent onClick={() => false} img={RandomImage.src} />
                    <SelectImageComponent onClick={() => false} img={RandomImage.src} />
                    <SelectImageComponent onClick={() => false} img={RandomImage.src} />
                    <SelectImageComponent onClick={() => false} img={RandomImage.src} />
                </div>
                <form
                    action="#"
                    className="bg-pageDark border border-lightestDark rounded-[12px] shadow-black flex w-full items-center overflow-hidden"
                    dir="ltr"
                    onSubmit={(event) => {
                        // Preventing from sending form to url
                        event.preventDefault();

                        // Defining a function to add massage to state
                        async function addMassage() {
                            setMassages(() => [...massages, {
                                txt: massageInInput,
                                sender: 'you',
                                date: new Date()
                            }, {
                                txt: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                                sender: 'bot',
                                date: new Date()
                            }])
                        }

                       if (!massageInInput.startsWith(' ')) {
                           // Defining Element to scroll to bottom of it
                           const middleSideElement: HTMLDivElement = middleSideRef.current;

                           // Adding massage to state and then ...
                           addMassage()
                                .then(() => {
                                    // Scrolling to bottom of the container
                                    middleSideElement.scrollBy({
                                        left: 0,
                                        top: middleSideElement.scrollHeight,
                                        behavior: 'smooth'
                                    })

                                    // Showing loading animtion
                                    // setFetching(true);
                                    // setInterval(() => {
                                    // setFetching(false);
                                    // }, 1000)

                                    // Removing typef value of input
                                    setMassageInInput('');
                                }) 
                       }
                    }}
                >
                    <input 
                        tabIndex={(isFetching) ? -1 : 0}
                        onChange={(event:ChangeEvent<HTMLInputElement>) => setMassageInInput(event.target.value)} 
                        required
                        value={massageInInput}
                        onFocus={() => setInputFocused(true)}
                        onBlur={() => (massageInInput === '') ? false : setInputFocused(false)}
                        placeholder="چیزی تایپ کنید ...." 
                        type="text" 
                        className="px-[16px] py-[12px] w-full bg-transparent text-[20px] font-normal outline-0 placeholder:text-white/50 text-white" 
                    />
                    <button tabIndex={(isFetching) ? -1 : 0} className="p-[10px] shrink-0 aspect-square w-[50px] flex items-center justify-center">
                        <span className="rotate-180 text-lightGrey"><IconComponent size={24} name="send" /></span>
                    </button>
                </form>
            </div>
        </div>
    );
}

