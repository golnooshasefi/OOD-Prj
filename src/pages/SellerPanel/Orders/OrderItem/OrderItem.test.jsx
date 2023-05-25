import "@testing-library/jest-dom";
import "react-router-dom";
import React, { useContext, useState } from "react";
import { render, screen } from "@testing-library/react";
import OrderItem from ".";
import axiosInstance from "../../../../axios";
import UserContext from "../../../../store/UserContext";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
  useState: jest.fn(),
}));

jest.mock("../../../../axios", () => ({
  get: jest.fn(),
  post: jest.fn(),
}));

jest.mock("../../../../store/UserContext");
const mockedUseState = jest.fn();

const order = {
  id: 9,
  product_name: "شلوار آبی",
  product_size: "XL",
  product_color: "آبی",
  product_price: 200,
  Inventory: 2,
  upload:
    "https://ipfs.io/ipfs/bafkreiacxkv7ryv7abglurfujf5tsdclffxrw5dum22fy77i5rg5ydufk",
  shop_id: 2,
};

describe("OrderItem Component", () => {
  const mockSetBooks = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    useContext.mockReturnValue({
      type: "",
      username: "",
      phoneNumber: "",
      email: "",
      balance: "",
      score: "",
      auth: false,
    });
    axiosInstance.post.mockImplementation(() =>
      Promise.resolve({
        status: 200,
      })
    );
    axiosInstance.get.mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: {
          order,
        },
      })
    );
    useState.mockImplementation((init) => [init, mockedUseState]);
  });
  test("Renders Order items details", () => {
    render(
      <OrderItem
        name={order.product_name}
        price={order.product_price}
        img={order.upload}
        size={order.product_size}
        color={order.product_color}
      />
    );
    const productName = screen.getByText(order.product_name);
    expect(productName).toBeInTheDocument();

    const productSize = screen.getByText(order.product_size);
    expect(productSize).toBeInTheDocument();
  });
});
