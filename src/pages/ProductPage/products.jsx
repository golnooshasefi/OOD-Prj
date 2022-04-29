import classes from "./products.module.scss";
import Item from "./item";
import { useEffect, useState } from "react";
import axiosInstance from "../../axios";

function Products() {
  const [userStyles, setUserStyle] = useState([]);

  useEffect(() => {
    axiosInstance.get(`accounts/user_styles/`).then((res) => {
      console.log(res);
      console.log(res.data);
      setUserStyle(res.data);

      // login(formData.email);
      // navigate(-1);
      //   // history.push("/login");
      //   // console.log("axios");
    });
  }, []);
  return (
    <div className={classes.Products}>
      <div className={classes.Products__itemContainer}>
        {userStyles.map((element) => (
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            img={element.style_image_url}
          ></Item>
        ))}
      </div>
      <div className={classes.Products__filterContainer}>
        <h2>فیلترها</h2>
      </div>
    </div>
  );
}
export default Products;
