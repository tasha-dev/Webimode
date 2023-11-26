// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState, Dispatch} from 'react';
import IconComponent from '@/chunk/iconComponent';

// Defining type of props
interface propsType {
  placeHolder: string;
  name: string;
  icon: 'person'|'telephone'|'caller'|'mail'|'slash-eye';
  inputType: 'text'|'email'|'password'|'tel';
  required?: boolean;
}

// Creating and exporting input component as default
export default function InputComponent({placeHolder, name, icon, inputType, required = false}:propsType):ReactNode {
  // Defining state of component
  const [isFocused, setFoucused]:[boolean, Dispatch<boolean>] = useState(false);

  // Conditional rendering
  if (inputType === 'password') {
    // Defining state of component 
    const [isPasswordShowing, setPasswordShowing]:[boolean, Dispatch<boolean>] = useState(false);

    // Returning JSX
    return (
      <div data-focused={isFocused} className="rounded-[16px] overflow-hidden flex justify-between items-center border-2 transition-all duration-500 data-[focused='true']:border-dark data-[focused='false']:border-lightGrey">
        <input placeholder={placeHolder} name={name} id={name} onFocus={() => setFoucused(true)} onBlur={() => setFoucused(false)} data-focused={isFocused} type={(isPasswordShowing) ? 'text' : 'password'} required={required} max={12} minlenght={8} className="p-[16px] text-[16px] font-normal w-full outline-0 transition-all duration-500 data-[focused='true']:text-dark data-[focused='false']:text-lightGrey"  />
        <button type={'button'} onClick={() => (isPasswordShowing) ? setPasswordShowing(false) : setPasswordShowing(true)} data-focused={isFocused} className="p-[20px] data-[focused='true']:text-dark data-[focused='false']:text-lightGrey transition-all duration-500 hover:bg-lighterGrey focus:bg-lighterGrey outline-0">
          <IconComponent size={16} name={icon} />
        </button>
      </div>
    );
  } else {
    return (
      <div data-focused={isFocused} className="rounded-[16px] overflow-hidden flex justify-between items-center border-2 transition-all duration-500 data-[focused='true']:border-dark data-[focused='false']:border-lightGrey">
        <input data-type={inputType} placeholder={placeHolder} name={name} id={name} onFocus={() => setFoucused(true)} onBlur={() => setFoucused(false)} data-focused={isFocused} type={inputType} required={required} className="p-[16px] text-[16px] font-normal w-full outline-0 transition-all duration-500 data-[focused='true']:text-dark data-[focused='false']:text-lightGrey data-[type='tel']:text-end" />
        <div data-focused={isFocused} className="p-[16px] data-[focused='true']:text-dark data-[focused='false']:text-lightGrey transition-all duration-500">
          <IconComponent size={16} name={icon} />
        </div>
      </div>
    );
  }
}
