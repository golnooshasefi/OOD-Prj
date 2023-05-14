import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import InfoSection from ".";

describe("Info Section", () => {
  test("rendres correctly", () => {
    render(<InfoSection />);
    const headingElement = screen.getByRole("heading", {
      name: /ما به شما دقیق ترین پیشنهاد را ارائه میدهیم/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
