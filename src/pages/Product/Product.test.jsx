import { render, screen } from "@testing-library/react";
import { useState, useContext, useParams, useLocation } from "react";
import Product from ".";
import UserContext from "../../store/UserContext";
import { UserContextProvider } from "../../store/UserContext";
import axiosInstance from "../../axios";
import { Route, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

jest.mock("../../components/layout/MainNavigation", () => jest.fn());

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
  useState: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    productId: "1",
  }),
  useLocation: jest.fn(),
  // Link: ({ children }) => <div>{children}</div>,
  useRouteMatch: () => ({ url: "/products-list/1" }),
}));

jest.mock("../../axios", () => ({
  get: jest.fn(),
  post: jest.fn(),
}));

// jest.mock("../../store/UserContext");

const mockedUseState = jest.fn();

const product = {
  product_id: 1,
  product_name: "product1",
  product_price: 156,
  inventory: 10,
  product_size: "L",
  product_group: "شلوار",
  product_color: "red",
  product_height: 160,
  Product_design: "design",
  product_material: "mat",
  product_country: "Iran",
  product_off_percent: "25",
  Is_available: 1,
  upload: "IMAGE_URL",
};

describe("Product Component", () => {
  // const setState = jest.fn();
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
    console.log("useContext");
    console.log(useContext);
    axiosInstance.post.mockImplementation(() =>
      Promise.resolve({
        status: 200,
      })
    );
    axiosInstance.get.mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: {
          product,
        },
      })
    );
    useState.mockImplementation((init) => [init, mockedUseState]);
    // console.log("useParams");
    // console.log(useParams);
    // useParams.mockReturnValue({ id: "1" });
    // jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });
    // useLocation.mockReturnValue({ pathname: "/products-list/1" });
  });
  test("renders loading spinner when loading is true", () => {
    // render(
    // <Router>
    // <UserContextProvider>
    // <Product />
    /* </UserContextProvider> */
    // </Router>
    // );
    render(<Product />);

    screen.debug();
    expect(screen.getByTestId("loader")).toBeInTheDocument();
    // screen.debug();
  });
});
