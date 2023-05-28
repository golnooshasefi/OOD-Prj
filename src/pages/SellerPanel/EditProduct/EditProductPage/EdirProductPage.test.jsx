import EditProductPage from ".";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Edir product page", () => {
  test("Page renders correctly", () => {
    render(<EditProductPage />);
    const spanElement = screen.getByText(/ویرایش کالا/i);
    const nameInput = screen.getByPlaceholderText("عنوان کالا");
    const colorInput = screen.getByPlaceholderText("رنگ محصول");
    const heightInput = screen.getByPlaceholderText("قد");
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
    render(<EditProductPage />);
    const nameInput = screen.getByPlaceholderText("عنوان کالا");
    const colorInput = screen.getByPlaceholderText("رنگ محصول");
    const heightInput = screen.getByPlaceholderText("قد");
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

  test("Submit button should be enabled if all of inputs are filled", () => {
    render(<EditProductPage />);
    const nameInput = screen.getByPlaceholderText("عنوان کالا");
    const colorInput = screen.getByPlaceholderText("رنگ محصول");
    const heightInput = screen.getByPlaceholderText("قد");
    const designInput = screen.getByPlaceholderText("طرح");
    const inventoryInput = screen.getByPlaceholderText("موجودی");
    const categoryInput = screen.getByPlaceholderText("دسته‌بندی");
    const sizeInput = screen.getByPlaceholderText("سایز محصول");
    const matInput = screen.getByPlaceholderText("جنس لباس");
    const priceInput = screen.getByPlaceholderText("قیمت");
    const countryInput = screen.getByPlaceholderText("کشور");

    fireEvent.change(nameInput, { target: { value: "شلوار" } });
    fireEvent.change(colorInput, { target: { value: "آبی" } });
    fireEvent.change(heightInput, { target: { value: "100" } });
    fireEvent.change(designInput, { target: { value: "ساده" } });
    fireEvent.change(inventoryInput, { target: { value: "200" } });
    fireEvent.change(categoryInput, { target: { value: "شلوار" } });
    fireEvent.change(sizeInput, { target: { value: "XL" } });
    fireEvent.change(matInput, { target: { value: "لینن" } });
    fireEvent.change(priceInput, { target: { value: "1000000" } });
    fireEvent.change(countryInput, { target: { value: "ترکیه" } });

    const submitBtn = screen.getByRole("button", { name: /ثبت/i });
    expect(submitBtn).not.toBeDisabled();
  });
});
