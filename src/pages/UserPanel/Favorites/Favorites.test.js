import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Favorites from ".";

describe("Favorites", () => {
  test("Favorites rendres correctly", () => {
    render(<Favorites />);
    const spanElement = screen.getByText(/لیست علاقه‌مندی‌ها/i);
    expect(spanElement).toBeInTheDocument();
  });
});
