import {ReactNode} from "react";

export type NavItemProps = {
    children: ReactNode;
    backgroundColor: string,
    color: string,
    linkTo: string,
    shouldDisplay?: boolean,
}