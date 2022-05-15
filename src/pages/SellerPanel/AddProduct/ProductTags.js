import { useEffect, useState } from "react";
import classes from "./ProductTags.module.scss";
import { Marginer } from "../../../components/marginer";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
const questionIcon = <FontAwesomeIcon icon={faCircleQuestion} />;

function ProductTags({
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
  console.log(options);
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
      <div className={classes.ProductTags}>
        <div className={classes.ProductTags__container}>
          {/* <i className={classes.Question__icon}>{questionIcon}</i> */}
          <div className={classes.ProductTags__question}>
            <h2 className={classes.ProductTags__title}>{title}</h2>

            {/* <Marginer direction="vertical" margin="2rem" /> */}
            <div className={classes.ProductTags__options}>
              {optionsWithChecked.map((option) => (
                <div key={id + option.key}>
                  <input
                    name={id + option.key}
                    id={id + option.key}
                    type="checkbox"
                    value={option.key}
                    onChange={onChangeHandler}
                    checked={option.isChecked}
                    className={classes.ProductTags__checkbox}
                    // defaultChecked={defaultValue?.includes(option.key)}
                    // defaultValue.includes
                  />
                  <label
                    htmlFor={id + option.key}
                    className={classes.ProductTags__label}
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
                    {/* {hasPriority && selectedOptions.includes(option.key + "") && (
                <div className={classes.Question__priority}>
                  {digitsEnToFa(selectedOptions.indexOf(option.key + "") + 1)}
                </div>
              )} */}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductTags;
