// Importing part
import IconComponent from "@/chunk/iconComponent";
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    isActive: boolean;
    title: string;
    children: string;
    position: 'top' | 'bottom';
    icon: 'shield-check'|'hand-holding-dollor'|'shaking-hands';
}

// Creating and exporting feature component as default
export default function FeaturesComponent({children, isActive, position, title, icon}:propsType):ReactNode {
    // Returning JSX
    return (
        <div data-acive={isActive} data-position={position}>
            <div>
                <IconComponent name={icon} size={32} />
            </div>
            <span>
                {title}
            </span>
            <p>
                {children}
            </p>
        </div>
    );
}