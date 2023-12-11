// Importing part
import {ReactNode} from "react";
import RightSideComponent from '@/component/page/section/chat-gpt-app/rightSideComponent';
import MiddleSideComponent from '@/component/page/section/chat-gpt-app/middleSideComponent';

// Creating and exporting chat gpt app page as default
export default function ChatGptAppPage():ReactNode {
    // Returning JSX
    return (
        <div className="grid grid-cols-5 h-[100vh] overflow-hidden">
            <RightSideComponent />
            <MiddleSideComponent />
            <div className="col-span-1 bg-green-600" />
        </div>
    );
}