import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Orders from ".";
import axiosInstance from "../../../axios";
import React, { useContext, useState } from "react";
import UserContext from "../../../store/UserContext";
import { BrowserRouter as Router } from "react-router-dom";
import { BeatLoader } from "react-spinners";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

jest.mock("../../../axios", () => ({
  get: jest.fn(),
  post: jest.fn(),
}));

const mockedUseState = jest.fn();

const orders = [
  {
    id: 9,
    product_name: "شلوار آبی",
    product_size: "XL",
    product_color: "آبی",
    product_price: 200,
    Inventory: 2,
    upload:
      "https://ipfs.io/ipfs/bafkreiacxkv7ryv7abglurfujf5tsdclffxrw5dum22fy77i5rg5ydufk",
    shop_id: 2,
  },
  {
    id: 9,
    product_name: "تیشرت قرمز",
    product_size: "M",
    product_color: "قرمز",
    product_price: 300,
    Inventory: 100,
    upload:
      "https://ipfs.io/ipfs/bafkreiacxkv7ryv7abglurfujf5tsdclffxrw5dum22fy77i5rg5ydufk",
    shop_id: 2,
  },
];
describe("Seller Orders Component", () => {
  beforeEach(() => {
    axiosInstance.post.mockImplementation(() =>
      Promise.resolve({
        status: 200,
      })
    );
    axiosInstance.get.mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: {
          orders,
        },
      })
    );
    useState.mockImplementation((init) => [init, mockedUseState]);
  });

  test("Seller Orders rendres correctly", () => {
    render(<Orders />);
    const spanElement = screen.getByText(/سفارش‌ها/i);
    expect(spanElement).toBeInTheDocument();
  });

  // test("renders loading spinner when loading is true", () => {
  //   useState.mockImplementationOnce(() => [true, mockedUseState]);

  //   render(
  //     <>
  //       <Orders />
  //     </>
  //   );
  //   const spinner = screen.getByTestId("loader");
  //   expect(spinner).toBeInTheDocument();
  // });

  test("OrderItem should render when loading is false", async () => {
    axiosInstance.get.mockResolvedValue({
      status: 200,
      data: {
        orders,
      },
    });
    useState.mockImplementationOnce(() => [false, mockedUseState]);
    useState.mockImplementationOnce(() => [orders, mockedUseState]);
    render(<Orders />);

    expect(screen.getByText("شلوار آبی")).toBeInTheDocument();
    expect(screen.getByText("تیشرت قرمز")).toBeInTheDocument();
  });
});
