import classes from "./ShoppingList.module.scss";
import MainNavigation from "../../components/layout/MainNavigation";
import Footer from "../../components/layout/Footer";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
import Button from "../../components/shared/Button";
import ShoppingItem from "./ShoppingItem";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { PuffLoader } from "react-spinners";

const override = `
  display: inline-block;
  margin: 15rem auto 0;
`;

function ShoppingList() {
  let [loading, setLoading] = useState(true);
  let [list, setList] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/accounts/show_cart/`).then((res) => {
      if (res.status === 200) {
        setLoading(false);
        setList(res.data);
      }
    });
  }, []);

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  return (
    <>
      <MainNavigation />
      {loading && (
        <div className={classes.spinner}>
          <PuffLoader
            color="#6667ab"
            loading={loading}
            css={override}
            size={100}
          />
        </div>
      )}

      {!loading && (
        <section className={classes.ShoppingList}>
          <div className={classes.ShoppingList__headerContainer} ref={ref}>
            <div className={classes.ShoppingList__header}>
              <span className={classes.ShoppingList__header__text}>
                سبد خرید
              </span>
              <span className={classes.ShoppingList__header__number}>
                {digitsEnToFa(1)}
              </span>
            </div>
          </div>

          <div className={classes.ShoppingList__shoppingItems}>
            <ShoppingItem
              name={" شلوار مردانه سیدونا مدل MSI03072-403"}
              price={199000}
              img={"./images/clothes/11bg.png"}
            />
            <ShoppingItem
              name={
                " شلوار مردانه سیدونا مدل شلوار مردانه سیدونا مدل مدل شلوار مردانه سیدونا مدل مدل شلوار مردانه سیدونا مدل مدل شلوار مردانه سیدونا مدل MSI03072-403"
              }
              price={199000}
              img={"./images/clothes/11bg.png"}
            />
            <ShoppingItem
              name={" شلوار مردانه سیدونا مدل MSI03072-403"}
              price={199000}
              img={"./images/clothes/26.jpg"}
            />
            <ShoppingItem
              name={" شلوار مردانه سیدونا مدل MSI03072-403"}
              price={199000}
              img={"./images/clothes/26bg.png"}
            />
          </div>

          <div
            className={
              inView
                ? classes.ShoppingList__confirmBox
                : classes.ShoppingList__confirmBox__sticky
            }
          >
            <div className={classes.ShoppingList__confirmContainer}>
              <div className={classes.ShoppingList__confirmBox__totalPrice}>
                <span
                  className={classes.ShoppingList__confirmBox__totalPrice__text}
                >
                  قیمت کل سفارش
                </span>
                <span
                  className={
                    classes.ShoppingList__confirmBox__totalPrice__price
                  }
                >
                  {digitsEnToFa(addCommas(2000000))} تومان
                </span>
              </div>
              <div className={classes.ShoppingList__confirmBox__payable}>
                <span
                  className={classes.ShoppingList__confirmBox__payable__text}
                >
                  قیمت قابل پرداخت
                </span>
                <span
                  className={classes.ShoppingList__confirmBox__payable__price}
                >
                  {digitsEnToFa(addCommas(2000000))} تومان
                </span>
              </div>
              <span className={classes.ShoppingList__confirmBox__note}>
                افزودن کالا به سبد خرید به معنی رزرو آن نیست. با توجه به محدودیت
                موجودی، سبد خود را ثبت و خرید را تکمیل کنید.
              </span>
              <Button
                color="purple"
                className={classes["ShoppingList__confirmBox__btn"]}
              >
                تکمیل خرید
              </Button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
export default ShoppingList;
