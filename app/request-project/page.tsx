// Importing part
import {ReactNode} from "react";
import RequestComponent from "@/component/requestComponent/requestComponent";

// Defining metadata of page
export const metadata = {title: 'درخواست'}

// Creating and exporting request page as default
export default function RequestProjectPage():ReactNode {
    // Returning JSX
    return <RequestComponent />
}