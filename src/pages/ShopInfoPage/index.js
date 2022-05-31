import classes from "./ShopInfoPage.module.scss";
import MainNavigation from "../../components/layout/MainNavigation";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios";
import { useEffect, useState } from "react";
function ShopInfoPage() {
  const { shopId } = useParams();
  const [information, setInformation] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(shopId);
    if (shopId) {
      axiosInstance.get(`/accounts/product_info/${shopId}/`).then((res) => {
        if (res.status === 200) {
          setProducts(res.data);
          // setLoading(false);
        }
      });

      axiosInstance.get(`/accounts/product_info/${shopId}/`).then((res) => {
        if (res.status === 200) {
          setProducts(res.data);
          // setLoading(false);
        }
      });
    }
  }, [shopId]);

  return (
    <>
      <MainNavigation />
      <div className={classes.ShopInfoPage}>
        <div className={classes.ShopInfoPage__InfoSec}>
          <div className={classes.ShopInfoPage__InfoSec__header}>
            <i
              className={classNames(
                "fa-solid fa-shop",
                classes.ShopInfoPage__icon
              )}
            />
            <h2 className={classes.ShopInfoPage__InfoSec__Name}>نام فروشگاه</h2>
          </div>
          <div className={classes.ShopInfoPage__InfoSec__address}>
            <i
              className={classNames(
                "fa-solid fa-location-dot",
                classes.ShopInfoPage__icon
              )}
            />
            اصفهان-خیابان توحید-کوچه خورشید-پلاک 8
          </div>
          <div className={classes.ShopInfoPage__InfoSec__phone}>
            <i
              className={classNames(
                "fa-solid fa-phone",
                classes.ShopInfoPage__icon
              )}
            />
            0313-6259446
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopInfoPage;
