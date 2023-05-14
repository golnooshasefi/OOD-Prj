import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AddProduct from ".";
import { BrowserRouter as Router } from "react-router-dom";

describe("َAdd Product", () => {
  test("Add product renders correctly", () => {
    render(
      <Router>
        <AddProduct />
      </Router>
    );
    const spanElement = screen.getByText(/افزودن کالا/i);
    expect(spanElement).toBeInTheDocument();
  });
});
