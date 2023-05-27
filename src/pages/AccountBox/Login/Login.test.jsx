import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Login } from ".";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import "@testing-library/jest-dom";
import { UserContextProvider } from "../../../store/UserContext";
import { toast } from "react-toastify";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
const mockedUsedNavigate = jest.fn();

jest.mock("react-toastify", () => ({
  ToastContainer: jest.fn(),
  toast: {
    success: jest.fn(),
  },
}));

const server = setupServer(
  rest.post("accounts/api/token/", (req, res, ctx) => {
    const { username, password } = req.body;

    if (username === "maryam@gmail.com" && password === "1234") {
      return res(
        ctx.status(200),
        ctx.json({
          refresh:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4MjE0NTU1NSwiaWF0IjoxNjgyMDU5MTU1LCJqdGkiOiI2Y2Y3NjcwNTE3YTA0ZDc3YmQ4YTU1MTQ2YWE4NjdlOCIsInVzZXJfaWQiOjJ9.IFQu-0jiZa3AxLpuEk1A-UY6D1WXByEeLCpafS0qAeg",
          access:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyMDYyNzU1LCJpYXQiOjE2ODIwNTkxNTUsImp0aSI6IjFmOTE4NGNmNDc4NTRkZWU5YzcwYTcyMjI1MGM3NThhIiwidXNlcl9pZCI6Mn0.sTx-oqLAE8Uo9puchMCifmIPseTzlMT13G80bML-_Lg",
          type: "user",
          username: "maryam",
          email: "maryam@gmail.com",
          user_phone_number: "09108949238",
          balance: 0.0,
          score: 4,
        })
      );
    }
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Login Component", () => {
  test("renders Login form", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const emailInput = screen.getByPlaceholderText("ایمیل");
    const passwordInput = screen.getByPlaceholderText("رمز عبور");
    const submitButton = screen.getByRole("button", { name: "ورود" });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("Login should rendres form with password visibility toggle", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const passwordElement = screen.getByPlaceholderText("رمز عبور");
    const toggleButton = screen.getByTestId("pass-icon");
    fireEvent.click(toggleButton);
    expect(passwordElement.type).toBe("text");
    fireEvent.click(toggleButton);
    expect(passwordElement.type).toBe("password");
  });

  test("Sumbit button should be diabeled when inputs are empty", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    const submitButton = screen.getByRole("button", { name: "ورود" });
    expect(submitButton).toBeDisabled();
  });

  test("Submit button should be enabled when inputs are filled", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    const emailElement = screen.getByPlaceholderText("ایمیل");
    const passwordElement = screen.getByPlaceholderText("رمز عبور");
    const submitButton = screen.getByRole("button", { name: "ورود" });

    fireEvent.change(emailElement, { target: { value: "maryam@gmail.com" } });
    fireEvent.change(passwordElement, { target: { value: "ABCD" } });

    expect(submitButton).not.toBeDisabled();
  });

  // test("Should navigate to homepage if user click on submit btn", () => {
  //   render(
  //     <Router>
  //       <Login />
  //     </Router>
  //   );
  //   const submitBtn = screen.getByRole("button", { name: "ورود" });
  //   fireEvent.click(submitBtn);
  //   expect(mockedUsedNavigate).toHaveBeenCalledWith("");
  // });
});
