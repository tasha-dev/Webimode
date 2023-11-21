// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";
import Image from 'next/image';

// Defining type of props
interface propsType {
    img: string;
    genre: string;
    date: Date;
    title: string;
    children: string;
}

// Creating and exporting blog compnonent as default
export default function BlogComponent({children, date, genre, img, title}:propsType):ReactNode {
    // Returning JSX
    return (
        <article>
            <Link href={`/blog/`}>
                <Image src={img} width={1000} height={1000} alt={title} />
            </Link>
            <Link href={`/blog/`}>
                <div>
                    <span>{genre}</span>
                    <div />
                    <div>
                        <IconComponent name="clock" size={16} />
                        <span>{date.toLocaleDateString('ir-fa')}</span>
                    </div>
                </div>
                <span>{title}</span>
                <p>{children}</p>
                <button>
                    مشاهده مقاله    
                    <IconComponent size={16} name="chevron-left" />
                </button>
            </Link>
        </article>
    );
}