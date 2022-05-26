import React, { useCallback, useState } from "react";
import Question from "./Question";
import classes from "./additionalQuestion.module.scss";
import axiosInstance from "../../../axios";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
const questionIcon = <FontAwesomeIcon icon={faCircleQuestion} />;

const questions = [
  {
    id: "1",
    option: "./../images/q7/1.jpg",
  },
  {
    id: "2",
    option: "./../images/q7/2.jpg",
  },
  {
    id: "3",
    option: "./../images/q7/3.jpg",
  },
  {
    id: "4",
    option: "./../images/q7/4.jpg",
  },
  {
    id: "5",
    option: "./../images/q7/5.jpg",
  },
];

function AdditionalQuestion() {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const setAnswerHandler = useCallback((id, option) => {
    // console.log(answers);
    setAnswers((answers) => ({ ...answers, [id]: option }));
  }, []);
  console.log(answers);

  const submitClickHandler = () => {
    console.log("submit");
    console.log(answers);
    const newAnswers = [];
    for (const [key, value] of Object.entries(answers)) {
      newAnswers.push(Array.isArray(value) ? value.join(",") : value);
    }
    console.log(newAnswers);

    // axiosInstance
    //   .post(`questions/submit/`, {
    //     data: newAnswers,
    //   })
    //   .then((res) => {
    //     navigate("/products", { replace: true });
    //   });
  };

  console.log(questions.length);
  console.log(Object.keys(answers).length);

  return (
    <div className={classes.container}>
      <div className={classes.container__headerContainer}>
        <div className={classes.container__headerContainer__header}>
          <span className={classes.container__headerContainer__text}>
            سوالات تکمیلی
          </span>
        </div>
      </div>
      <div className={classes.QuestionContainer}>
        <div className={classes.QuestionContainer__Question}>
          <div className={classes.QuestionContainer__Question__iconContainer}>
            <i className={classes.QuestionContainer__Question__icon}>
              {questionIcon}
            </i>
            <h2>{"به عکس‌های زیر امتیاز دهید:"}</h2>
          </div>
          {questions.map((q) => (
            <Question
              {...q}
              onSelect={setAnswerHandler}
              className={classes.QuestionContainer__Question}
            />
          ))}
        </div>
        <div className={classes.QuestionContainer__footer}>
          <button
            className={
              Object.keys(answers).length !== questions.length
                ? classes.QuestionContainer__btn__disable
                : classes.QuestionContainer__btn
            }
            onClick={submitClickHandler}
            disabled={Object.keys(answers).length !== questions.length}
          >
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdditionalQuestion;
