// Forcing nextJS to render this componet as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import FirstSectionComponent from "@/component/page/section/blog/firstSectionComponent";

// Note: this component is created to prevent the whole blog page to be rendred as client side component
// Creating and exporting a component which holds first and second section's of blog page with their states as default
export default function StatefullFirstComponent():ReactNode {
    // Defining states of component
    const [activeBlogFiltering, setActiveBlogFiltering]:[string, Dispatch<string>] = useState('همه مقالات');
    const filterings:Array<string> = ['تکنولوژی', 'سلامت و بهداشت', 'ایده پردازی', 'هوش مصنوعی', 'جشنواره ها', 'طراحی و خلاقیت', 'همه مقالات'];
    
    // Returning JSX
    return (
        <>
            <FirstSectionComponent>
                {
                    filterings.map((filter) => (
                        <li className="shrink-0">
                            <button 
                                onClick={() => setActiveBlogFiltering(filter)} 
                                data-active={(activeBlogFiltering === filter)} 
                                className="blog-genre-btn"
                            >
                                {filter}
                            </button>
                        </li>
                    ))
                }
            </FirstSectionComponent>
        </>
    );
}
