import {ReactNode} from "react";

export type PlantImageProps = {
    imgSrc: string,
    isCustomImage: boolean
}

export type PlantInfoProps = {
    children: ReactNode,
    title: string,
}

export type PlantNavItemProps = {
    children: ReactNode;
    backgroundColor: string,
    color: string,
    linkTo: string,
}