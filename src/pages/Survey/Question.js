import classes from "./Question.module.scss";

function Question({ title, id, options, isOptionsImage, onSelect }) {
  const onSelectOptionHandler = (event) => {
    const option = event.target.value;
    onSelect(id, option);
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
            <label for={id + optionKey} className={classes.Question__label}>
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
