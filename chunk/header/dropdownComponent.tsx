// Importing part
import {ReactNode} from "react";
import LinkComponent from "@/chunk/header/linkComponent";

// Defining type of props
interface propsType {
    children: ReactNode;
    title: string;
    link: string;
    theme? : 'dark' | 'white';
}

// Creating and exporting dropdown component as default
export default function DropdownComponent({children, title, link, theme = 'white'}:propsType):ReactNode {
    // Returning JSX
    return (
        <li className={'group relative'}>
            <LinkComponent theme={(theme === 'dark') ? 'dark' : 'white'} link={link} isDropdown>{title}</LinkComponent>
            <ul className={'absolute top-full right-0 bg-theme py-[10px] transition-all duration-500 rounded-[10px] invisible opacity-0 group-hover:opacity-100 group-hover:visible w-[200px] max-h-[200px] overflow-auto'}>
                {children}
            </ul>
        </li>
    );
}