// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import SearchFormComponent from "@/chunk/page/blog/firstSection/searchFormComponent";

// Creating and exporting first section of blog page as default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className="mb-[1000px]">
            <div className="container p-[20px] lg:mt-[250px] mt-[68px] relative">
                <div className="absolute top-0 left-0 w-full h-full -translate-y-[20%] pointer-events-none">
                    <div className="absolute top-0 right-[200px] w-[8px] h-[8px] aspect-square bg-theme rounded-full" />
                    <div className="flex items-start gap-[5px] absolute top-[10px] left-[300px] text-themePurple">
                        <div className="w-[16px] h-[16px] aspect-square rounded-full bg-current" />
                        <IconComponent size={27} name="arrow-curve" />
                    </div>
                    <div className="absolute w-[16px] h-[16px] aspect-square rounded-full bg-themePurple right-[50px] top-[100px]" />
                    <div className="absolute w-[16px] h-[16px] aspect-square rounded-full bg-dark left-[200px] top-[50px]" />
                    <div className="flex flex-col items-center justify-center gap-[5px] absolute right-[100px] top-[200px] text-dark">
                        <span className="rotate-90"><IconComponent size={27} name="arrow-curve" /></span>
                        <div className="w-[16px] h-[16px] aspect-square rounded-full bg-current" />
                    </div>
                    <div className="absolute bottom-[100px] left-[100px] w-[8px] h-[8px] aspect-square bg-theme rounded-full" />
                </div>
                <header className="flex items-center justify-center flex-col mb-[48px]">
                    <div className="sign">مقالات وبیمود</div>
                    <h1 className="font-normal text-[48px] text-dark mb-[16px]">
                        جدیدترین و داغ ترین 
                        <span className="relative font-bold mx-[1ch] text-theme inline-block">
                            مقالات
                            <span className={'text-theme absolute right-[102%] bottom-full flex flex-col w-[30px]'}>
                                <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </span>
                        در وبیمود    
                    </h1>
                    <p className="text-center paragraph">در مقالات وبیمود می توانید جدید ترین و بهترین مقالاتی که تا به حال ندیده اید را مشاهده کنید و از آن لذت ببرید !</p>
                </header>
                <main className="flex items-center justify-center flex-col">
                    <SearchFormComponent name="blog-search-input" placeHolder="اسم مقاله ، دسته بندی ، ...."  />
                    <ul className="flex items-center gap-[32px] justify-between overflow-auto w-[75%] no-scroll">
                        <li className="shrink-0"><button data-active={true} className="blog-genre-btn">همه مقالات</button></li>
                        <li className="shrink-0"><button data-active={false} className="blog-genre-btn">تکنولوژی</button></li>
                        <li className="shrink-0"><button data-active={false} className="blog-genre-btn">سلامت و بهداشت</button></li>
                        <li className="shrink-0"><button data-active={false} className="blog-genre-btn">ایده پردازی</button></li>
                        <li className="shrink-0"><button data-active={false} className="blog-genre-btn">هوش مصنوعی</button></li>
                        <li className="shrink-0"><button data-active={false} className="blog-genre-btn">جشنواره ها</button></li>
                        <li className="shrink-0"><button data-active={false} className="blog-genre-btn">طراحی و خلاقیت</button></li>
                    </ul>
                </main>
            </div>
        </section>
    );
}