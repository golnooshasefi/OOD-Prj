import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "../../store/UserContext";
import ProductsList from ".";

describe("Products List", () => {
  test("Products List rendres correctly", () => {
    render(
      <Router>
        <UserContextProvider>
          <ProductsList />
        </UserContextProvider>
      </Router>
    );
    const headerElement = screen.getByRole("heading", { name: /محصولات/i });
    expect(headerElement).toBeInTheDocument();

    const filterElement = screen.getByRole("heading", { name: /فیلترها/i });
    expect(filterElement).toBeInTheDocument();

    const categoryElement = screen.getByRole("link", { name: /دسته‌بندی‌ها/i });
    expect(categoryElement).toBeInTheDocument();
  });
});
