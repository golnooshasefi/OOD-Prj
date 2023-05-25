import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Login } from ".";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { server } from "../../../mocks/server";
import { UserContextProvider } from "../../../store/UserContext";
import { toast } from "react-toastify";

jest.mock("react-toastify", () => ({
  ToastContainer: jest.fn(),
  toast: {
    success: jest.fn(),
  },
}));

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

  // test("submits the login form with valid credentials", async () => {
  //   const successMessage = "ثبت نام با موفقیت انجام شد";
  //   toast.success.mockImplementation(() => {
  //     render(
  //       <>
  //         <div>{successMessage}</div>
  //       </>
  //     );
  //   });
  //   render(<Login />);
  //   const emailInput = screen.getByPlaceholderText("ایمیل");
  //   const passwordInput = screen.getByPlaceholderText("رمز عبور");
  //   const submitButton = screen.getByRole("button", { name: "ورود" });

  //   fireEvent.change(emailInput, { target: { value: "maryam@gmail.com" } });
  //   fireEvent.change(passwordInput, { target: { value: "ABCD" } });
  //   fireEvent.click(submitButton);
  //   expect(screen.getByText(successMessage)).toBeInTheDocument();
  //   // render(
  //   //   <Router>
  //   //     <Login />
  //   //   </Router>
  //   // );

  //   expect(screen.getByText(successMessage)).toBeInTheDocument();
  //   // const successToast = screen.findByRole("alert");
  //   // expect(successToast).toBeInTheDocument();
  // });
});

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
