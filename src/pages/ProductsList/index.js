import classes from "./productsList.module.scss";
import React, { Suspense } from "react";

import { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import MainNavigation from "../../components/layout/MainNavigation";
import Footer from "../../components/layout/Footer";
import { Link, useSearchParams } from "react-router-dom";
import Filter from "../../components/filter";
import { useQuery } from "react-query";

import DotLoader from "react-spinners/DotLoader";
const Item = React.lazy(() => import("./item/item"));
// import Item from "./item/item";

const override = `
  display: inline-block;
  margin: 20rem auto;
  grid-column: 1 / span 4;
`;
async function getProducts() {
  return await axiosInstance
    .get("/products/show_all_products/")
    .then((res) => res.data);
}

function ProductsList() {
  const {
    data: products,
    isLoading,
    status,
  } = useQuery("products", getProducts);

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("product"));

  // useEffect(() => {
  //   axiosInstance.get(`/products/show_all_products/`).then((res) => {
  //     if (res.status === 200) {
  //       setLoading(false);
  //       console.log(res);
  //       console.log(res.data);
  //       setProducts(res.data);
  //     }
  //   });
  // }, []);
  return (
    <>
      <MainNavigation />
      <div className={classes.Products}>
        <div className={classes.Products__itemContainer}>
          <DotLoader
            data-testid="loader"
            color="#6667ab"
            loading={isLoading}
            css={override}
            size={80}
            margin={2}
          />
          {status === "success" &&
            products.map((element) => (
              <Link
                to={`/products-list/${element.id}`}
                className={classes.link}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <Item
                    key={element.id}
                    name={element.product_name}
                    price={element.product_off_percent}
                    priceOff={element.product_price}
                    img={element.upload}
                  ></Item>
                </Suspense>
              </Link>
            ))}
        </div>
        <div className={classes.Products__filterContainer}>
          {/* <Filter setProducts={setProducts} /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ProductsList;
