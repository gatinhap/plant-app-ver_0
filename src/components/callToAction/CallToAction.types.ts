import {ReactNode} from "react";

export type CallToActionProps = {
    children: ReactNode;
    backgroundColor: string,
    color: string,
    handleClick?: () => void | undefined,
}