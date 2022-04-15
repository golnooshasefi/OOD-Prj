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
            <label
              for={id + optionKey}
              className={classnames({ classKhas: isOptionsImage })}
            >
              '
              {isOptionsImage ? (
                <img src={options[optionKey]} />
              ) : (
                options[optionKey]
              )}
            </label>
            <input
              name={id}
              id={id + optionKey}
              type="radio"
              value={optionKey}
            />
          </div>
        ))}
      </div>
    </>
  );
}
