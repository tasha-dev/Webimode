// Importing part
import {ReactNode} from 'rect';

// Defining type of props
interface propsType {
  children: string;
}

// Creating and exporting half divder component as default
export default function HalfDividerComponent({children}:propsType):ReactNode {
  // Returning JSX
  return (
    <div className="flex items-center gap-[16px]">
      <div className="w-full h-[1.5px] rounded-[20px] bg-gradient-to-r from-lightGrey to-white" />
      <span className="text-[16px] font-normal text-lightGrey whitespace-nowrap">{children}</span>
      <div className="w-full h-[1.5px] rounded-[20px] bg-gradient-to-l from-lightGrey to-white" />
    </div> 
  )
}
