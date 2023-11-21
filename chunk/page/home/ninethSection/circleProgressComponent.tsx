// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    percentage: number;
    theme: 'orange'|'blue'|'green';
}

// Creating and exporting circle progress bar as default
export default function CircleProgressComponent({percentage, theme}:propsType):ReactNode {
    // Returning JSX
    return (
        <div>
            <div><span>{percentage}%</span></div>
            <div>
                <div />
            </div>
        </div>
    );
}