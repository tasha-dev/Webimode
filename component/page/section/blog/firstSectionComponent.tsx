// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import SearchFormComponent from "@/chunk/page/blog/firstSection/searchFormComponent";
import Image from "next/image";
import TopsideCirclesImageLeft from '@/public/img/blog/firstSection/img-top-side-cirlces-left.svg';
import TopsideCirclesImageRight from '@/public/img/blog/firstSection/img-top-side-cirlces-right.svg';

// Defining type of props
interface propsType {
    children: ReactNode;
}

// Creating and exporting first section of blog page as default
export default function FirstSectionComponent({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <section>
            <div className="container relative">
                <Image alt="" src={TopsideCirclesImageLeft.src} width={700} height={1400} className="w-[50%] lg:block hidden h-full absolute left-[20px] top-0 object-contain object-left" />
                <Image alt="" src={TopsideCirclesImageRight.src} width={700} height={1400} className="w-[50%] lg:block hidden h-full absolute right-[20px] top-0 object-contain object-right" />
                <header className="flex items-center justify-center flex-col lg:mb-[48px] mb-[16px] p-[20px]">
                    <div className="sign">مقالات وبیمود</div>
                    <h1 className="font-normal lg:text-[48px] text-[20px] text-dark mb-[16px] text-center">
                        جدیدترین و داغ ترین 
                        <span className="relative font-bold mx-[1ch] text-theme inline-block">
                            مقالات
                            <span className={'text-theme absolute right-[102%] bottom-full lg:flex hidden flex-col w-[30px]'}>
                                <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </span>
                        در وبیمود    
                    </h1>
                    <p className="text-center paragraph">در مقالات وبیمود می توانید جدید ترین و بهترین مقالاتی که تا به حال ندیده اید را مشاهده کنید و از آن لذت ببرید !</p>
                </header>
                <main>
                    <div className="px-[20px] w-full flex items-center justify-center flex-col lg:mb-[64px] mb-[32px]">
                        <SearchFormComponent name="blog-search-input" placeHolder="اسم مقاله ، دسته بندی ، ...."  />
                    </div>
                    <ul className="flex items-center gap-[32px] justify-between overflow-auto max-w-[1000px] no-scroll mx-auto px-[20px]">
                        {children}
                    </ul>
                </main>
            </div>
        </section>
    );
}