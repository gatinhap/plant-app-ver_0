import { describe } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import InputField from "./InputField.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme/theme.ts";

describe("Input field attributes are accepted", () => {
  it("renders placeholder text", () => {
    render(
      <ThemeProvider theme={theme}>
        <InputField placeholder={"placeholder text"} />
      </ThemeProvider>,
    );

    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText("placeholder text");

    expect(inputElement.placeholder).toBe("placeholder text");
  });

  it("allows adding type attribute", () => {
    render(
      <ThemeProvider theme={theme}>
        <InputField data-testid={"input"} type={"file"} />
      </ThemeProvider>,
    );

    const inputElement: HTMLInputElement = screen.getByTestId("input");

    expect(inputElement.type).toBe("file");
  });

  it("allows to upload image file", async () => {
    render(
      <ThemeProvider theme={theme}>
        <InputField data-testid={"input"} type={"file"} />
      </ThemeProvider>,
    );

    const imageFile = new File(["image"], "image.png", {
      type: "image/png",
    });
    const inputElement: HTMLInputElement = screen.getByTestId("input");

    await waitFor(() =>
      fireEvent.change(inputElement, {
        target: { files: [imageFile] },
      }),
    );

    expect(inputElement.files[0].name).toBe("image.png");
    expect(inputElement.files.length).toBe(1);
  });
});
