import { useForm } from "react-hook-form";
import classes from "./AddProduct.module.scss";
import Button from "../../../components/shared/Button";
import { useState } from "react";
import axiosInstance from "../../../axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "onChange" });

  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();
  // console.log(1, answers);

  let newObject = {};
  for (let [key, value] of Object.entries(answers)) {
    newObject = {
      ...newObject,
      [`style_param_${key}`]: Array.isArray(value) ? value.join(",") : value,
    };
  }
  const onSubmit = (values) => {
    // console.log(data);
    const newValues = {
      ...values,
      ...newObject,
    };

    // console.log("add product submit");
    // console.log(newValues);
    // console.log(...newValues);

    axiosInstance
      .post(`/products/add_products_to_shop/`, {
        inventory: Number(newValues.inventory),
        product_color: newValues.product_color,
        product_country: newValues.product_country,
        product_design: newValues.product_design,
        product_group: newValues.product_group,
        product_height: Number(newValues.product_height),
        product_image: newValues.product_image,
        product_material: newValues.product_material,
        product_name: newValues.product_name,
        product_price: Number(newValues.product_price),
        product_size: newValues.product_size,
        style_param_1: newValues.style_param_1,
        style_param_2: newValues.style_param_2,
        style_param_3: newValues.style_param_3,
        style_param_4: newValues.style_param_4,
        style_param_5: newValues.style_param_5,
      })
      .then((res) => {
        if (res.status === 201) {
          console.log("add product");
          navigate("/seller-panel");
        }
      });
    console.log(1, newValues);
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.container__headerContainer}>
          <div className={classes.container__headerContainer__header}>
            <span className={classes.container__headerContainer__text}>
              افزودن کالا
            </span>
          </div>
        </div>
        <form className={classes.form}>
          {/* <div className={classes.row}> */}
          <div className={classes.column}>
            <div className={classes.form__group}>
              <label className={classes.form__label}>عنوان کالا</label>
              <input
                type="text"
                placeholder="عنوان کالا"
                {...register("product_name", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>
            <div className={classes.form__group}>
              <label for="color" className={classes.form__label}>
                رنگ
              </label>
              <input
                name="color"
                id="color"
                list="colors"
                placeholder="رنگ محصول"
                {...register("product_color", {
                  required: true,
                })}
                className={classes.form__input}
              />
              <datalist id="colors">
                <option>قرمز</option> <option>زرد</option>
                <option>آبی</option> <option>سبز</option>
                <option>نارنجی</option> <option>بنفش</option>
                <option>سیاه</option> <option>سفید</option>
                <option>خاکستری</option> <option>کرمی</option>
              </datalist>
            </div>

            <div className={classes.form__group}>
              <label className={classes.form__label}>قد محصول</label>
              <input
                type="number"
                placeholder="قد محصول"
                {...register("product_height", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>

            <div className={classes.form__group}>
              <label className={classes.form__label}>طرح لباس </label>
              <input
                type="text"
                placeholder="طرح"
                {...register("product_design", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>
            <div className={classes.form__group}>
              <label className={classes.form__label}>موجودی </label>
              <input
                type="number"
                placeholder="موجودی"
                {...register("inventory", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>

            <div className={classes.form__group}>
              <label for="group" className={classes.form__label}>
                دسته‌بندی
              </label>
              <input
                name="product_group"
                id="group"
                list="groupes"
                placeholder="دسته‌بندی "
                {...register("product_group", {
                  required: true,
                })}
                className={classes.form__input}
              />
              <datalist id="groupes">
                <option>شلوار</option> <option>پیراهن</option>{" "}
                <option>تیشرت</option>
                <option>کت</option> <option>سوییشرت</option>{" "}
                <option>هودی</option>
              </datalist>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.form__group}>
              <label for="size" className={classes.form__label}>
                سایز
              </label>
              <input
                name="size"
                id="size"
                list="sizes"
                placeholder="سایز محصول"
                {...register("product_size", {
                  required: true,
                })}
                className={classes.form__input}
              />
              <datalist id="sizes">
                <option>XS</option> <option>S</option> <option>M</option>
                <option>L</option> <option>XL</option> <option>XXL</option>
                <option>XXXL</option>
              </datalist>
            </div>
            <div className={classes.form__group}>
              <label className={classes.form__label}>جنس لباس</label>
              <input
                type="text"
                placeholder="جنس لباس"
                {...register("product_material", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>

            <div className={classes.form__group}>
              <label className={classes.form__label}>قیمت</label>
              <input
                type="number"
                placeholder="قیمت"
                {...register("product_price", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>

            <div className={classes.form__group}>
              <label className={classes.form__label}>کشور تولید کننده </label>
              <input
                type="text"
                placeholder="کشور"
                {...register("product_country", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>
            <div className={classes.form__group}>
              <label className={classes.form__label}>
                تصویر محصول
                <i class="fa-regular fa-file-image"></i>
              </label>
              <input
                placeholder="تصویر محصول"
                type="text"
                {...register("product_image", {
                  required: true,
                })}
                className={classes.form__input}
              />
            </div>
          </div>
        </form>
        {/* <AddProductSurvey answersHandler={setAnswers} /> */}
        <button
          onClick={handleSubmit(onSubmit)}
          className={isValid ? classes.btn : classes["btn--disable"]}
          disabled={!isValid}
        >
          ثبت
        </button>
      </div>
    </>
  );
}

export default AddProduct;
