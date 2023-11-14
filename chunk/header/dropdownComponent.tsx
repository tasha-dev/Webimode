// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    children: ReactNode;
    title: string;
}

// Creating and exporting dropdown component as default
export default function DropdownComponent({children, title}:propsType):ReactNode {
    // Returning JSX
    return (
        <li>
            <Link href={'/services'}>
                {title}
                <IconComponent name={'chevron-down'} size={15} />
            </Link>
            <ul>{children}</ul>
        </li>
    );
}