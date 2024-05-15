import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme/theme";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  const queryClient = new QueryClient();

  const AllTheProviders = ({ children }: { children?: ReactNode }) => (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export { customRender as render };
