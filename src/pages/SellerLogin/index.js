import classes from "./SellerLogin.module.scss";
// import signIn from "./../../../public/images/signIn.svg";

function SellerLogin() {
  return (
    <div className={classes.SellerLogin}>
      <div className={classes.SellerLogin__form}>2</div>
      <div className={classes.SellerLogin__panel}>
        <h2 className={classes.SellerLogin__panel__title}>فروشنده نیستید؟</h2>
        {/* <signIn />
        <img
          src="./images/signIn.svg"
          className={classes.SellerLogin__panel__icon}
        /> */}
      </div>
    </div>
  );
}
export default SellerLogin;
