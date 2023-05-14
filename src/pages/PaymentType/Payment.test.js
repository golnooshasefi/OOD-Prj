import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PaymentType from ".";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "../../store/UserContext";

describe("Payment", () => {
  test("Payment page renders correctly", () => {
    render(
      <Router>
        <UserContextProvider>
          <PaymentType />
        </UserContextProvider>
      </Router>
    );
    const heading = screen.getByRole("heading", { name: /انتخاب روش پرداخت/i });
    expect(heading).toBeInTheDocument();
  });
});
