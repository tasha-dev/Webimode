// Importing part
import IconComponent from "@/chunk/iconComponent";
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    children: string;
    title: string;
    isChecked: boolean;
    icon: 'brief-case'|'money-check-edit'|'design'|'replace'|'vote-yes';
}

// Exporting detail component of second section in home page as default
export default function DetailComponent({children, icon, isChecked, title}:propsType):ReactNode {
    // Returning JSX
    return (
        <div data-checked={isChecked}>
            <div><IconComponent size={24} name={icon} /></div>
            <span>{title}</span>
            <p>{children}</p>
        </div>
    );
}