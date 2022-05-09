import { useForm } from "react-hook-form";
import classes from "./AddProduct.module.scss";
import Button from "../../../components/shared/Button";

function AddProduct() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.header}>افزودن کالا</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <div className={classes.row}>
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
                <label className={classes.form__label}>اندازه</label>
                <input
                  type="text"
                  placeholder="اندازه"
                  {...register("size")}
                  className={classes.form__input}
                />
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
                  type="text"
                  placeholder="موجودی"
                  {...register("material")}
                  className={classes.form__input}
                />
              </div>
            </div>
            <div className={classes.column}>
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
                <input
                  type="file"
                  {...register("file")}
                  //   className={classes["form__input--pic"]}
                />
              </div>
            </div>
          </div>
          <Button color="green" className={classes.btn}>
            ثبت
            {/* <i class="fa-solid fa-check"></i> */}
          </Button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
