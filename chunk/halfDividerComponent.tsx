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
    <div>
      <div />
      <span>{children}</span>
      <div />
    </div> 
  )
}
