import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Report from ".";

describe("Report", () => {
  test("Report renders correctly", () => {
    render(<Report />);
    const spanElement = screen.getByText(/گزارش موجودی/i);
    expect(spanElement).toBeInTheDocument();
  });
});
