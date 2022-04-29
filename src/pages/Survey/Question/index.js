import classes from "./Question.module.scss";
import { Marginer } from "../../../components/marginer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
const questionIcon = <FontAwesomeIcon icon={faCircleQuestion} />;

function Question({
  title,
  id,
  options,
  isOptionsImage,
  onSelect,
  setCanContinue,
}) {
  const onSelectOptionHandler = (event) => {
    const option = event.target.value;
    if (option) {
      setCanContinue();
      onSelect(id, option);
    }
  };
  let containerStyle;
  if (Object.entries(options).length === 3) {
    containerStyle = classes.Question__container_3;
  } else if (Object.entries(options).length === 4) {
    containerStyle = classes.Question__container_4;
  } else if (Object.entries(options).length === 5) {
    containerStyle = classes.Question__container_5;
  }

  return (
    <>
      <div className={classes.Question__iconContainer}>
        <i className={classes.Question__icon}>{questionIcon}</i>
        <h2>{title}</h2>
      </div>
      <Marginer direction="vertical" margin="2rem" />
      <div
        onChange={onSelectOptionHandler}
        className={isOptionsImage ? containerStyle : ""}
      >
        {Object.keys(options).map((optionKey) => (
          <div
            key={id + optionKey}
            // className={isOptionsImage ? classes.Question__container : ""}
          >
            <input
              name={id}
              id={id + optionKey}
              type="radio"
              value={optionKey}
              className={classes.Question__radiobutton}
            />
            <label
              htmlFor={id + optionKey}
              className={
                isOptionsImage ? classes.Question__pic : classes.Question__label
              }
            >
              {isOptionsImage ? (
                <img
                  className={classes.Question__img}
                  src={options[optionKey]}
                  alt=""
                />
              ) : (
                options[optionKey]
              )}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default Question;
