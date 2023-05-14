import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Orders from ".";

describe("Seller Orders", () => {
  test("Seller Orders rendres correctly", () => {
    render(<Orders />);
    const spanElement = screen.getByText(/سفارش‌ها/i);
    expect(spanElement).toBeInTheDocument();
  });
});
