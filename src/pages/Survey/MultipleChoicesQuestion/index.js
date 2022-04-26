import { useEffect, useState } from "react";
import classes from "./MultipleChoicesQuestion.module.scss";
import { Marginer } from "../../../components/marginer";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
const questionIcon = <FontAwesomeIcon icon={faCircleQuestion} />;

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
      <div className={classes.Question__iconContainer}>
        <i className={classes.Question__icon}>{questionIcon}</i>
        <h2>{title}</h2>
      </div>
      <Marginer direction="vertical" margin="2rem" />
      <div className={isOptionsImage ? classes.Question__container : ""}>
        {optionsWithChecked.map((option) => (
          <div key={id + option.key}>
            <input
              name={id + option.key}
              id={id + option.key}
              type="checkbox"
              value={option.key}
              onChange={onChangeHandler}
              checked={option.isChecked}
              className={classes.Question__checkbox}
              // defaultChecked={defaultValue?.includes(option.key)}
              // defaultValue.includes
            />
            <label
              htmlFor={id + option.key}
              className={
                isOptionsImage ? classes.Question__pic : classes.Question__label
              }
            >
              {isOptionsImage ? (
                <img
                  src={option.value}
                  alt=""
                  className={classes.Question__img}
                />
              ) : (
                option.value
              )}
              {hasPriority && selectedOptions.includes(option.key + "") && (
                <div className={classes.Question__priority}>
                  {digitsEnToFa(selectedOptions.indexOf(option.key + "") + 1)}
                </div>
              )}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default MultipleChoicesQuestion;
