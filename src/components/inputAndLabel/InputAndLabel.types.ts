import {ChangeEvent, KeyboardEvent, ReactNode} from "react";

export type InputFieldProps = {
    height: string,
    type: string,
    value: string,
    name: string,
    placeholder?: string,
    accept?: string
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void | undefined,
    onKeyDown?: (event: KeyboardEvent<HTMLElement | undefined>) => void | undefined,
}

export type LabelFieldProps = {
    children: ReactNode,
}