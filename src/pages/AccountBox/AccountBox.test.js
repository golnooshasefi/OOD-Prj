import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import AccountBox from "./index.js";
import "@testing-library/jest-dom";
import React, { useState as useStateMock } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const setState = jest.fn();

describe("AccountBox Component", () => {
  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  test("renders AccountBox with signup active", () => {
    useStateMock.mockImplementation(() => ["signup", setState]);

    render(
      <Router>
        <AccountBox />
      </Router>
    );

    const signupHeader = screen.getByText(
      "لطفا برای ادامه، حساب کاربری خود را بسازید."
    );

    expect(signupHeader).toBeInTheDocument();
  });

  // test("renders AccountBox with signin active", () => {
  //   useStateMock.mockImplementationOnce(() => ["signin", setState]);

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
});
