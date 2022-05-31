import classes from "./productsList.module.scss";
import Item from "./item/item";
import { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import MainNavigation from "../../components/layout/MainNavigation";
import Footer from "../../components/layout/Footer";
import { Link } from "react-router-dom";
import Filter from "../../components/filter";

import DotLoader from "react-spinners/DotLoader";

const override = `
  display: inline-block;
  margin: 20rem auto;
  grid-column: 1 / span 4;
`;

function ProductsList() {
  const [userStyles, setUserStyle] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get(`accounts/show_all_products/`).then((res) => {
      if (res.status === 200) {
        setLoading(false);
        console.log(res);
        console.log(res.data);
        setUserStyle(res.data);
      }
    });
  }, []);
  return (
    <>
      <MainNavigation />
      <div className={classes.Products}>
        <div className={classes.Products__itemContainer}>
          <DotLoader
            color="#6667ab"
            loading={loading}
            css={override}
            size={80}
            margin={2}
          />
          {!loading &&
            userStyles.map((element) => (
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
          {/* <Link to={`/product-list/${id}`} className={classes.link}> */}
          {/* <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          /> */}
          {/* </Link> */}
          {/* <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"} */}
          {/* />  */}
          {/* <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />{" "} */}
        </div>
        <div className={classes.Products__filterContainer}>
          <Filter />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ProductsList;
