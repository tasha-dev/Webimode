// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    icon: 'person'|'mail'|'file-write';
    inputType: 'mail'|'text'|'tell';
    placeHolder: string;
    isTextArea?: boolean;
    name: string;
    required?: boolean;
}

// Creating and exporting input of component from footer as default
export default function InputComponent({icon, inputType, placeHolder, isTextArea = false, name, required = false}:propsType):ReactNode {
    // Returning JSX
    return (
        <div>
            {
                (isTextArea)
                    ? (
                        <textarea required={required} placeholder={placeHolder} name={name} id={name} />
                    ) : (
                        <input required={required} placeholder={placeHolder} type={inputType} name={name} id={name} />
                    )
            }
            <IconComponent name={icon} size={24} />
        </div>
    );
}