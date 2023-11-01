import {ReactNode} from "react";

export type InputFieldProps = {
    height: string,
    type: string,
    placeholder?: string,
    accept?: string,
};

export type LabelFieldProps = {
    children: ReactNode,
}