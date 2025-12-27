import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { vi } from "vitest";

// Mock SocialLinks
vi.mock("@components/social-links", () => ({
  default: () => <nav aria-label="social links" />,
}));

describe("Header component", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("renders the site title and logo image", () => {
    const pageTitle = screen.getByText("زاد القارئ");
    expect(pageTitle).toBeVisible();
  });

  it("renders the logo image", () => {
    const logo = screen.getByAltText("Page logo");
    expect(logo).toBeVisible();
  });

  it("links the site title to the home page", () => {
    const homeLink = screen.getByRole("link", { name: /زاد القارئ/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders the social links section", () => {
    expect(
      screen.getByRole("navigation", { name: /social links/i }),
    ).toBeVisible();
  });
});
