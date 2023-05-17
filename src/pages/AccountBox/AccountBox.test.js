import React, { useState as useStateMock } from "react";
import { render, screen } from "@testing-library/react";
import AccountBox from "./index.js";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { UserContextProvider } from "../../store/UserContext.js";
// import React, { useState as useStateMock } from 'react';

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
const setState = jest.fn();

describe("AccountBox Component", () => {
  beforeEach(() => {
    useStateMock.mockImplementation((init: any) => [init, setState]);
  });

  // test("renders AccountBox with signin active", () => {
  //   render(
  //     <Router>
  //       <AccountBox />
  //     </Router>
  //   );
  //   const signinHeader = screen.getByText(
  //     "لطفا برای ادامه، وارد حساب کاربری خود شوید."
  //   );
  //   expect(signinHeader).toBeInTheDocument();
  // });

  test("renders AccountBox with signin active", () => {
    // render(<AccountBox active="signin" />);
    useStateMock.mockImplementationOnce(() => ["signup", setState]);

    render(
      <Router>
        <UserContextProvider>
          <AccountBox />
        </UserContextProvider>
      </Router>
    );
    const signinHeader = screen.getByText(
      "لطفا برای ادامه، وارد حساب کاربری خود شوید."
    );
    // const signinForm = screen.getByTestId("signin-form");
    expect(signinHeader).toBeInTheDocument();
    // expect(signinForm).toBeInTheDocument();
  });

  //   test("renders AccountBox with signin active 2", () => {
  //     useStateMock.mockImplementationOnce(() => ["signup", setState]);

  //     render(
  //       <Router>
  //         <UserContextProvider>
  //           <AccountBox />
  //         </UserContextProvider>
  //       </Router>
  //     );
  //     const signinHeader = screen.getByText(
  //       "لطفا برای ادامه، حساب کاربری خود را بسازید."
  //     );
  //     expect(signinHeader).toBeInTheDocument();
  //   });
});
