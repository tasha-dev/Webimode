// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    icon: 'rounded-star'|'browser'|'file'|'calender-clock'|'dollor-circle'|'poll'|'globe'|'list';
    title: string;
    link: string;
    progress: 'in-progress' | 'waiting' | 'done';
    index: number;
}

// Creating and exporting step component of create page as default
export default function StepComponent({icon, link, progress, title, index}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link href={link}>
            <IconComponent size={32} name={icon} />
            <div>
                <span>{title}</span>
                <div>{index}</div>
            </div>
            <div data-progress={progress}>
                <IconComponent name="lock" size={12} />
                <span>
                    {
                        (progress === 'done')
                            ? 'تکمیل شده'
                            : (progress === "waiting")
                                ? 'در انتظار تکمیل'
                                : 'در حال تکمیل'
                    }
                </span>
            </div>
        </Link>
    );
}