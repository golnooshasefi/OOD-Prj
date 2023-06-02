// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import Favorites from ".";
// import { useContext } from "react";
// import axiosInstance from "../../../axios";
// import { useState } from "react";

// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useContext: jest.fn(),
//   useState: jest.fn(),
// }));

// jest.mock("../../../axios", () => ({
//   get: jest.fn(),
//   post: jest.fn(),
// }));
// const mockedUseState = jest.fn();

// const favorites = [
//   {
//     id: 9,
//     product_name: "شلوار آبی",
//     product_price: 200,
//     product_off_percent: 0,
//     upload:
//       "https://ipfs.io/ipfs/bafkreiacxkv7ryv7abglurfujf5tsdclffxrw5dum22fy77i5rg5ydufki",
//   },
// {
//       id: 10,
//       product_name: "شلوار",
//       product_price: 200,
//       product_off_percent: 0,
//       upload:
//         "https://ipfs.io/ipfs/bafkreiacxkv7ryv7abglurfujf5tsdclffxrw5dum22fy77i5rg5ydufki",
//     },
// ];

// describe("Favorites", () => {
//   beforeEach(() => {
//     useContext.mockReturnValue({
//       type: "",
//       username: "",
//       phoneNumber: "",
//       email: "",
//       balance: "",
//       score: "",
//       auth: false,
//     });
//     axiosInstance.post.mockImplementation(() =>
//       Promise.resolve({
//         status: 200,
//       })
//     );
//     axiosInstance.get.mockImplementation(() =>
//       Promise.resolve({
//         status: 200,
//         data: gifts,
//       })
//     );
//     useState.mockImplementation((init) => [init, mockedUseState]);
//     console.log("useState mock");
//     console.log(useState);
//     console.log("useContext mock");
//     console.log(useContext);
//   });
//   test("Favorites rendres correctly", () => {
//     render(<Favorites />);
//     const spanElement = screen.getByText(/لیست علاقه‌مندی‌ها/i);
//     expect(spanElement).toBeInTheDocument();
//   });
//   // test("renders loading spinner when loading is true", () => {
//   //   render(<Gifts />);
//   //   expect(screen.getByTestId("loader")).toBeInTheDocument();
//   // });

//   test("Component should renders a list of favorite products", async () => {
//     axiosInstance.get.mockResolvedValue({
//       status: 200,
//       data: favorites,
//     });
//     useState.mockImplementationOnce(() => [false, mockedUseState]);
//     useState.mockImplementationOnce(() => [favorites, mockedUseState]);
//     console.log("gift render");
//     render(<Favorites />);

//     expect(screen.getByText("شلوار آبی")).toBeInTheDocument();
//   });
// test("Rendered favorites list should have lenght of 2", () => {
//   axiosInstance.get.mockResolvedValue({
//     status: 200,
//     data: favorites,
//   });
//   useState.mockImplementationOnce(() => [false, mockedUseState]);
//   useState.mockImplementationOnce(() => [favorites, mockedUseState]);
//   expect(favorites).toHaveLength(2);
// });
// });
