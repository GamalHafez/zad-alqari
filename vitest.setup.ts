import "@testing-library/jest-dom/vitest";
import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  Rubik: () => ({
    className: "mocked-rubik-font",
    variable: "--font-rubik",
  }),
}));
