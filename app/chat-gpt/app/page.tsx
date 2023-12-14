// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import RightSideComponent from '@/component/page/section/chat-gpt-app/rightSideComponent';
import MiddleSideComponent from '@/component/page/section/chat-gpt-app/middleSideComponent';
import LeftSideComponent from "@/component/page/section/chat-gpt-app/leftSideComponent";
import RightSideMQComponent from "@/component/page/section/chat-gpt-app/mq/rightSideComponent";
import LeftSideMQComponent from "@/component/page/section/chat-gpt-app/mq/leftSideComponent";

// Creating and exporting chat gpt app page as default
export default function ChatGptAppPage():ReactNode {
    // Defining states of component
    const [isRightSideOpened, setRightSideOpened]:[boolean, Dispatch<boolean>] = useState(false);
    const [isLeftSideOpened, setLeftSideOpened]:[boolean, Dispatch<boolean>] = useState(false);

    // Returning JSX
    return (
        <div className="grid lg:grid-cols-5 grid-col-1 lg:h-[100vh] lg:overflow-hidden">
            <RightSideComponent 
                onClickOfUndoBtn={() => setLeftSideOpened(true)} 
                onClickOfPersonBtn={() => setRightSideOpened(true)} 
            />
            <RightSideMQComponent 
                closeFunction={() => setRightSideOpened(false)} 
                isOpened={isRightSideOpened}
            />
            <LeftSideMQComponent 
                closeFunction={() => setLeftSideOpened(false)} 
                isOpened={isLeftSideOpened}
            />
            <MiddleSideComponent />
            <LeftSideComponent />
        </div>
    );
}