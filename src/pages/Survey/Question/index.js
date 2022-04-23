import classes from "./Question.module.scss";
import { Marginer } from "../../../components/marginer";

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

  return (
    <>
      <h2>{title}</h2>
      <Marginer direction="vertical" margin="2rem" />
      <div
        onChange={onSelectOptionHandler}
        className={isOptionsImage ? classes.Question__container : ""}
      >
        {Object.keys(options).map((optionKey) => (
          <div
            key={id + optionKey}
            className={isOptionsImage ? classes.Question__container : ""}
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
