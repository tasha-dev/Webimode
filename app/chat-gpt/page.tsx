// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from "@/component/page/section/chat-gpt/firstSectionComponent";
import SecondSectionComponent from "@/component/page/section/chat-gpt/secondSectionComponent";

// Creating and exporting chat gpt page as default
export default function ChatGptPage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
            <SecondSectionComponent />
        </>
    );
}