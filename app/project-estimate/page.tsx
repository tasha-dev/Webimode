// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from '@/component/page/section/project-estimate/firstSectionComponent';
import SecondSectionComponent from "@/component/page/section/project-estimate/secondSectionComponent";
import Image from 'next/image';
import GreenLightImage from '@/public/img/project-estimate/img-green-light.svg';
import PurpleLightImage from '@/public/img/project-estimate/img-purple-light.svg';
import ThirdSectionComponent from "@/component/page/section/project-estimate/thirdSectionComponent";

// Defining metadata of page
export const metadata = {title: 'هزینه'}

// Creating and exporting project estimation page as default
export default function ProjectEstimatePage():ReactNode {
    // Returning JSX
    return (
        <>
            <Image alt={'Light image'} src={GreenLightImage.src} width={300} height={300} className={'absolute -z-10 top-[200px] rotate-180 left-0'} />
            <Image alt={'Light image'} src={GreenLightImage.src} width={300} height={300} className={'absolute -z-10 top-[700px] right-0'} />
            <Image alt={'Light image'} src={PurpleLightImage.src} width={300} height={300} className={'absolute -z-10 top-[1400px] left-0'} />
            <FirstSectionComponent />
            <SecondSectionComponent />
            <ThirdSectionComponent />
        </>
    );
}