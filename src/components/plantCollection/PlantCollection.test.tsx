import { describe } from "vitest";
import { server } from "../../../tests/setupMockServer.ts";
import PlantCollection from "./PlantCollection.tsx";
import { render } from "../../../tests/test-utlis.tsx";
import { screen } from "@testing-library/react";
import {
  getPlantsListSuccessHandler,
  getUserSuccessHandler
} from "../../../tests/requestHandlers.ts";

describe("list of plants is displayed", () => {
  beforeEach(() => {
    server.use(getUserSuccessHandler, getPlantsListSuccessHandler);
  });

  it("should display list of plants", async () => {
    render(<PlantCollection />);

    const plantElement = await screen.findByText("monstera");

    await expect(plantElement).toBeVisible();
  });
});
