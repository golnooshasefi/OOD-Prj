import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Orders from ".";

describe("User Orders", () => {
  test("User Orders renders correctly", () => {
    render(<Orders />);
    const spanElement = screen.getByText(/سفارش‌ها/i);
    expect(spanElement).toBeInTheDocument();
  });
});
