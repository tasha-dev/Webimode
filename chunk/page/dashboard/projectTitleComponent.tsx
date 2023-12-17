// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";

// Defining type of props
interface propsType {
    title: string;
    count: number;
    link: string;
    theme: 'blue' | 'theme' | 'purple';
}

// Creating and exporting project title of fourth divider in dashboard page as default
export default function ProjectTitleComponent({count, theme, link, title}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} data-theme={theme} className="rounded-[16px] group border-[1.5px] px-[12px] py-[15px] transition-all duration-500 flex items-center justify-between data-[theme='blue']:bg-themeBlue/20 data-[theme='blue']:hover:bg-themeBlue/40 data-[theme='blue']:border-themeBlue data-[theme='theme']:bg-theme/20 data-[theme='theme']:hover:bg-theme/40 data-[theme='theme']:border-theme data-[theme='purple']:bg-themePurple/20 data-[theme='purple']:hover:bg-themePurple/40 data-[theme='purple']:border-themePurple ">
            <div className="flex items-center gap-[12px]">
                <span data-theme={theme} className="text-[16px] font-normal max-w-[20ch] truncate data-[theme='theme']:text-theme data-[theme='blue']:text-themeBlue data-[theme='purple']:text-themePurple">
                    {title}
                </span>
                {
                    (count !== 0)
                        ? (
                            <div data-theme={theme} className="w-[20px] h-[20px] flex items-center justify-center rounded-full data-[theme='theme']:bg-theme data-[theme='purple']:bg-themePurple data-[theme='blue']:bg-themeBlue">
                                <span className="block h-[80%] text-[12px] font-bold text-white">{count}</span>
                            </div>
                        ) : false
                }
            </div>
            <div data-theme={theme} className="w-[20px] h-[20px] transition-all duration-500 flex items-center justify-center rounded-full text-white data-[theme='blue']:bg-themeBlue/60 group-hover:data-[theme='blue']:bg-themeBlue data-[theme='theme']:bg-theme/60 group-hover:data-[theme='theme']:bg-theme data-[theme='purple']:bg-themePurple/60 group-hover:data-[theme='purple']:bg-themePurple">
                <IconComponent name="chevron-left" size={10} />
            </div>
        </Link>
    );
}