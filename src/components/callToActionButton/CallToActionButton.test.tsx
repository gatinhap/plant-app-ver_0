import { expect, vi } from "vitest";
import CallToActionButton from "./CallToActionButton.tsx";
import { fireEvent } from "@testing-library/react";
import { render } from "../../../tests/test-utlis.tsx";

const onClickMock = vi.fn();

test("CTA button onClick event calls function when button is clicked", () => {
  const { getByText } = render(
    <CallToActionButton handleClick={onClickMock}>click me</CallToActionButton>
  );

  const CTA = getByText("click me");

  fireEvent.click(CTA);

  expect(onClickMock).toHaveBeenCalledTimes(1);
});
