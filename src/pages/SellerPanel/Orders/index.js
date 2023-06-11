import classes from "./Orders.module.scss";
import OrderItem from "./OrderItem";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import axiosInstance from "../../../axios";
import { BeatLoader } from "react-spinners";
import UserContext from "../../../store/UserContext";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const override = `
  display: inline-block;
  margin: 15rem auto 0;
`;

function Orders() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  async function getOrders() {
    const res = await axiosInstance.get("/orders/show_order_to_shop/");
    setOrders(res.data);
    return res.data;
  }

  const {
    data: fetchorders,
    isLoading,
    status,
  } = useQuery("orders", getOrders);

  // useEffect(() => {
  //   axiosInstance.get(`/orders/show_order_to_shop/`).then((res) => {
  //     if (res.status === 200) {
  //       console.log(res);
  //       setOrders(res.data);
  //       setLoading(false);
  //     }
  //   });
  // }, []);

  return (
    <>
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
            {fetchorders.map((element) => (
              <OrderItem
                name={element.product_name}
                price={element.product_price}
                img={element.upload}
                size={element.product_size}
                color={element.product_color}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default Orders;
