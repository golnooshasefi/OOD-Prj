import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeroSection from ".";

describe("Hero Section", () => {
  test("HeroSection renders correctly", () => {
    render(<HeroSection />, { wrapper: MemoryRouter });
    const headingElemnt = screen.getByRole("heading", {
      name: /انتخاب سبک لباس خود را به ما بسپارید/i,
    });
    expect(headingElemnt).toBeInTheDocument();

    const productsElement = screen.getByRole("button", {
      name: /مشاهده محصولات/i,
    });
    expect(productsElement).toBeInTheDocument();

    const QElement = screen.getByRole("button", { name: /سوالات متداول/i });
    expect(QElement).toBeInTheDocument();
  });
});
