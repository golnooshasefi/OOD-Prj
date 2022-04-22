import classes from "./Question.module.scss";

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
      <div onChange={onSelectOptionHandler}>
        {Object.keys(options).map((optionKey) => (
          <div key={id + optionKey}>
            <input
              name={id}
              id={id + optionKey}
              type="radio"
              value={optionKey}
              className={classes.Question__radiobutton}
            />
            <label htmlFor={id + optionKey} className={classes.Question__label}>
              {isOptionsImage ? (
                <img src={options[optionKey]} />
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
