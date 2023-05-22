import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SellerPanelSidebar from ".";
import { UserContextProvider } from "../../../store/UserContext";
import { BrowserRouter as Router } from "react-router-dom";

describe("Seller panel sidebar", () => {
  test("Seller panel sidebar should renders correctly", () => {
    render(
      <Router>
        <UserContextProvider>
          <SellerPanelSidebar />
        </UserContextProvider>
      </Router>
    );
    // const product = screen.getByRole("link", { name: "/مدیریت کالاها/i" });
    // expect(product).toBeInTheDocument();

    const product = screen.getByTestId("first");
    expect(product).toBeInTheDocument();

    const orders = screen.getByTestId("second");
    expect(orders).toBeInTheDocument();

    const personalInfo = screen.getByTestId("third");
    expect(personalInfo).toBeInTheDocument();

    const report = screen.getByTestId("forth");
    expect(report).toBeInTheDocument();
  });
});
