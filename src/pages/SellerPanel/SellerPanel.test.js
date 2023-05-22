import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import SellerPanel from ".";
import { UserContextProvider } from "../../store/UserContext";
import { BrowserRouter as Router } from "react-router-dom";
import user from "@testing-library/user-event";

describe("Seller panel sidebar", () => {
  test("Seller panel sidebar should renders correctly", () => {
    render(
      <Router>
        <UserContextProvider>
          <SellerPanel />
        </UserContextProvider>
      </Router>
    );

    const product = screen.getByTestId("first");
    expect(product).toBeInTheDocument();

    const orders = screen.getByTestId("second");

    expect(orders).toBeInTheDocument();

    const personalInfo = screen.getByTestId("third");
    expect(personalInfo).toBeInTheDocument();

    const report = screen.getByTestId("forth");
    expect(report).toBeInTheDocument();
  });

  test("Add/Edit product should render on clicking sidebar item", async () => {
    render(
      <Router>
        <UserContextProvider>
          <SellerPanel />
        </UserContextProvider>
      </Router>
    );
    user.setup();

    await user.click(screen.getByText(/افزودن کالا/i));
    expect(screen.getByText(/افزودن کالا/i)).toBeInTheDocument();

    await user.click(screen.getByText(/ویرایش کالا/i));
    expect(screen.getByText(/ویرایش کالا/i)).toBeInTheDocument();
  });

  test("Orders should render on clicking sidebar item", async () => {
    render(
      <Router>
        <UserContextProvider>
          <SellerPanel />
        </UserContextProvider>
      </Router>
    );
    user.setup();

    await user.click(screen.getByText(/سفارش‌ها/i));
    expect(screen.getByText(/سفارش‌ها/i)).toBeInTheDocument();
  });

  test("Personal Info should render on clicking sidebar item", async () => {
    render(
      <Router>
        <UserContextProvider>
          <SellerPanel />
        </UserContextProvider>
      </Router>
    );
    user.setup();

    await user.click(screen.getByText(/اطلاعات حساب کاربری/i));
    expect(screen.getByText(/اطلاعات حساب کاربری/i)).toBeInTheDocument();
  });

  //   test("Report should render on clicking sidebar item", async () => {
  //     render(
  //       <Router>
  //         <UserContextProvider>
  //           <SellerPanel />
  //         </UserContextProvider>
  //       </Router>
  //     );
  //     user.setup();

  //     await user.click(screen.getByText(/گزارش کالاها/i));
  //     expect(screen.getByText(/گزارش موجودی/i)).toBeInTheDocument();
  //   });

  //   describe("App", () => {
  it("Reacts to url changes when touching the button", async () => {
    render(
      <Router>
        <UserContextProvider>
          <SellerPanel />
        </UserContextProvider>
      </Router>
    );
    await user.click(screen.getByText(/گزارش کالاها/i));

    expect(await screen.findByText(/کزارش موجودی/i)).toBeInTheDocument();
  });
  //   });
});
