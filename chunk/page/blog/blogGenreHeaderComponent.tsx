// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    highlightedTitle: string;
    nonHighlightedTitle?: string;
    link: string;
    theme?: 'white' | 'theme';
}

// Creating and exporting blog genre header component of blog page as default
export default function BlogGenreHeaderComponent({highlightedTitle, link, nonHighlightedTitle, theme = 'theme'}: propsType): ReactNode {
    // Returning JSX
    return (
        <header className="flex mb-[64px] justify-between items-center">
            <h4 className="relative text-[32px] font-normal">
                <span data-theme={theme} className="data-[theme='theme']:text-theme data-[theme='white']:text-white ml-[1ch] inline-block">{highlightedTitle}</span>
                {
                    (nonHighlightedTitle && nonHighlightedTitle !== '')
                        ? <span data-theme={theme} className="data-[theme='theme']:text-dark data-[theme='white']:text-white ml-[1ch] inline-block">{nonHighlightedTitle}</span>
                        : false
                }
                <span 
                    data-has-non-highlited={(nonHighlightedTitle && nonHighlightedTitle !== '') ? 'true' : 'false'} 
                    data-theme={theme}
                    className={'data-[has-non-highlited="true"]:data-[theme="theme"]:text-dark data-[has-non-highlited="false"]:data-[theme="theme"]:text-theme data-[theme="white"]:text-white absolute right-[102%] bottom-full lg:flex hidden flex-col w-[30px]'}
                >
                    <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                    <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                    <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                </span>
            </h4>
            <div>
                <Link href={link} className={(theme === 'theme') ? "btn-primary" : "btn-primary-white"}>
                    مشاهده همه
                    <IconComponent size={16} name="chevron-left" />
                </Link>
            </div>
        </header>
    );
}