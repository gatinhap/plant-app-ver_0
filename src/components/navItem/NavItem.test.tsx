import { render } from "../../../tests/test-utlis.tsx";
import NavItem from "./NavItem.tsx";
import { fireEvent, screen } from "@testing-library/react";

test("path of the current page should match link path", () => {
  render(<NavItem linkTo={"/test-page"}>link</NavItem>);

  const linkElement = screen.getByText("link");

  fireEvent.click(linkElement);

  expect(window.location.pathname).toBe("/test-page");
});
