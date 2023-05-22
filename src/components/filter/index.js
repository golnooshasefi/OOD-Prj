import { useState } from "react";
import classNames from "classnames";

import classes from "./filter.module.scss";
import axiosInstance from "../../axios";

function Filter({ setProducts }) {
  const [subMenuOneIsOpen, setSubMenuOneIsOpen] = useState(false);
  const [subMenuTwoIsOpen, setSubMenuTwoIsOpen] = useState(false);
  const [subMenuThreeIsOpen, setSubMenuThreeIsOpen] = useState(false);

  const handleFilter = (e) => {
    console.log(e.target.id);
    console.log([e.target.id]);
    // if (e.target.id === "محبوب ترین سبک ها") {
    // axiosInstance.get(`accounts/show_popular_product/`).then((res) => {
    //   if (res.status === 200) {
    //     setProducts(res.data);
    //   }
    // });
    // } else {
    axiosInstance
      .post(`/products/filters/`, {
        group: [e.target.id],
      })
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data);
        }
      });
    // }
  };

  return (
    <div className={classes.Filter}>
      <h2 className={classes.Filter__header}>فیلترها</h2>
      <ul className={classes.Filter__list}>
        <li>
          <a
            href="#/"
            className={classNames(
              // classes["Filter__list__link--active"],
              classes["Filter__list__link"]
            )}
            onClick={() =>
              setSubMenuOneIsOpen((subMenuOneIsOpen) => !subMenuOneIsOpen)
            }
          >
            <i
              className={classNames(
                classes["Filter__icon"],
                "fa-solid fa-shirt"
              )}
            />
            دسته‌بندی‌ها
            <i className={classNames("fa-solid fa-angle-down", classes.icon)} />
          </a>
          <ul
            className={
              subMenuOneIsOpen
                ? classes["Filter__submenu--show"]
                : classes["Filter__submenu"]
            }
          >
            {/* <Link to={"/seller-panel/add-product"} className={classes.link}> */}
            <li className={classes["Filter__submenu__item"]}>
              <a
                onClick={handleFilter}
                id={"شلوار"}
                href="#/"
                className={classes["Filter__submenu__link"]}
              >
                شلوار
              </a>
            </li>
            {/* </Link> */}

            {/* <Link to={"/seller-panel/edit-product"} className={classes.link}> */}
            <li className={classes["Filter__submenu__item"]}>
              <a
                onClick={handleFilter}
                id={"پیراهن"}
                href="#/"
                className={classes["Filter__submenu__link"]}
              >
                پیراهن
              </a>
            </li>
            <li className={classes["Filter__submenu__item"]}>
              <a
                onClick={handleFilter}
                id={"تیشرت"}
                href="#/"
                className={classes["Filter__submenu__link"]}
              >
                تیشرت
              </a>
            </li>
            <li className={classes["Filter__submenu__item"]}>
              <a
                onClick={handleFilter}
                id={"هودی"}
                href="#/"
                className={classes["Filter__submenu__link"]}
              >
                هودی
              </a>
            </li>
            {/* </Link> */}
          </ul>
        </li>

        {/* <li>
          <a
            onClick={handleFilter}
            id={"محبوب ترین سبک ها"}
            href="#/"
            className={classNames(classes["Filter__list__link"])}
          >
            <i
              className={classNames(
                classes["Filter__icon"],
                "fa-solid fa-heart"
              )}
            />
            محبوب‌ترین سبک‌ها
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default Filter;
