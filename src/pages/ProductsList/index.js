import classes from "./productsList.module.scss";
import Item from "./item/item";
import { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import MainNavigation from "../../components/layout/MainNavigation";
import Footer from "../../components/layout/Footer";
import { Link, useSearchParams } from "react-router-dom";
import Filter from "../../components/filter";

import DotLoader from "react-spinners/DotLoader";

const override = `
  display: inline-block;
  margin: 20rem auto;
  grid-column: 1 / span 4;
`;

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const url = searchParams.get("product");
  console.log(searchParams.get("product"));

  useEffect(() => {
    if (url === null) {
      axiosInstance.get(`/products/show_all_products/`).then((res) => {
        if (res.status === 200) {
          setLoading(false);
          console.log(res);
          console.log(res.data);
          setProducts(res.data);
        }
      });
    } else if (url === "survey1") {
      console.log("survey1 run");
      axiosInstance.get(`accounts/user_styles/`).then((res) => {
        if (res.status === 200) {
          console.log(res);
          console.log(res.data);
          setProducts(res.data);
          setLoading(false);
        }
      });
    } else if (url === "survey2") {
      axiosInstance.post(`questions/more_questions/`).then((res) => {
        if (res.status === 200) {
          console.log(res);
          console.log(res.data);
          setProducts(res.data);
          setLoading(false);
        }
      });
    }
  }, []);
  return (
    <>
      <MainNavigation />
      <div className={classes.Products}>
        <h2 className={classes.Products__header}>محصولات</h2>
        <div className={classes.Products__itemContainer}>
          <DotLoader
            data-testid="loader"
            color="#6667ab"
            loading={loading}
            css={override}
            size={80}
            margin={2}
          />
          {!loading &&
            products.map((element) => (
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
        <div className={classes.Products__filterContainer}>
          <Filter setProducts={setProducts} />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ProductsList;
