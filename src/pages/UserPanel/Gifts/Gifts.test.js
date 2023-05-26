import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Gifts from ".";
import axiosInstance from "../../../axios";
import { useState, useContext } from "react";
import UserContext from "../../../store/UserContext";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  // useContext: jest.fn(),
  useState: jest.fn(),
}));

jest.mock("../../../axios", () => ({
  get: jest.fn(),
  post: jest.fn(),
}));
const mockedUseState = jest.fn();
const gifts = [
  {
    description: "تخفیف 20 درصدی",
    score: 0,
  },
  {
    description: "تخفیف 30 درصدی",
    score: 200,
  },
  {
    description: "ارسال رایگان",
    score: 300,
  },
];

describe("Gifts", () => {
  beforeEach(() => {
    // useContext.mockReturnValue({
    //   type: "",
    //   username: "",
    //   phoneNumber: "",
    //   email: "",
    //   balance: "",
    //   score: "100",
    //   auth: false,
    // });
    axiosInstance.post.mockImplementation(() =>
      Promise.resolve({
        status: 200,
      })
    );
    axiosInstance.get.mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: gifts,
      })
    );
    useState.mockImplementation((init) => [init, mockedUseState]);
    console.log("useState mock");
    console.log(useState);
    console.log("useContext mock");
    console.log(useContext);
  });
  test("Gifts page should rendres correctly", () => {
    render(<Gifts />);
    const spanElement = screen.getByText(/جوایز/i);
    expect(spanElement).toBeInTheDocument();
  });

  test("renders loading spinner when loading is true", () => {
    render(<Gifts />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("Component should renders a list of Giftcards", async () => {
    axiosInstance.get.mockResolvedValue({
      status: 200,
      data: gifts,
    });
    // useState.mockImplementationOnce(() => [false, mockedUseState]);
    useState.mockImplementationOnce(() => [gifts, mockedUseState]);
    console.log("gift render");
    screen.debug();
    render(<Gifts />);

    expect(screen.getByText("تخفیف 20 درصدی")).toBeInTheDocument();
  });
});
