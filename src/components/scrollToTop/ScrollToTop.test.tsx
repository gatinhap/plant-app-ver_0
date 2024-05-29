import { describe, vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import ScrollToTop from "./ScrollToTop.tsx";
import { render } from "../../../tests/test-utlis.tsx";

// @vitest-environment happy-dom
describe("element onClick event calls function when element is clicked", () => {
  it("calls scrollTo event when element is clicked", () => {
    render(<ScrollToTop />);

    const mockButtonElement = screen.getByRole("button");

    const spy = vi.spyOn(window, "scrollTo");

    fireEvent.click(mockButtonElement);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
