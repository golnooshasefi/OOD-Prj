import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Report from ".";

describe("Report", () => {
  test("Report renders correctly", () => {
    render(<Report />);
    const spanElement = screen.getByText(/گزارش موجودی/i);
    expect(spanElement).toBeInTheDocument();
  });

  // test("Render the table of information", async () => {
  //   render(<Report />);
  //   const report = await screen.findAllByTestId("tableRow");
  //   expect(report).toHaveLength(3);
  // });
});
