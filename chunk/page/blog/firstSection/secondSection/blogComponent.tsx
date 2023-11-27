// Importing part
import Link from "next/link";
import {ReactNode} from "react";
import Image from 'next/image';
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    genre: string;
    img: string;
    date: Date;
    title: string;
    children: string;
    link: string;    
    isBig?: boolean;
}

// Creating and exporting blog component of second section in blog page as default
export default function BlogComponent({children, date, genre, link, title, isBig = false, img}:propsType):ReactNode {
    // Conditional rendering
    return (
        <Link data-isbig={isBig} href={link}>
            <Image src={img} alt={title} width={1000} height={1000} />
            <div>
                <span>{genre}</span>
                <div />
                <span>
                    <IconComponent size={16} name="clock" />
                    <span>{date.toLocaleDateString('fa-ir')}</span>
                </span>
            </div>
            <span>{title}</span>
            <p>{children}</p>
            <button>
                مشاهده مقاله
                <IconComponent size={16} name="chevron-left" />
            </button>
        </Link>
    );
}