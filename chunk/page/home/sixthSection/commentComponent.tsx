// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining props type
interface propsType {
    name: string;
    rating: number;
    children: string;
    dislikeCount: number;
    likeCount: number;
}

// Creating and exporting comment component as default
export default function CommentComponent({children, dislikeCount, likeCount, name, rating}:propsType):ReactNode {
    // Returning JSX
    return (
        <div>
            <div>
                <div>
                    <div><IconComponent size={18} name={'rounded-star'} /></div>
                    <span>{name}</span>
                </div>
                <div>{rating}</div>
            </div>
            <p>{children}</p>
            <div>
                <button>
                    ثبت پاسخ    
                    <IconComponent name="chevron-left" size={16} />
                </button>
                <div>
                    <button>
                        {dislikeCount}
                        <IconComponent name="dislike" size={18} />
                    </button>
                    <button>
                        {likeCount}
                        <IconComponent name="like" size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}