import classes from "./productsList.module.scss";
import Item from "./item/item";
import { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import MainNavigation from "../../components/layout/MainNavigation";
import Footer from "../../components/layout/Footer";
import { Link } from "react-router-dom";
import Filter from "../../components/filter";
function ProductsList() {
  const [userStyles, setUserStyle] = useState([]);

  useEffect(() => {
    axiosInstance.get(`accounts/show_all_products/`).then((res) => {
      console.log(res);
      console.log(res.data);
      setUserStyle(res.data);
    });
  }, []);
  return (
    <>
      <MainNavigation />
      <div className={classes.Products}>
        <div className={classes.Products__itemContainer}>
          {userStyles.map((element) => (
            <Link to={`/products-list/${element.id}`} className={classes.link}>
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
          /> */}{" "}
        </div>
        {/* <div className={classes.Products__filterContainer}>
          <h2>فیلترها</h2>
        </div> */}
        <div>
          <Filter />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ProductsList;
