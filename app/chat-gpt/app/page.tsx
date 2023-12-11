// Importing part
import {ReactNode} from "react";
import RightSideComponent from '@/component/page/section/chat-gpt-app/rightSideComponent';

// Creating and exporting chat gpt app page as default
export default function ChatGptAppPage():ReactNode {
    // Returning JSX
    return (
        <div className="grid grid-cols-5 h-[100vh] overflow-hidden">
            <RightSideComponent />
            <div className="col-span-3 bg-red-600" />
            <div className="col-span-1 bg-green-600" />
        </div>
    );
}