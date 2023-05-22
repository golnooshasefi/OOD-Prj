import { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import classes from "./EditProdutPage.module.scss";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../axios";
import { BeatLoader } from "react-spinners";

const override = `
  display: inline-block;
  margin: 15rem auto 0;
`;

function EditProductPage() {
  let [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState([]);
  // console.log(1, answers);
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    defaultValues: useMemo(() => {
      return answers;
    }, [answers]),
  });

  useEffect(() => {
    reset(answers);
  }, [answers]);

  let newObject = {};
  for (let [key, value] of Object.entries(answers)) {
    newObject = {
      ...newObject,
      [`style_param_${key}`]: Array.isArray(value) ? value.join(",") : value,
    };
  }

  const { productId } = useParams();

  useEffect(() => {
    console.log(productId);
    if (productId) {
      axiosInstance.get(`/products/edit_product/${productId}/`).then((res) => {
        if (res.status === 200) {
          console.log(res);
          console.log(res.data);
          setAnswers(res.data);
          setLoading(false);
        }
      });
    } else {
      // navigate("/404", { replace: true });
    }
  }, [productId]);

  const onSubmit = (values) => {
    // console.log(data);
    const newValues = {
      ...values,
      ...newObject,
    };
    console.log(1, newValues);
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.container__headerContainer}>
          <div className={classes.container__headerContainer__header}>
            <span className={classes.container__headerContainer__text}>
              ویرایش کالا
            </span>
          </div>
        </div>
        <BeatLoader
          color="#6667ab"
          loading={loading}
          css={override}
          size={30}
        />
        {!loading && (
          <>
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
                    <option>خاکستری</option>
                  </datalist>
                </div>

                <div className={classes.form__group}>
                  <label className={classes.form__label}>قد محصول</label>
                  <input
                    type="text"
                    placeholder="قد"
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
                    name="group"
                    id="group"
                    list="groupes"
                    placeholder="دسته‌بندی "
                    {...register("group", {
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
                    type="text"
                    placeholder="قیمت"
                    {...register("product_price", {
                      required: true,
                    })}
                    className={classes.form__input}
                  />
                </div>

                <div className={classes.form__group}>
                  <label className={classes.form__label}>درصد تخفیف </label>
                  <input
                    type="text"
                    placeholder="درصد تخفیف"
                    {...register("product_off_percent")}
                    className={classes.form__input}
                  />
                </div>
                <div className={classes.form__group}>
                  <label className={classes.form__label}>
                    کشور تولید کننده{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="کشور"
                    {...register("product_country", {
                      required: true,
                    })}
                    className={classes.form__input}
                  />
                </div>
                {/* <div className={classes.form__group}>
                  <label className={classes.form__label}>
                    تصویر محصول
                    <i class="fa-regular fa-file-image"></i>
                  </label>
                  <input
                    type="file"
                    {...register("upload", {
                      required: true,
                    })}
                  />
                </div> */}
              </div>
            </form>
            <button
              onClick={handleSubmit(onSubmit)}
              className={classes.btn}
              // disabled={!isValid}
            >
              ثبت
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default EditProductPage;
