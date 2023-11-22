// Importing part
import {ReactNode} from "react";
import {Metadata} from "next";
import LocalFont from 'next/font/local';
import {NextFont} from "next/dist/compiled/@next/font";
import HeaderComponent from "@/component/headerComponent";
import FooterComponent from "@/component/footerComponent";
import '@/app/index.css';

// Defining custom local font of Dana
const DanaFont:NextFont = LocalFont({
    src: [
        {
            path: '../public/font/DanaFaNum-Thin.woff2',
            weight: '100'
        },{
            path: '../public/font/DanaFaNum-UltraLight.woff2',
            weight: '200'
        }, {
            path: '../public/font/DanaFaNum-Light.woff2',
            weight: '300'
        }, {
            path: '../public/font/DanaFaNum-Regular.woff2',
            weight: '400'
        }, {
            path: '../public/font/DanaFaNum-Medium.woff2',
            weight: '500'
        }, {
            path: '../public/font/DanaFaNum-DemiBold.woff2',
            weight: '600'
        }, {
            path: '../public/font/DanaFaNum-Bold.woff2',
            weight: '700'
        }, {
            path: '../public/font/DanaFaNum-ExtraBold.woff2',
            weight: '800'
        }, {
            path: '../public/font/DanaFaNum-Black.woff2',
            weight: '900'
        }, {
            path: '../public/font/DanaFaNum-ExtraBlack.woff2',
            weight: '950'
        },
    ]
})

// Defining metadata of pages and exporting them
export const metadata:Metadata = {
    title: 'وبیمود',
    description: 'وبیمود واقعی کردن ایده ها - بهترین خدمات برنامه نویسی ، طرای سایت ، طراحی لوگو ، انیمیشن و... با تیم حرفه ای وبیمود کسب و کار خود را به سطح باللاتری ببرید !',
    keywords: ['programming', 'coding', 'web', 'webimode', 'website design', 'logo', 'animation', 'وبیمود', 'برنامه نویسی', 'کد زدن', 'وب', 'دیزاین', 'لوگو', 'طراحی', 'انیمیشن'],
    twitter: {
        title: 'وبیمود',
        description: 'بهترین خدمات برنامه نویسی ، طرای سایت ، طراحی لوگو ، انیمیشن و... با تیم حرفه ای وبیمود کسب و کار خود را به سطح باللاتری ببرید !'
    },
    openGraph: {
        title: 'وبیمود',
        description: 'بهترین خدمات برنامه نویسی ، طرای سایت ، طراحی لوگو ، انیمیشن و... با تیم حرفه ای وبیمود کسب و کار خود را به سطح باللاتری ببرید !',
        type: 'website'
    }
}

// Defining type of props
interface propsType {
    children: ReactNode;
}

// Creating and exporting root layout of pages as default
export default function RootLayout({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <html>
            <body dir={'rtl'} className={DanaFont.className}>
                <HeaderComponent />
                {children}
                <FooterComponent />
            </body>
        </html>
    );
}