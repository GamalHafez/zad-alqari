import { render, screen } from "@testing-library/react";
import SocialLinks from "./index";
import { vi } from "vitest";

// Mock next/image
vi.mock("next/image", () => ({
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  default: (props: { src: string }) => <img {...props} />,
}));

describe("SocialLinks Component", () => {
  beforeEach(() => render(<SocialLinks />));

  it("renders a list of social links", () => {
    const list = screen.getByRole("list");
    const links = screen.getAllByRole("link");

    expect(list).toBeVisible();
    expect(links).toHaveLength(2);
  });

  it("renders a LinkedIn link that opens in a new tab", () => {
    const linkedinLink = screen.getByRole("link", { name: /LinkedIn/i });
    expect(linkedinLink).toHaveAttribute(
      "href",
      expect.stringContaining("linkedin.com"),
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
  });

  it("renders a GitHub link that opens in a new tab", () => {
    const githubLink = screen.getByRole("link", { name: /GitHub/i });

    expect(githubLink).toHaveAttribute(
      "href",
      expect.stringContaining("github.com"),
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
  });
});
