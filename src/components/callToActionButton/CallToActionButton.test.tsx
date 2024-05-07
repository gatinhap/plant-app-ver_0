import { expect, vi } from "vitest";
import CallToActionButton from "./CallToActionButton.tsx";
import { fireEvent, render } from "@testing-library/react";
import { theme } from "../../theme/theme.ts";
import { ThemeProvider } from "styled-components";

const onClickMock = vi.fn();

test("CTA button onClick event calls function when button is clicked", () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <CallToActionButton handleClick={onClickMock}>
        click me
      </CallToActionButton>
    </ThemeProvider>
  );

  const CTA = getByText("click me");

  fireEvent.click(CTA);

  expect(onClickMock).toHaveBeenCalledTimes(1);
});
