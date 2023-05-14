import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PersonalInfo from ".";

describe("Personal Info", () => {
  test("Personal Info", () => {
    render(<PersonalInfo />);
    const spanElement = screen.getByText(/اطلاعات حساب کاربری/i);
    expect(spanElement).toBeInTheDocument();
  });
});
