import classes from "./Orders.module.scss";
import OrderItem from "./OrderItem";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import axiosInstance from "../../../axios";
import { BeatLoader } from "react-spinners";
import UserContext from "../../../store/UserContext";
import { useNavigate } from "react-router-dom";

const override = `
  display: inline-block;
  margin: 15rem auto 0;
`;

function Orders() {
  let [loading, setLoading] = useState(true);
  let [orders, setOrders] = useState([]);

  useEffect(() => {
    axiosInstance.get(``).then((res) => {
      if (res.status === 200) {
        setLoading(false);
        setOrders(res.data);
      }
    });
  }, []);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    console.log(!user.auth || (!user.auth && user.type !== "user"));
    if (!user.auth || (!user.auth && user.type !== "seller")) {
      console.log("sellerrrrr2");
      navigate("/404");
    }
  }, [user.auth, user.type, navigate]);

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
      <BeatLoader color="#6667ab" loading={loading} css={override} size={30} />
      {!loading && (
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
      )}
    </div>
  );
}
export default Orders;
