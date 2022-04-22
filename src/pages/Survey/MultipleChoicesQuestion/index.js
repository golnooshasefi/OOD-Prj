import { useEffect, useState } from "react";

function MultipleChoicesQuestion({
  title,
  id,
  options,
  selectedOptionsLimit,
  onSelect,
  isOptionsImage,
  hasPriority,
  setCanContinue,
  resetCanContinue,
}) {
  const [optionsWithChecked, setOptionsWithChecked] = useState(options);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onChangeHandler = (event) => {
    const target = event.target;
    const value = target.value; // option.key شماره گزینه
    const option = optionsWithChecked[value - 1]; // option object in optionsWithChecked

    if (!option.isChecked) {
      if (selectedOptions.length < selectedOptionsLimit) {
        setSelectedOptions((selectedOptions) => [...selectedOptions, value]);
        const newOptionsWithChecked = JSON.parse(
          JSON.stringify(optionsWithChecked)
        );
        newOptionsWithChecked[value - 1].isChecked = true;
        setOptionsWithChecked(newOptionsWithChecked);
      }
    } else {
      setSelectedOptions((selectedOptions) => {
        selectedOptions.splice(selectedOptions.indexOf(value), 1);
        return selectedOptions;
      });
      const newOptionsWithChecked = JSON.parse(
        JSON.stringify(optionsWithChecked)
      );
      newOptionsWithChecked[value - 1].isChecked = false;
      setOptionsWithChecked(newOptionsWithChecked);
    }
  };

  useEffect(() => {
    onSelect(id, selectedOptions);
  }, [onSelect, id, selectedOptions]);

  useEffect(() => {
    setOptionsWithChecked(options);
    setSelectedOptions([]);
  }, [options]);

  useEffect(() => {
    if (selectedOptions.length === selectedOptionsLimit) setCanContinue();
    else resetCanContinue();
  }, [
    setCanContinue,
    resetCanContinue,
    selectedOptionsLimit,
    selectedOptions.length,
  ]);

  return (
    <>
      <h2>{title}</h2>
      <div>
        {optionsWithChecked.map((option) => (
          <div key={id + option.key}>
            <input
              name={id + option.key}
              id={id + option.key}
              type="checkbox"
              value={option.key}
              onChange={onChangeHandler}
              checked={option.isChecked}
              // defaultChecked={defaultValue?.includes(option.key)}
              // defaultValue.includes
            />
            <label htmlFor={id + option.key}>
              {isOptionsImage ? (
                <img src={option.value} alt="" />
              ) : (
                option.value
              )}
            </label>
            {hasPriority && selectedOptions.includes(option.key) && (
              <div>{selectedOptions.indexOf(option.key) + 1}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default MultipleChoicesQuestion;
