import classes from "./Orders.module.scss";
import OrderItem from "./OrderItem";

function Orders() {
  return (
    <div className={classes.container}>
      {/* <h2 className={classes.header}>سفارش‌ها</h2> */}
      <div className={classes.container__headerContainer}>
        <div className={classes.container__headerContainer__header}>
          <span className={classes.container__headerContainer__text}>
            سفارش‌ها
          </span>
        </div>
      </div>
      <div className={classes.container__orderItems}>
        <OrderItem
          name={" شلوار مردانه سیدونا مدل MSI03072-403"}
          price={199000}
          img={"./images/clothes/11bg.png"}
        />
        <OrderItem
          name={" شلوار مردانه سیدونا مدل MSI03072-403"}
          price={199000}
          img={"./images/clothes/11bg.png"}
        />
        <OrderItem
          name={" شلوار مردانه سیدونا مدل MSI03072-403"}
          price={199000}
          img={"./images/clothes/11bg.png"}
        />
        <OrderItem
          name={" شلوار مردانه سیدونا مدل MSI03072-403"}
          price={199000}
          img={"./images/clothes/11bg.png"}
        />
        <OrderItem
          name={" شلوار مردانه سیدونا مدل MSI03072-403"}
          price={199000}
          img={"./images/clothes/11bg.png"}
        />
      </div>
    </div>
  );
}
export default Orders;
