// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining props type
interface propsType {
    isSelected: boolean;
    title: string;
    icon: 'house-buliding'|'shop'|'file'|'person'|'wp'|'browser'|'shield-check'|'ban-bug'|'cloud-upload'|'addsign';
}

// Creating and exporting website subject component as default
export default function WebsiteSubjectComponent({icon, isSelected, title}:propsType):ReactNode {
    // Returning JSX
    return (
        <div data-selected={isSelected}>
            <div data-selected={isSelected}>
                {
                    (isSelected)
                        ? <IconComponent name="check-circle" size={12} />
                        : false
                }
            </div>
            <span>{title}</span>
            <div>
                <IconComponent name={icon} size={24} />
            </div>
        </div>
    );
}