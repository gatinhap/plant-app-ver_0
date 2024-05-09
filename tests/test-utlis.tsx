import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme/theme";
import { render, RenderOptions } from "@testing-library/react";

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };
  return render(ui, { wrapper: ThemeProviderWrapper, ...options });
};

export { customRender as render };
