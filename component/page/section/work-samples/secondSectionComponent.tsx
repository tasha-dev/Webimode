// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    filtering: string;
}

// Creating and exporting second section of work samples page as default
export default function SecondSectionComponent({filtering}:propsType):ReactNode {
    // Returning JSX
    return (
        <div></div>
    );
}