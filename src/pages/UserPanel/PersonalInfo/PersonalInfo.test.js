import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PersonalInfo from ".";

describe("User Personal Info renders correctly", () => {
  test("Personal Info", () => {
    render(<PersonalInfo />);
    const spanElement = screen.getByText(/اطلاعات حساب کاربری/i);
    expect(spanElement).toBeInTheDocument();
  });
});
