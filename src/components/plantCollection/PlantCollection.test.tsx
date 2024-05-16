import { describe } from "vitest";
import { server } from "../../../tests/setupMockServer.ts";
import { getPlantsListSuccessHandler } from "../../../tests/requestHandlers.ts";
import PlantCollection from "./PlantCollection.tsx";
import { render } from "../../../tests/test-utlis.tsx";
import { screen } from "@testing-library/react";

describe("list of plants is displayed", () => {
  beforeEach(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  server.use(getPlantsListSuccessHandler);

  it("should display list of plants", async () => {
    //arrange
    render(<PlantCollection />);

    //act
    const plantElement = await screen.getByText("monstera");

    screen.debug();

    //assert
    await expect(plantElement).toBeVisible();
  });
});
