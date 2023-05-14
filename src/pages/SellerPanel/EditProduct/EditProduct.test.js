import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import EditProduct from ".";

describe("Edit Product", () => {
  test("Edit product renders correctly", () => {
    render(<EditProduct />);
    const spanElement = screen.getByText(/ویرایش کالا/i);
    expect(spanElement).toBeInTheDocument();
  });
});
