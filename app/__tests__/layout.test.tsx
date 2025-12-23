import { render, screen } from "@testing-library/react";
import RootLayout from "@app/layout";

describe("RootLayout", () => {
  beforeEach(() => {
    render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>,
    );
  });

  it("renders the header component", () => {
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeVisible();
  });

  it("renders children correctly", () => {
    const childElement = screen.getByText("Test Child");
    expect(childElement).toBeVisible();
  });
});
