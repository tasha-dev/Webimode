// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from '@/component/page/section/project-estimate/firstSectionComponent';
import SecondSectionComponent from "@/component/page/section/project-estimate/secondSectionComponent";
import Image from 'next/image';
import GreenLightImage from '@/public/img/project-estimate/img-green-light.svg';
import PurpleLightImage from '@/public/img/project-estimate/img-purple-light.svg';

// Creating and exporting project estimation page as default
export default function ProjectEstimatePage():ReactNode {
    // Returning JSX
    return (
        <>
            <Image alt={'Light image'} src={GreenLightImage.src} width={300} height={300} className={'absolute top-[200px] rotate-180 left-0'} />
            <Image alt={'Light image'} src={GreenLightImage.src} width={300} height={300} className={'absolute top-[700px] right-0'} />
            <Image alt={'Light image'} src={PurpleLightImage.src} width={300} height={300} className={'absolute top-[1400px] left-0'} />
            <FirstSectionComponent />
            <SecondSectionComponent />
        </>
    );
}