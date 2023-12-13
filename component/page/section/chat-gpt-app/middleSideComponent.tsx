// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ChangeEvent, Dispatch, MutableRefObject, ReactNode, useRef, useState} from "react";
import IconComponent from "@/chunk/iconComponent";
import LoadingComponent from "@/chunk/loadingComponent";

// Creating and exporting middle side of chat gpt app page as default
export default function MiddleSideComponent():ReactNode {
    // Defining states of component
    const [activeAi, setActiveAi]:[string, Dispatch<string>] = useState('babbage');
    const [massageInInput, setMassageInInput]:[string, Dispatch<string>] = useState('');
    const [massages, setMassages]:[Array<{txt: string, sender: 'you'|'bot'} | null>, Dispatch<any>] = useState([]);
    const [isFetching, setFetching]:[boolean, Dispatch<boolean>] = useState(false);

    // Defininig refrence to middle side section
    const middleSideRef:MutableRefObject<any> = useRef();

    // Returning JSX
    return (
        <div className="lg:col-span-3 bg-dark lg:h-scren h-auto relative">
            <div data-fetching={isFetching} className="absolute top-0 left-0 transition-all duration-500 w-full h-full flex items-center justify-center bg-dark/90 z-[2] data-[fetching='false']:opacity-0 data-[fetching='false']:pointer-events-none">
                <LoadingComponent />
            </div>
            <div className="overflow-x-auto overflow-y-hidden flex gap-[24px] items-center justify-center h-[20vh] p-[20px] no-scroll">
                <button tabIndex={(isFetching) ? -1 : 0} onClick={() => setActiveAi('babbage')} data-active={(activeAi === 'babbage')} className="chat-ai-btn">babbage</button>
                <button tabIndex={(isFetching) ? -1 : 0} onClick={() => setActiveAi('davinci')} data-active={(activeAi === 'davinci')} className="chat-ai-btn">davinci</button>
                <button tabIndex={(isFetching) ? -1 : 0} onClick={() => setActiveAi('GPT4')} data-active={(activeAi === 'GPT4')} className="chat-ai-btn">GPT4</button>
                <button tabIndex={(isFetching) ? -1 : 0} onClick={() => setActiveAi('midjourny')} data-active={(activeAi === 'midjourny')} className="chat-ai-btn">midjourny</button>
            </div>
            <div ref={middleSideRef} data-has-massage={(massages.length !== 0)} className="relative col-span-1 lg:row-span-4 h-[60vh] overflow-x-hidden overflow-y-auto p-[20px] no-scroll">
                <div data-has-massage={(massages.length !== 0)} className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] p-[24px] transition-all duration-500 ease-in-out lg:w-[75%] w-full shadow-black border border-lightestDark bg-pageDark rounded-[40px] data-[has-massage='true']:opacity-0 data-[has-massage='true']:invisible data-[has-massage='false']:opacity-100 data-[has-massage='false']:visible">
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
                <div data-has-massage={(massages.length !== 0)} className="data-[has-massage='false']:opacity-0 w-full h-full data-[has-massage='false']:invisible data-[has-massage='true']:opacity-100 data-[has-massage='true']:visible flex flex-col gap-[40px]">
                    {
                        massages.map((item, index) => (
                            <div key={index} data-sender={item?.sender} className="border-[1.5px] px-[16px] py-[12px] shadow-black data-[sender='bot']:self-end data-[sender='you']:self-start data-[sender='you']:bg-pageDark data-[sender='you']:border-lightestDark data-[sender='you']:rounded-l-[12px] data-[sender='you']:rounded-tr-[12px] data-[sender='bot']:bg-theme data-[sender='bot']:border-theme data-[sender='bot']:rounded-r-[12px] data-[sender='bot']:rounded-tl-[12px]">
                                <p className="text-[16px] font-normal leading-[36px] text-white">{item?.txt}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="lg:col-span-1 h-[20vh] p-[20px] flex items-end relative">
                <form
                    action="#"
                    className="bg-pageDark border border-lightestDark rounded-[12px] shadow-black flex w-full items-center overflow-hidden"
                    dir="ltr"
                    onSubmit={(event) => {
                        // Preventing from sending form to url
                        event.preventDefault();

                        // Adding massage to state
                        setMassages(() => [...massages, {
                            txt: massageInInput,
                            sender: 'you'
                        }, {
                            txt: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                            sender: 'bot'
                        }])

                        // Scrolling to bottom of the container
                        middleSideRef.current.scroll({
                            left: 0,
                            top: middleSideRef.current.scrollHeight,
                            behaviou: 'smooth'
                        })

                        // Showing loading animtion
                        // setFetching(true);

                        // Removing typef value of input
                        setMassageInInput('');
                    }}
                >
                    <input 
                        tabIndex={(isFetching) ? -1 : 0}
                        onChange={(event:ChangeEvent<HTMLInputElement>) => setMassageInInput(event.target.value)} 
                        required
                        value={massageInInput}
                        onFocus={() => (massageInInput === '') ? '' : ''}
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

