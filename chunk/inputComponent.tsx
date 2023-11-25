// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState} from 'react';

// Defining type of props
interface propsType {
  placeHolder: string;
  icon?: 'person'|'telephone'|'caller'|'mail';
  inputType: 'text'|'mail'|'password'|'tell';
  required?: boolean;
}

// Creating and exporting input component as default
export default function InputComponent({placeHolder, icon, inputType, required = false}:propsType):ReactNode {
  // Conditional rendering
  if (inputType === 'password') {
    // Defining state of component 
    const [isPasswordShowing, setPasswordShowing]:[boolean, Dispatch<boolean>] = useState(false);

    // Returning JSX
    return (
      <div>
        <input type="password" required={required} maxLenght={12} minLenght={8}>
        <div>
          <IconComponent size={16} name={(!isPasswordShowing) ? 'eye' : 'slash-eye'} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <input type={inputType} required={required}>
        <div>
          <IconComponent size={16} name={icon} />
        </div>
      </div>
    );
  }
}
