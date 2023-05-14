import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Gifts from ".";

describe("Gifts", () => {
  test("Gifts rendres correctly", () => {
    render(<Gifts />);
    const spanElement = screen.getByText(/جوایز/i);
    expect(spanElement).toBeInTheDocument();
  });
});
