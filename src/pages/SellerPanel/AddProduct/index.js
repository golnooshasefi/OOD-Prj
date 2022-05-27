import { useForm } from "react-hook-form";
import classes from "./AddProduct.module.scss";
import Button from "../../../components/shared/Button";
import Survey from "./AddProductSurvey";
import AddProductSurvey from "./AddProductSurvey";

function AddProduct() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          {/* <div className={classes.row}> */}
          <div className={classes.column}>
            <div className={classes.form__group}>
              <label className={classes.form__label}>عنوان کالا</label>
              <input
                type="text"
                placeholder="عنوان کالا"
                {...register("title")}
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
                {...register("title")}
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
                {...register("height")}
                className={classes.form__input}
              />
            </div>

            <div className={classes.form__group}>
              <label className={classes.form__label}>طرح لباس </label>
              <input
                type="text"
                placeholder="طرح"
                {...register("material")}
                className={classes.form__input}
              />
            </div>
            <div className={classes.form__group}>
              <label className={classes.form__label}>موجودی </label>
              <input
                type="number"
                placeholder="موجودی"
                {...register("material")}
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
                {...register("group")}
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
                {...register("size")}
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
                {...register("material")}
                className={classes.form__input}
              />
            </div>

            <div className={classes.form__group}>
              <label className={classes.form__label}>قیمت</label>
              <input
                type="text"
                placeholder="قیمت"
                {...register("price")}
                className={classes.form__input}
              />
            </div>
            <div className={classes.form__group}>
              <label className={classes.form__label}>کشور تولید کننده </label>
              <input
                type="text"
                placeholder="کشور"
                {...register("material")}
                className={classes.form__input}
              />
            </div>
            <div className={classes.form__group}>
              <label className={classes.form__label}>
                تصویر محصول
                <i class="fa-regular fa-file-image"></i>
              </label>
              <input type="file" {...register("file")} />
            </div>
          </div>
          {/* </div> */}

          {/* <Button color="green" className={classes.btn}>
            ثبت
          </Button> */}
        </form>
        {<AddProductSurvey />}
        <Button color="green" className={classes.btn}>
          ثبت
        </Button>
      </div>
    </>
  );
}

export default AddProduct;
