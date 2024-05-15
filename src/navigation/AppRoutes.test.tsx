import { describe } from "vitest";
import "@testing-library/jest-dom";
import { render } from "../../tests/test-utlis.tsx";
import { fireEvent, screen } from "@testing-library/react";
import AppRoutes from "./AppRoutes.tsx";

describe("react router functionality", async () => {
  it("should navigate between two routes and render corresponding components", () => {
    render(<AppRoutes />);

    const elementInTheFirstLocation = screen.getByText("hej, tu PlantMomma");

    expect(elementInTheFirstLocation).toBeVisible();

    const linkElement = screen.getByText("Zarejestruj");

    fireEvent.click(linkElement);

    const elementInTheSecondLocation = screen.getByText("nazwa użytkownika");

    expect(elementInTheSecondLocation).toBeVisible();
  });
});
