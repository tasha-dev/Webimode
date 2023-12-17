// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    label: string;
    id: string;
    type: 'text' | 'tel' | 'email' ;
    placeHolder: string;
}

// Creating and exporting edit info input component as defualt
export default function EditInfoInputComponent({id, label, type, placeHolder}:propsType):ReactNode {
    // Returning JSX
    return (
        <div>
            <label className="mb-[12px] block text-[16px] font-normal truncate text-dark" htmlFor={id}>{label}</label>
            {
                (id === 'meli-code-input')
                    ? <input minLength={10} maxLength={10} className="appearance-none bg-white transition-all duration-500 text-right rounded-[12px] placeholder:transition-all placeholder:duration-500 outline-0 w-full block p-[12px] text-[13px] font-normal placeholder:text-lightGrey text-lightGrey focus:placeholder:text-dark focus:text-dark" required type={type} placeholder={placeHolder} id={id} name={id} />
                    : <input className="appearance-none bg-white transition-all duration-500 text-right rounded-[12px] placeholder:transition-all placeholder:duration-500 outline-0 w-full block p-[12px] text-[13px] font-normal placeholder:text-lightGrey text-lightGrey focus:placeholder:text-dark focus:text-dark" required type={type} placeholder={placeHolder} id={id} name={id} />
            }
        </div>
    );
}