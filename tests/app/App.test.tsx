import { describe } from "vitest";
import "@testing-library/jest-dom";
import { render } from "../test-utlis";
import App from "../../src/App";
import { fireEvent, screen } from "@testing-library/react";

describe("react router functionality", async () => {
  it("should navigate between two routes and render corresponding components", () => {
    render(<App />);

    expect(screen.getByText("hej, tu PlantMomma")).toBeInTheDocument();

    const linkElement = screen.getByText("Zarejestruj");

    fireEvent.click(linkElement);

    screen.debug();

    expect(screen.getByText("nazwa użytkownika"));
  });
});
