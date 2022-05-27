import classes from "./PersonalInfo.module.scss";
import InfoCard from "./InfoCard";
import { useEffect, useState, createContext, useContext } from "react";
import axiosInstance from "../../../axios";
import BeatLoader from "react-spinners/BeatLoader";

const override = `
  display: inline-block;
  margin: 15rem auto 0;
`;

function PersonalInfo() {
  let [loading, setLoading] = useState(true);
  let [information, setInformation] = useState({});

  useEffect(() => {
    axiosInstance.get(`accounts/show_user_info/`).then((res) => {
      if (res.status === 200) {
        setLoading(false);
        setInformation(res.data);
      }
    });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.container__headerContainer}>
        <div className={classes.container__headerContainer__header}>
          <span className={classes.container__headerContainer__text}>
            اطلاعات حساب کاربری
          </span>
        </div>
      </div>
      <BeatLoader
        color="#6667ab"
        loading={loading}
        css={override}
        size={30}
        // margin={2}
      />
      {!loading && (
        <div className={classes.container__infoCards}>
          <InfoCard
            title={"نام و نام خانوادگی"}
            value={information.username}
            type={"text"}
            name={"fullName"}
            information={information}
            setInformation={setInformation}
          />
          <InfoCard
            title={"شماره موبایل"}
            value={information.user_phone_number}
            type={"tel"}
            name={"phoneNumber"}
            information={information}
            setInformation={setInformation}
          />
          <InfoCard
            title={"ایمیل"}
            value={information.email}
            type={"email"}
            name={"email"}
            information={information}
            setInformation={setInformation}
          />
          <InfoCard
            title={"آدرس فروشگاه"}
            value={information.shop_address}
            type={"text"}
            name={"address"}
            information={information}
            setInformation={setInformation}
          />
          <InfoCard
            title={"نام فروشگاه"}
            value={information.shop_name}
            type={"text"}
            name={"shopName"}
            information={information}
            setInformation={setInformation}
          />
          <InfoCard
            title={"شماره تلفن فروشگاه"}
            value={information.shop_phone_number}
            type={"tel"}
            name={"shopNumber"}
            information={information}
            setInformation={setInformation}
          />
          <InfoCard
            title={"رمز عبور"}
            value={"••••••••"}
            type={"password"}
            name={"password"}
            information={information}
            setInformation={setInformation}
          />
        </div>
      )}
    </div>
  );
}
export default PersonalInfo;
