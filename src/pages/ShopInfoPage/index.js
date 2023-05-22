import classes from "./ShopInfoPage.module.scss";
import MainNavigation from "../../components/layout/MainNavigation";
import classNames from "classnames";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../axios";
import { useEffect, useState } from "react";

import DotLoader from "react-spinners/DotLoader";
import Item from "../ProductsList/item/item";
const override = `
  display: inline-block;
  margin: 20rem auto;
  display: flex;
`;

function ShopInfoPage() {
  const { shopId } = useParams();
  let [loading, setLoading] = useState(true);
  const [information, setInformation] = useState([]);
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    console.log(shopId);
    if (shopId) {
      axiosInstance
        .post(`/products/show_products_of_shop/`, {
          id: shopId,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            setData(res.data);
            setLoading(false);
          }
        });

      // axiosInstance.get(`/accounts/product_info/${shopId}/`).then((res) => {
      //   if (res.status === 200) {
      //     setProducts(res.data);
      //     // setLoading(false);
      //   }
      // });
    }
  }, [shopId]);

  return (
    <>
      <MainNavigation />
      <DotLoader
        color="#6667ab"
        loading={loading}
        css={override}
        size={80}
        margin={2}
      />
      {!loading && (
        <div className={classes.ShopInfoPage}>
          <div className={classes.ShopInfoPage__InfoSec}>
            <div className={classes.ShopInfoPage__InfoSec__header}>
              <i
                className={classNames(
                  "fa-solid fa-shop",
                  classes.ShopInfoPage__icon
                )}
              />
              <h2 className={classes.ShopInfoPage__InfoSec__Name}>
                {data.shop_name}
              </h2>
            </div>
            <div className={classes.ShopInfoPage__InfoSec__address}>
              <i
                className={classNames(
                  "fa-solid fa-location-dot",
                  classes.ShopInfoPage__icon
                )}
              />
              {data.shop_address}
            </div>
            <div className={classes.ShopInfoPage__InfoSec__phone}>
              <i
                className={classNames(
                  "fa-solid fa-phone",
                  classes.ShopInfoPage__icon
                )}
              />
              {data.shop_phone_number}
            </div>
          </div>
          <div className={classes.ShopInfoPage__itemContainer}>
            <DotLoader
              color="#6667ab"
              loading={loading}
              css={override}
              size={80}
              margin={2}
            />
            {!loading &&
              data.products.map((element) => (
                <Link
                  to={`/products-list/${element.id}`}
                  className={classes.link}
                >
                  <Item
                    key={element.id}
                    name={element.product_name}
                    price={element.product_off_percent}
                    priceOff={element.product_price}
                    img={element.upload}
                  ></Item>
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ShopInfoPage;
