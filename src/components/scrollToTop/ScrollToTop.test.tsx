import { describe, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme/theme.ts";
import ScrollToTop from "./ScrollToTop.tsx";

describe("element onClick event calls function when element is clicked", () => {
  it("calls scrollTo event when element is clicked", () => {
    render(
      <ThemeProvider theme={theme}>
        <ScrollToTop />
      </ThemeProvider>
    );

    const mockButtonElement = screen.getByRole("button");

    const spy = vi.spyOn(window, "scrollTo");

    fireEvent.click(mockButtonElement);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
