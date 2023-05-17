import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Seller panel sidebar", () => {
  test("Seller panel sidebar should renders correctly", () => {
    const product = screen.getByRole("link", { name: "/مدیریت کالاها/i" });
    expect(product).toBeInTheDocument();

    const product = screen.getByRole("link", { name: "/مدیریت کالاها/i" });
    expect(product).toBeInTheDocument();

    const product = screen.getByRole("link", { name: "/مدیریت کالاها/i" });
    expect(product).toBeInTheDocument();

    const product = screen.getByRole("link", { name: "/مدیریت کالاها/i" });
    expect(product).toBeInTheDocument();
  });
});
