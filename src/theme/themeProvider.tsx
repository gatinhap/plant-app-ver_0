import {ThemeProvider} from "styled-components";
import {theme} from "./theme.ts";
import {ReactNode} from "react";

type AppThemeProviderProps = {
    children: ReactNode,
}

const AppThemeProvider = ({children}: AppThemeProviderProps) => {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
};

export default AppThemeProvider;