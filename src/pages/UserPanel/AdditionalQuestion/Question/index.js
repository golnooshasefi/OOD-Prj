import classes from "./Question.module.scss";
import { Marginer } from "../../../../components/marginer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
const questionIcon = <FontAwesomeIcon icon={faCircleQuestion} />;

function Question({ title, id, options, onSelect, setCanContinue }) {
  const onSelectOptionHandler = (event) => {
    const option = event.target.value;
    if (option) {
      setCanContinue();
      onSelect(id, option);
    }
  };

  return (
    <>
      <div className={classes.Question__iconContainer}>
        <i className={classes.Question__icon}>{questionIcon}</i>
        <h2>{title}</h2>
      </div>
      <Marginer direction="vertical" margin="2rem" />
      <div
        onChange={onSelectOptionHandler}
        className={classes.Question__container_3}
      >
        {Object.keys(options).map((optionKey) => (
          <div
            key={id + optionKey}
            // className={isOptionsImage ? classes.Question__container : ""}
          >
            <img
              className={classes.Question__img}
              src={options[optionKey]}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Question;
