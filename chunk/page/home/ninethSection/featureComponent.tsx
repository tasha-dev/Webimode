// Importing part
import {ReactNode} from "react";
import CircleProgressComponent from "@/chunk/page/home/ninethSection/circleProgressComponent";

// Defining type of props
interface propsType {
    percentage: number;
    theme: 'orange'|'blue'|'green';
    title: string;
    children: string;
}

// Creating and exporting feature component as default
export default function FeatureComponent({children, percentage, theme, title}:propsType):ReactNode {
    // Returning JSX
    return (
        <div data-theme={theme}>
            <div>
                <CircleProgressComponent percentage={percentage} theme={theme} />
            </div>
        </div>
    );
}