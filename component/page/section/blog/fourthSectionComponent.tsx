// Importing part
import {ReactNode} from "react";
import BlogGenreHeaderComponent from "@/chunk/page/blog/blogGenreHeaderComponent";

// Creating and expoeting fourth section of blog page as default
export default function FourthSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className="mt-[200px] mb-[1000px] bg-theme">
            <div className="container px-[20px] py-[60px]">
                <BlogGenreHeaderComponent link="#" theme="white" highlightedTitle="داغ ترین مقالات"/>
                <main>
                    
                </main>
            </div>
        </section>
    );
}