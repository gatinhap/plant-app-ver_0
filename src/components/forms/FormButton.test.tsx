import { describe, vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../../tests/test-utlis.tsx";
import FormButton from "./FormButton.tsx";

const onClickMock = vi.fn();

describe("form button onClick functionality", () => {
  it("calls function when button is clicked", () => {
    render(
      <FormButton handleClick={onClickMock} type={"submit"}>
        submit button
      </FormButton>
    );

    const buttonElement = screen.getByText("submit button");

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
