import { describe, vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../../tests/test-utlis.tsx";
import LogoutButton from "./LogoutButton.tsx";

const onClickMock = vi.fn();

describe("logout button functionality", () => {
  it("calls function when button is clicked", () => {
    render(
      <LogoutButton handleClick={onClickMock}>logout button</LogoutButton>
    );

    const buttonElement = screen.getByText("logout button");

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
