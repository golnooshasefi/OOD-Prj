import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Gifts from ".";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const setState = jest.fn();

describe("Gifts", () => {
  test("Gifts page should rendres correctly", () => {
    render(<Gifts />);
    const spanElement = screen.getByText(/جوایز/i);
    expect(spanElement).toBeInTheDocument();
  });

  test("Component should renders a list of Giftcards", async () => {
    render(<Gifts />);
    const giftcards = await screen.findAllByRole();
    expect(spanElement).toBeInTheDocument();
  });
});
