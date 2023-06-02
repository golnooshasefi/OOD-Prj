// import React from "react";
import React, { useState as useStateMock } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ForgotPassword from ".";
import { MemoryRouter, useNavigate } from "react-router-dom";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { UserContextProvider } from "../../../store/UserContext";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const server = setupServer(
  rest.post("accounts/reset_password/", (req, res, ctx) => {
    return res(ctx.status(200));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("ForgotPassword component", () => {
  test("ForgotPAssword should renders correctly", () => {
    render(
      <MemoryRouter>
        <UserContextProvider>
          <ForgotPassword />
        </UserContextProvider>
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText("ایمیل");
    const resetButton = screen.getByRole("button", { name: "بازیابی" });

    expect(emailInput).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  // test("Success notification should render on submition click by user", async () => {
  //   render(
  //     <MemoryRouter>
  //       <UserContextProvider>
  //         <ForgotPassword />
  //       </UserContextProvider>
  //     </MemoryRouter>
  //   );

  //   const emailInput = screen.getByPlaceholderText("ایمیل");
  //   fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });

  //   const submitBtn = screen.getByText("بازیابی");
  //   fireEvent.click(submitBtn);

  //   const successToast = await screen.findByText("لطفا ایمیل خود را چک کنید.");

  //   expect(successToast).toBeInTheDocument();
  // });

  test("Should navigate to login/signup on click button", () => {
    render(
      <MemoryRouter>
        <UserContextProvider>
          <ForgotPassword />
        </UserContextProvider>
      </MemoryRouter>
    );

    const buttonElement = screen.getByText("ورود | ثبت‌نام");
    fireEvent.click(buttonElement);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/account-box");
  });
});
