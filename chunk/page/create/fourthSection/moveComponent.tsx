// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    index: number;
    title: string;
    children: string;
    isActive: boolean;
    icon: 'file-write'|'file-search'|'party-horn';
}

// Creating and exporting move component of fourth section in create page as default
export default function MoveComponent({children, index, isActive, title, icon}:propsType):ReactNode {
    // Returning JSX
    return (
        <div>
            <div data-active={true}><IconComponent name={icon} size={32} /></div>
            <div data-active={isActive}>
                <div>{index}</div>
                <span>{title}</span>
                <p>{children}</p>
            </div>
        </div>
    );
}