import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Login } from ".";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { server } from "../../../mocks/server";
import { UserContextProvider } from "../../../store/UserContext";

describe("Login Component", () => {
  test("renders Login form", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
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
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const passwordElement = screen.getByPlaceholderText("رمز عبور");
    const toggleButton = screen.getByTestId("toggle");
    fireEvent.click(toggleButton);
    expect(passwordElement.type).toBe("text");
    fireEvent.click(toggleButton);
    expect(passwordElement.type).toBe("password");
  });

  test("Sumbit button should be diabeled when inputs are empty", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole("button", { name: "ورود" });
    expect(submitButton.disabled).toBe(true);
  });

  test("Submit button should be enabled when inputs are filled", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText("ایمیل");
    const passwordInput = screen.getByPlaceholderText("رمز عبور");
    const submitButton = screen.getByRole("button", { name: "ورود" });

    fireEvent.change(emailInput, { target: { value: "maryam@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "ABCD" } });

    expect(submitButton.disabled).toBe(false);
  });
});

// test("submits the login form with valid credentials", async () => {
//   render(
//     <MemoryRouter>
//       <Login />
//     </MemoryRouter>
//   );
//   const emailInput = screen.getByPlaceholderText("ایمیل");
//   const passwordInput = screen.getByPlaceholderText("رمز عبور");
//   const submitButton = screen.getByRole("button", { name: "ورود" });

//   fireEvent.change(emailInput, { target: { value: "maryam@gmail.com" } });
//   fireEvent.change(passwordInput, { target: { value: "ABCD" } });
//   fireEvent.click(submitButton);

//   const successToast = await screen.findByText("ورود با موفقیت انجام شد!");
//   expect(successToast).toBeInTheDocument();
// });

//   test("submits the login form with invalid credentials and display error", async () => {
//     render(
//       <MemoryRouter>
//         <Login />
//       </MemoryRouter>
//     );
//     const emailInput = screen.getByPlaceholderText("ایمیل");
//     const passwordInput = screen.getByPlaceholderText("رمز عبور");
//     const submitButton = screen.getByRole("button", { name: "ورود" });

//     fireEvent.change(emailInput, { target: { value: "mahdi@gmail.com" } });
//     fireEvent.change(passwordInput, { target: { value: "1234" } });
//     fireEvent.click(submitButton);

//     const successToast = await screen.findByText(
//       "ایمیل یا رمز عبور نامعتبر است"
//     );
//     expect(successToast).toBeInTheDocument();
//   });
