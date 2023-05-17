import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import MainNavigation from "./MainNavigation";
import { UserContextProvider } from "../../store/UserContext";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
// import { userEvent } from "@testing-library/user-event";
import user from "@testing-library/user-event";

describe("Main Navigation", () => {
  test("Main naviagtion renders correctly", () => {
    render(
      <Router>
        <UserContextProvider>
          <MainNavigation />
        </UserContextProvider>
      </Router>
    );

    const sabkino = screen.getByRole("link", {
      name: /سبکینو/i,
    });
    expect(sabkino).toBeInTheDocument();

    const products = screen.getByRole("link", {
      name: /محصولات/i,
    });
    expect(products).toBeInTheDocument();

    const navigation = screen.getByRole("navigation");
    within(navigation).getByRole("link", { name: /درباره ما/i });

    const link = screen.getByRole("link", { name: /فروشنده شوید/i });
    within(link).getByRole("listitem");

    const loginBtn = screen.getByRole("button", { name: /ورود \| ثبت‌نام/i });
    expect(loginBtn).toBeInTheDocument();
  });

  test("Correct Navigating in navbar", async () => {
    render(
      <UserContextProvider>
        <MainNavigation />
      </UserContextProvider>,
      { wrapper: Router }
    );
    user.setup();

    // verify page content for default route
    expect(screen.getByText(/سبکینو/i)).toBeInTheDocument();

    await user.click(screen.getByText(/محصولات/i));
    expect(screen.getByText(/محصولات/i)).toBeInTheDocument();
  });
});
