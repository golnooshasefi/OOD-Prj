import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Signup } from ".";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { rest } from "msw";

jest.useFakeTimers();

// 1- Mocking the hook using jest.fn
const mockedUsedNavigate = jest.fn();

// 2- Mock the library
jest.mock("react-router-dom", () => ({
  // 3- Import non-mocked library and use other functionalities and hooks
  ...jest.requireActual("react-router-dom"),

  // 4- Mock the required hook
  useNavigate: () => mockedUsedNavigate,
}));
const server = setupServer(
  rest.post("/auth/register/", (req, res, ctx) => {
    const { name, email } = req.body;

    if (name === "golnoosh" && email === "golnoosh@gmail.com") {
      return res(
        ctx.status(200),
        ctx.json({
          username: "golnoosh",
          email: "golnoosh@gmail.com",
          user_phone_number: "09073913392",
          balance: 0.0,
          score: 0,
        })
      );
    } else {
      return res(ctx.status(400));
    }
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe("Signup", () => {
  test("Sign up should renders correctly", () => {
    render(
      <Router>
        <Signup />
      </Router>
    );

    const nameELement = screen.getByPlaceholderText("نام و نام‌خانوادگی");
    const emailElement = screen.getByPlaceholderText("ایمیل");
    const phoneElement = screen.getByPlaceholderText("شماره موبایل");
    const passwordElement = screen.getByPlaceholderText("رمز عبور");
    const submitButton = screen.getByRole("button", { name: "ثبت‌نام" });

    expect(nameELement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
    expect(passwordElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("Sign up form's inputs should changed", () => {
    render(
      <Router>
        <Signup />
      </Router>
    );

    const nameElement = screen.getByPlaceholderText("نام و نام‌خانوادگی");
    const emailElement = screen.getByPlaceholderText("ایمیل");
    const phoneElement = screen.getByPlaceholderText("شماره موبایل");
    const passwordElement = screen.getByPlaceholderText("رمز عبور");

    fireEvent.change(nameElement, { target: { value: "Golnoosh" } });
    fireEvent.change(emailElement, { target: { value: "golnoosh@gmail.com" } });
    fireEvent.change(phoneElement, { target: { value: "09237130740" } });
    fireEvent.change(passwordElement, { target: { value: "1234" } });

    expect(nameElement.value).toBe("Golnoosh");
    expect(emailElement.value).toBe("golnoosh@gmail.com");
    expect(phoneElement.value).toBe("09237130740");
    expect(passwordElement.value).toBe("1234");
  });

  test("Password visibility should toggle on user click", () => {
    render(
      <Router>
        <Signup />
      </Router>
    );
    const passwordInput = screen.getByPlaceholderText("رمز عبور");
    const toggleButton = screen.getByTestId("pass-icon");

    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe("text");
    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe("password");
  });

  test("Sumbit button should not be enabled untill all of inputs filled", () => {
    render(
      <Router>
        <Signup />
      </Router>
    );

    const submitBtn = screen.getByRole("button", { name: /ثبت‌نام/i });
    expect(submitBtn).toBeDisabled();
  });

  test("Submit button should be enabled if all of inputs are filled", () => {
    render(
      <Router>
        <Signup />
      </Router>
    );
    const nameELement = screen.getByPlaceholderText("نام و نام‌خانوادگی");
    const emailElement = screen.getByPlaceholderText("ایمیل");
    const phoneElement = screen.getByPlaceholderText("شماره موبایل");
    const passwordElement = screen.getByPlaceholderText("رمز عبور");

    fireEvent.change(nameELement, { target: { value: "Golnoosh" } });
    fireEvent.change(emailElement, { target: { value: "golnoosh@gmail.com" } });
    fireEvent.change(phoneElement, { target: { value: "09237130740" } });
    fireEvent.change(passwordElement, { target: { value: "1234" } });

    const submitBtn = screen.getByRole("button", { name: /ثبت‌نام/i });
    expect(submitBtn).not.toBeDisabled();
  });

  test("An Error notificaion should display if entered value for email is incorrect", async () => {
    render(
      <Router>
        <Signup />
      </Router>
    );
    const nameELement = screen.getByPlaceholderText("نام و نام‌خانوادگی");
    const emailElement = screen.getByPlaceholderText("ایمیل");
    const phoneElement = screen.getByPlaceholderText("شماره موبایل");
    const passwordElement = screen.getByPlaceholderText("رمز عبور");

    fireEvent.change(nameELement, { target: { value: "Golnoosh" } });
    fireEvent.change(emailElement, { target: { value: "golnoosh123" } });
    fireEvent.change(phoneElement, { target: { value: "09237130740" } });
    fireEvent.change(passwordElement, { target: { value: "1234" } });

    const submitBtn = screen.getByRole("button", { name: /ثبت‌نام/i });
    fireEvent.click(submitBtn);

    const errorMessage = await screen.findByText(
      "لطفا یک ایمیل صحیح وارد کنید"
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("An Error notificaion should display if entered value for phone number is incorrect", async () => {
    render(
      <Router>
        <Signup />
      </Router>
    );
    const nameELement = screen.getByPlaceholderText("نام و نام‌خانوادگی");
    const emailElement = screen.getByPlaceholderText("ایمیل");
    const phoneElement = screen.getByPlaceholderText("شماره موبایل");
    const passwordElement = screen.getByPlaceholderText("رمز عبور");

    fireEvent.change(nameELement, { target: { value: "Golnoosh" } });
    fireEvent.change(emailElement, { target: { value: "golnoosh@gmail.com" } });
    fireEvent.change(phoneElement, { target: { value: "0313455213" } });
    fireEvent.change(passwordElement, { target: { value: "1234" } });

    const submitBtn = screen.getByRole("button", { name: /ثبت‌نام/i });
    fireEvent.click(submitBtn);

    const errorMessage = await screen.findByText(
      "لطفا شماره تلفن صحیح وارد کنید"
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
