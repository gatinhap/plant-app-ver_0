import { expect, vi } from "vitest";
import CallToActionButton from "./CallToActionButton.tsx";
import { fireEvent, render } from "@testing-library/react";
import { theme } from "../../theme/theme.ts";
import { ThemeProvider } from "styled-components";

test("CTA button onClick event calls function when button is clicked", () => {
  const onClickMock = vi.fn();
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <CallToActionButton handleClick={onClickMock}>
        click me
      </CallToActionButton>
    </ThemeProvider>,
  );

  fireEvent.click(getByText("click me"));
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
