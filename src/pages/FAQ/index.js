import classes from "./FAQ.module.scss";
import classNames from "classnames";

function FAQ() {
  return (
    <>
      <div className={classes.FAQ}>
        <div className={classes.FAQ__container}>
          <div className={classes.accordion}>
            <div className={classes.accordion__item} id="question1">
              <a href="#quetion1" className={classes.accordion__link}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                <i
                  className={classNames(
                    "fa-solid fa-angle-down",
                    classes.accordion__icon,
                    classes["accordion__icon--open"]
                  )}
                />
                <i
                  className={classNames(
                    "fa-solid fa-angle-up",
                    classes.accordion__icon,
                    classes["accordion__icon--close"]
                  )}
                />
              </a>
              <div className={classes.answer}>
                <p className={classes.answer__desc}>
                  لوورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </div>
            <div className={classes.accordion__item} id="question2">
              <a href="#quetion2" className={classes.accordion__link}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                <i
                  className={classNames(
                    "fa-solid fa-angle-down",
                    classes.accordion__icon,
                    classes["accordion__icon--open"]
                  )}
                />
                <i
                  className={classNames(
                    "fa-solid fa-angle-up",
                    classes.accordion__icon,
                    classes["accordion__icon--close"]
                  )}
                />
              </a>
              <div className={classes.answer}>
                <p className={classes.answer__desc}>
                  لوورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </div>
            <div className={classes.accordion__item} id="question3">
              <a href="#quetion3" className={classes.accordion__link}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                <i
                  className={classNames(
                    "fa-solid fa-angle-down",
                    classes.accordion__icon,
                    classes["accordion__icon--open"]
                  )}
                />
                <i
                  className={classNames(
                    "fa-solid fa-angle-up",
                    classes.accordion__icon,
                    classes["accordion__icon--close"]
                  )}
                />
              </a>
              <div className={classes.answer}>
                <p className={classes.answer__desc}>
                  لوورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </div>
            <div className={classes.accordion__item} id="question4">
              <a href="#quetion4" className={classes.accordion__link}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
                <i
                  className={classNames(
                    "fa-solid fa-angle-down",
                    classes.accordion__icon,
                    classes["accordion__icon--open"]
                  )}
                />
                <i
                  className={classNames(
                    "fa-solid fa-angle-up",
                    classes.accordion__icon,
                    classes["accordion__icon--close"]
                  )}
                />
              </a>
              <div className={classes.answer}>
                <p className={classes.answer__desc}>
                  لوورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
