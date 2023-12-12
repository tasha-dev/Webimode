// Importing part
import {ReactNode} from "react";
import RightSideComponent from '@/component/page/section/chat-gpt-app/rightSideComponent';
import MiddleSideComponent from '@/component/page/section/chat-gpt-app/middleSideComponent';
import LeftSideComponent from "@/component/page/section/chat-gpt-app/leftSideComponent";

// Creating and exporting chat gpt app page as default
export default function ChatGptAppPage():ReactNode {
    // Returning JSX
    return (
        <div className="grid grid-cols-5 h-[100vh] overflow-hidden">
            <RightSideComponent />
            <MiddleSideComponent />
            <LeftSideComponent />
        </div>
    );
}