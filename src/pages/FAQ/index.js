import classes from "./FAQ.module.scss";
import classNames from "classnames";
import MainNavigation from "../../components/layout/MainNavigation";
import Footer from "../../components/layout/Footer";

function FAQ() {
  return (
    <>
      {/* <MainNavigation /> */}
      <div className={classes.FAQ}>
        <div className={classes.FAQ__container}>
          <div className={classes.FAQ__accordion}>
            <div className={classes.FAQ__accordionItem} id="question1">
              <a href="#question1" className={classes.FAQ__accordionLink}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                <i
                  className={classNames(
                    "fa-solid fa-angle-down",
                    classes.FAQ__accordionIcon,
                    classes["FAQ__accordionIcon--open"]
                  )}
                />
                <i
                  className={classNames(
                    "fa-solid fa-angle-up",
                    classes.FAQ__accordionIcon,
                    classes["FAQ__accordionIcon--close"]
                  )}
                />
              </a>
              <div className={classes.FAQ__answer}>
                <p className={classes.FAQ__answerDescription}>
                  لوورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </div>
            <div className={classes.FAQ__accordionItem} id="question2">
              <a href="#question2" className={classes.FAQ__accordionLink}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                <i
                  className={classNames(
                    "fa-solid fa-angle-down",
                    classes.FAQ__accordionIcon,
                    classes["FAQ__accordionIcon--open"]
                  )}
                />
                <i
                  className={classNames(
                    "fa-solid fa-angle-up",
                    classes.FAQ__accordionIcon,
                    classes["FAQ__accordionIcon--close"]
                  )}
                />
              </a>
              <div className={classes.FAQ__answer}>
                <p className={classes.FAQ__answerDescription}>
                  لوورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </div>
            <div className={classes.FAQ__accordionItem} id="question3">
              <a href="#question3" className={classes.FAQ__accordionLink}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                <i
                  className={classNames(
                    "fa-solid fa-angle-down",
                    classes.FAQ__accordionIcon,
                    classes["FAQ__accordionIcon--open"]
                  )}
                />
                <i
                  className={classNames(
                    "fa-solid fa-angle-up",
                    classes.FAQ__accordionIcon,
                    classes["FAQ__accordionIcon--close"]
                  )}
                />
              </a>
              <div className={classes.FAQ__answer}>
                <p className={classes.FAQ__answerDescription}>
                  لوورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </div>
          </div>
          {/* <div className={classes.FAQ__pic}>
            <img
              src="./images/illustration13.png"
              className={classes.FAQ__image}
            />
          </div> */}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default FAQ;
