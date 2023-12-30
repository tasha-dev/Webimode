// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState, useEffect, Dispatch, MutableRefObject, useRef} from "react";
import IconComponent from "@/chunk/iconComponent";
import Image from "next/image";
import BottomImage from '@/public/img/img-video-player-bottom.svg';

// Defining props type 
interface propsType {
    src: string;
    cover?: string;
    title?: string
}

// Creating and exporting video player componet as default
export default function VideoPlayerComponent({cover = '', src, title = ''}:propsType):ReactNode {
    // Defining states of component
    const [isLoading, setLoading]:[boolean, Dispatch<boolean>] = useState(true);
    const [isPlaying, setPlaying]:[boolean, Dispatch<boolean>] = useState(false);

    // Defining refrence to video element
    const videoElementRef:MutableRefObject<any> = useRef();

    // Using useEffect to play video
    useEffect(() => {
        const videoElement:HTMLVideoElement = videoElementRef.current;

        (isPlaying) 
            ? videoElement.play()
            : videoElement.pause()
    }, [isPlaying])

    // Returning JSX
    return (
        <>
            <div 
                tabIndex={0}
                className="relative lg:h-[325px] h-[170px] rounded-[48px] overflow-hidden cursor-pointer lg:mx-[31px] mx-[16px]" 
                data-loading={isLoading}
                data-playing={isPlaying}
                onClick={() => {if (!isLoading) {(isPlaying) ? setPlaying(false) : setPlaying(true)}}}
            >
                <video poster={cover} className="transition-all duration-500 h-[325px] w-full object-cover" src={src} ref={videoElementRef} onLoadedData={() => setLoading(false)}>
                    <source src={src} srcSet={src} />
                </video>
                <div data-playing={isPlaying} className="absolute top-0 left-0 w-full h-full flex justify-center items-center transition-all duration-500 bg-dark data-[playing='false']:opacity-100 data-[playing='false']:visible data-[playing='true']:opacity-0 data-[playing='true']:invisible">
                    {
                        (cover !== '')
                            ?  <img className="absolute w-full h-full object-cover opacity-20 z-[0]" src={cover} alt={(title !== '') ? title : 'ویدیو'} />
                            : false
                    }
                    <div className="shadow-lg z-[1] relative w-[56px] h-[56px] rounded-full flex items-center justify-center bg-theme text-white">
                        <IconComponent size={24} name="play" />
                    </div>
                </div>
            </div>
            <Image width={613} height={90} src={BottomImage.src} alt="عکس پایین ویدیو پلیر" className="w-full -mt-[40px]"  />
        </>
    );
}