import classes from "./Orders.module.scss";
import OrderItem from "./OrderItem";
import { useEffect, useState } from "react";
import axiosInstance from "../../../axios";
import { BeatLoader } from "react-spinners";
import { useQuery } from "react-query";
const override = `
  display: inline-block;
  margin: 15rem auto 0;
`;
async function getOrders() {
  return await axiosInstance
    .get("/orders/user_orders/")
    .then((res) => res.data);
}

function Orders() {
  const { data: orders, isLoading, status } = useQuery("orders", getOrders);

  // let [loading, setLoading] = useState(true);
  // let [orders, setOrders] = useState([]);
  // console.log(orders);

  // useEffect(() => {
  //   axiosInstance.get(`/orders/user_orders/`).then((res) => {
  //     if (res.status === 200) {
  //       setOrders(res.data);
  //       setLoading(false);
  //     }
  //   });
  // }, []);

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

      <BeatLoader
        color="#6667ab"
        loading={isLoading}
        css={override}
        size={30}
      />
      {status === "success" && (
        <div className={classes.container__orderItems}>
          {orders.map((element) => (
            <OrderItem
              name={element.product_name}
              price={element.product_price}
              img={element.product_image}
              size={element.product_size}
              color={element.product_color}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Orders;
