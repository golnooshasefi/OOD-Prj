import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import AddProduct from ".";
import { BrowserRouter as Router } from "react-router-dom";
import { useForm } from "react-hook-form";

describe("َAdd Product", () => {
  test("Add product renders correctly", () => {
    render(
      <Router>
        <AddProduct />
      </Router>
    );
    const spanElement = screen.getByText(/افزودن کالا/i);
    const nameInput = screen.getByPlaceholderText("عنوان کالا");
    const colorInput = screen.getByPlaceholderText("رنگ محصول");
    const heightInput = screen.getByPlaceholderText("قد محصول");
    const designInput = screen.getByPlaceholderText("طرح");
    const inventoryInput = screen.getByPlaceholderText("موجودی");

    expect(spanElement).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(colorInput).toBeInTheDocument();
    expect(heightInput).toBeInTheDocument();
    expect(designInput).toBeInTheDocument();
    expect(inventoryInput).toBeInTheDocument();
  });
  test("Inputs should change when user type something", () => {
    render(
      <Router>
        <AddProduct />
      </Router>
    );
    const nameInput = screen.getByPlaceholderText("عنوان کالا");
    const colorInput = screen.getByPlaceholderText("رنگ محصول");
    const heightInput = screen.getByPlaceholderText("قد محصول");
    const designInput = screen.getByPlaceholderText("طرح");
    const inventoryInput = screen.getByPlaceholderText("موجودی");
    const categoryInput = screen.getByPlaceholderText("دسته‌بندی");

    fireEvent.change(nameInput, { target: { value: "شلوار" } });
    fireEvent.change(colorInput, { target: { value: "آبی" } });
    fireEvent.change(heightInput, { target: { value: "100" } });
    fireEvent.change(designInput, { target: { value: "ساده" } });
    fireEvent.change(inventoryInput, { target: { value: "200" } });
    fireEvent.change(categoryInput, { target: { value: "شلوار" } });

    expect(nameInput.value).toBe("شلوار");
    expect(colorInput.value).toBe("آبی");
    expect(heightInput.value).toBe("100");
    expect(designInput.value).toBe("ساده");
    expect(inventoryInput.value).toBe("200");
    expect(categoryInput.value).toBe("شلوار");
  });

  test("Submit button should be disabled", () => {
    render(
      <Router>
        <AddProduct />
      </Router>
    );

    const submitBtn = screen.getByRole("button", { name: /ثبت/i });
    expect(submitBtn).toBeDisabled();
  });
  // test("Submit button should be enabled if all of inputs are filled", () => {
  //   render(
  //     <Router>
  //       <AddProduct />
  //     </Router>
  //   );
  //   const nameInput = screen.getByPlaceholderText("عنوان کالا");
  //   const colorInput = screen.getByPlaceholderText("رنگ محصول");
  //   const heightInput = screen.getByPlaceholderText("قد محصول");
  //   const designInput = screen.getByPlaceholderText("طرح");
  //   const inventoryInput = screen.getByPlaceholderText("موجودی");
  //   const categoryInput = screen.getByPlaceholderText("دسته‌بندی");
  //   const sizeInput = screen.getByPlaceholderText("سایز محصول");
  //   const matInput = screen.getByPlaceholderText("جنس لباس");
  //   const priceInput = screen.getByPlaceholderText("قیمت");
  //   const countryInput = screen.getByPlaceholderText("کشور");
  //   const image = screen.getByPlaceholderText("تصویر محصول");

  //   fireEvent.change(nameInput, { target: { value: "شلوار" } });
  //   fireEvent.change(colorInput, { target: { value: "آبی" } });
  //   fireEvent.change(heightInput, { target: { value: "100" } });
  //   fireEvent.change(designInput, { target: { value: "ساده" } });
  //   fireEvent.change(inventoryInput, { target: { value: "200" } });
  //   fireEvent.change(categoryInput, { target: { value: "شلوار" } });
  //   fireEvent.change(sizeInput, { target: { value: "XL" } });
  //   fireEvent.change(matInput, { target: { value: "لینن" } });
  //   fireEvent.change(priceInput, { target: { value: "1000000" } });
  //   fireEvent.change(countryInput, { target: { value: "ترکیه" } });
  //   fireEvent.change(image, { target: { value: "url" } });

  //   const submitBtn = screen.getByRole("button", { name: /ثبت/i });
  //   expect(submitBtn).not.toBeDisabled();
  // });
});
