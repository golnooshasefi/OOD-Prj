import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import EditProduct from ".";
import axiosInstance from "../../../axios";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

jest.mock("../../../axios", () => ({
  get: jest.fn(),
  post: jest.fn(),
}));
const mockedUseState = jest.fn();
const products = [
  {
    id: 8,
    product_name: "پیراهن مشکی",
    product_price: 200,
    product_off_percent: 0,
    inventory: 8,
    upload:
      "https://ipfs.io/ipfs/bafkreiffe7kynfojrzm4qwjmtog2lnstipno2ewcnlgs3bza3ytgyp2hbu",
    shop_id: 2,
  },
  {
    id: 8,
    product_name: "پیراهن آبی",
    product_price: 200,
    product_off_percent: 0,
    inventory: 8,
    upload:
      "https://ipfs.io/ipfs/bafkreiffe7kynfojrzm4qwjmtog2lnstipno2ewcnlgs3bza3ytgyp2hbu",
    shop_id: 2,
  },
];

describe("Edit Product Page", () => {
  beforeEach(() => {
    // axiosInstance.post.mockImplementation(() =>
    //   Promise.resolve({
    //     status: 200,
    //   })
    // );
    axiosInstance.get.mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: {
          products: [],
        },
      })
    );
    useState.mockImplementation((init) => [init, mockedUseState]);
  });
  test("Edit product renders correctly", () => {
    render(<EditProduct />);
    const spanElement = screen.getByText(/ویرایش کالا/i);
    expect(spanElement).toBeInTheDocument();
  });

  // test("renders loading spinner when loading is true", () => {
  //   render(<EditProduct />);
  //   expect(screen.getByTestId("loader")).toBeInTheDocument();
  // });
  // test("Products of shop should render if loading is false", () => {
  //   axiosInstance.get.mockResolvedValue({
  //     status: 200,
  //     data: {
  //       products: [],
  //     },
  //   });
  //   console.log("first debug");
  //   screen.debug();
  //   useState.mockImplementationOnce(() => [false, mockedUseState]);
  //   useState.mockImplementationOnce(() => [products, mockedUseState]);
  //   console.log("second debug");
  //   screen.debug();
  //   render(
  //     <Router>
  //       <EditProduct />
  //     </Router>
  //   );

  //   expect(screen.getByText("پیراهن مشکی")).toBeInTheDocument();
  // });
});
