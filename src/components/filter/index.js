import classes from "./filter.module.scss";

import { useState } from "react";
import classNames from "classnames";
import axiosInstance from "../../axios";

function Filter({ setProducts }) {
  const [subMenuOneIsOpen, setSubMenuOneIsOpen] = useState(false);
  const [subMenuTwoIsOpen, setSubMenuTwoIsOpen] = useState(false);
  const [subMenuThreeIsOpen, setSubMenuThreeIsOpen] = useState(false);

  const handleFilter = (e) => {
    console.log(e.target.id);
    console.log([e.target.id]);
    if (e.target.id === "محبوب ترین سبک ها") {
      axiosInstance.get(`accounts/show_popular_product/`).then((res) => {
        if (res.status === 200) {
          setProducts(res.data);
        }
      });
    } else {
      axiosInstance
        .post(`accounts/filters/`, {
          group: [e.target.id],
        })
        .then((res) => {
          if (res.status === 200) {
            setProducts(res.data);
          }
        });
    }
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

        <li>
          <a
            href="#/"
            className={classNames(
              // classes["Filter__list__link--active"],
              classes["Filter__list__link"]
            )}
            onClick={() =>
              setSubMenuTwoIsOpen((subMenuTwoIsOpen) => !subMenuTwoIsOpen)
            }
          >
            <i
              className={classNames(
                classes["Filter__icon"],
                "fa-solid fa-ruler-vertical"
              )}
            />
            سایز
            <i className={classNames("fa-solid fa-angle-down", classes.icon)} />
          </a>
          <ul
            className={
              subMenuTwoIsOpen
                ? classes["Filter__submenu--show"]
                : classes["Filter__submenu"]
            }
          >
            {/* <Link to={"/seller-panel/add-product"} className={classes.link}> */}
            <li className={classes["Filter__submenu__item"]}>
              <a
                onClick={handleFilter}
                id={"XS"}
                href="#/"
                className={classes["Filter__submenu__link"]}
              >
                XS
              </a>
            </li>
            {/* </Link> */}

            {/* <Link to={"/seller-panel/edit-product"} className={classes.link}> */}
            <li className={classes["Filter__submenu__item"]}>
              <a
                onClick={handleFilter}
                id={"S"}
                href="#/"
                className={classes["Filter__submenu__link"]}
              >
                S
              </a>
            </li>
            <li className={classes["Filter__submenu__item"]}>
              <a
                onClick={handleFilter}
                id={"M"}
                href="#/"
                className={classes["Filter__submenu__link"]}
              >
                M
              </a>
            </li>
            <li className={classes["Filter__submenu__item"]}>
              <a
                onClick={handleFilter}
                id={"L"}
                href="#/"
                className={classes["Filter__submenu__link"]}
              >
                L
              </a>
            </li>
            <li className={classes["Filter__submenu__item"]}>
              <a
                onClick={handleFilter}
                id={"XL"}
                href="#/"
                className={classes["Filter__submenu__link"]}
              >
                XL
              </a>
            </li>
            <li className={classes["Filter__submenu__item"]}>
              <a
                onClick={handleFilter}
                id={"XXL"}
                href="#/"
                className={classes["Filter__submenu__link"]}
              >
                XXL
              </a>
            </li>
            {/* </Link> */}
          </ul>
        </li>

        <li>
          <a
            href="#/"
            className={classNames(
              // classes["Filter__list__link--active"],
              classes["Filter__list__link"]
            )}
            onClick={() =>
              setSubMenuThreeIsOpen((subMenuThreeIsOpen) => !subMenuThreeIsOpen)
            }
          >
            <i
              className={classNames(
                classes["Filter__icon"],
                "fa-solid fa-palette"
              )}
            />
            رنگ
            <i className={classNames("fa-solid fa-angle-down", classes.icon)} />
          </a>
          <ul
            className={
              subMenuThreeIsOpen
                ? classes["Filter__submenu--show"]
                : classes["Filter__submenu"]
            }
          >
            {/* <Link to={"/seller-panel/add-product"} className={classes.link}> */}
            <li className={classes["Filter__submenu__item"]}>
              <a
                onClick={handleFilter}
                id={"آبی"}
                href="#/"
                className={classes["Filter__submenu__link"]}
              >
                آبی
              </a>
            </li>
            {/* </Link> */}

            {/* <Link to={"/seller-panel/edit-product"} className={classes.link}> */}
            <li className={classes["Filter__submenu__item"]}>
              <a
                onClick={handleFilter}
                id={"قرمز"}
                href="#/"
                className={classes["Filter__submenu__link"]}
              >
                قرمز
              </a>
            </li>
            <li className={classes["Filter__submenu__item"]}>
              <a
                onClick={handleFilter}
                id={"زرد"}
                href="#/"
                className={classes["Filter__submenu__link"]}
              >
                زرد
              </a>
            </li>
            <li className={classes["Filter__submenu__item"]}>
              <a
                onClick={handleFilter}
                id={"مشکی"}
                href="#/"
                className={classes["Filter__submenu__link"]}
              >
                مشکی
              </a>
            </li>
            <li className={classes["Filter__submenu__item"]}>
              <a
                onClick={handleFilter}
                id={"سفید"}
                href="#/"
                className={classes["Filter__submenu__link"]}
              >
                سفید
              </a>
            </li>
          </ul>
        </li>
        {/* <li>
          <a
            onClick={handleFilter}
            id={"سبک من"}
            href="#/"
            className={classNames(classes["Filter__list__link"])}
          >
            <i
              className={classNames(
                classes["Filter__icon"],
                "fa-solid fa-user-tie"
              )}
            />
            سبکِ من
          </a>
        </li> */}

        <li>
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
        </li>
      </ul>
    </div>
  );
}

export default Filter;
