import classes from "./PersonalInfo.module.scss";
import InfoCard from "./InfoCard";

function PersonalInfo() {
  return (
    <div className={classes.container}>
      <div className={classes.container__headerContainer}>
        <div className={classes.container__headerContainer__header}>
          <span className={classes.container__headerContainer__text}>
            اطلاعات حساب کاربری
          </span>
        </div>
      </div>
      <div className={classes.container__infoCards}>
        <InfoCard
          title={"نام و نام خانوادگی"}
          value={"مهدی قنبرزاده"}
          type={"text"}
          name={"fullName"}
        />
        <InfoCard
          title={"شماره موبایل"}
          value={"09131234567"}
          type={"tel"}
          name={"phoneNumber"}
        />
        <InfoCard
          title={"ایمیل"}
          value={"mahdi.ghanbarzade.a@gmail.com"}
          type={"email"}
          name={"email"}
        />
        <InfoCard
          title={"آدرس فروشگاه"}
          value={"اصفهان، دروازه شیراز، دانشگاه اصفهان"}
          type={"text"}
          name={"address"}
        />
        <InfoCard
          title={"نام فروشگاه"}
          value={"بزرگ"}
          type={"text"}
          name={"shopName"}
        />
        <InfoCard
          title={"شماره تلفن فروشگاه"}
          value={"03133355888"}
          type={"tel"}
          name={"shopNumber"}
        />
        <InfoCard
          title={"رمز عبور"}
          value={"••••••••"}
          type={"password"}
          name={"password"}
        />
      </div>
    </div>
  );
}
export default PersonalInfo;
