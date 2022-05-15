import React, { useCallback, useEffect, useState } from "react";
// import Button from "../../components/shared/Button";
import ProductTags from "./ProductTags";
// import Question from "./Question";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import classes from "./AddProductSurvey.module.scss";
// import axiosInstance from "../../axios";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
const questions = [
  {
    id: "1",
    title:
      "این لباس برای چه بازه‌ای مناسب است؟(زیر 15 عدد1، بین 15 تا 30 عدد 2، بین 30 تا 45 عدد 3 و بالای 45 سال عدد 4)",
    options: [
      { key: 1, value: "1", isChecked: false },
      { key: 2, value: "2", isChecked: false },
      { key: 3, value: "3", isChecked: false },
      { key: 4, value: "4", isChecked: false },
    ],
    isOptionsImage: false,
    selectedOptionsLimit: 4,
    hasPriority: false,
  },
  {
    id: "2",
    title: "طیف رنگی این لباس در چه محدوده‌ای است؟(خیلی روشن:1، خیلی تیره: 4",
    options: [
      { key: 1, value: "1", isChecked: false },
      { key: 2, value: "2", isChecked: false },
      { key: 3, value: "3", isChecked: false },
      { key: 4, value: "4", isChecked: false },
    ],
    isOptionsImage: false,
    selectedOptionsLimit: 34,
    hasPriority: false,
  },

  {
    id: "3",
    title: "طرح این لباس ساده است یا شلوغ؟(از ساده به شلوغ)",
    options: [
      { key: 1, value: "1", isChecked: false },
      { key: 2, value: "2", isChecked: false },
      { key: 3, value: "3", isChecked: false },
    ],
    isOptionsImage: false,
    selectedOptionsLimit: 3,
    hasPriority: false,
  },
  {
    id: "4",
    title: "به میزان جذب بودن این محصول امتیاز دهید.(جذب: 1، لش: 3) ",
    options: [
      { key: 1, value: "1", isChecked: false },
      { key: 2, value: "2", isChecked: false },
      { key: 3, value: "3", isChecked: false },
    ],
    isOptionsImage: false,
    selectedOptionsLimit: 3,
    hasPriority: false,
  },
  {
    id: "5",
    title: "به میزان رسمی بودن این محصول امتیاز دهید.(رسمی: 1، غیررسمی: 3)",
    options: [
      { key: 1, value: "1", isChecked: false },
      { key: 2, value: "2", isChecked: false },
      { key: 3, value: "3", isChecked: false },
      { key: 4, value: "4", isChecked: false },
    ],
    isOptionsImage: false,
    selectedOptionsLimit: 4,
    hasPriority: false,
  },
];

function AddProductSurvey() {
  const [step, setStep] = useState(0);
  const [canContinue, setCanContinue] = useState(false);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const canContinueHandler = () => {
    setCanContinue(true);
  };

  const resetCanContinueHandler = () => {
    setCanContinue(false);
  };

  const setAnswerHandler = useCallback((id, option) => {
    setAnswers((answers) => ({ ...answers, [id]: option }));
  }, []);
  console.log(answers);
  const nextClickHandler = () => {
    if (step === questions.length - 1) return;
    setStep(step + 1);
  };

  const previousClickHandler = () => {
    if (step === 0) return;
    setStep(step - 1);
  };

  const submitClickHandler = () => {
    console.log("submit");
    console.log(answers);
    const newAnswers = [];
    for (const [key, value] of Object.entries(answers)) {
      console.log(key, value);
      newAnswers.push(Array.isArray(value) ? value.join(",") : value);
      console.log(newAnswers);
    }

    // axiosInstance
    //   .post(`questions/submit/`, {
    //     data: newAnswers,
    //   })
    //   .then((res) => {
    //     navigate("/product", { replace: true });
    //   });
  };

  useEffect(() => {
    resetCanContinueHandler();
  }, [step]);

  return (
    <div className={classes.Survey}>
      <div className={classes.Survey__container}>
        <h1 className={classes.Survey__header}>
          لطفا به سوالات زیر پاسخ دهید.
        </h1>
        {/* <div className={classes.Survey__QContainer}> */}
        {/* {questions.map((question) => (
        <Question key={question.id} {...question} onSelect={(id, option) => setAnswers({ ...answers, [id]: option })} />
      )} */}
        <div>
          {questions.map((q) => (
            <ProductTags
              // {...questions[step]}
              title={q.title}
              id={q.id}
              options={q.options}
              selectedOptionsLimit={q.selectedOptionsLimit}
              onSelect={setAnswerHandler}
              setCanContinue={canContinueHandler}
              resetCanContinue={resetCanContinueHandler}
            />
          ))}
        </div>
        {/* <div className={classes.Survey__footer}>
        {step !== 0 && (
          <button
            className={classes.Survey__btn}
            onClick={previousClickHandler}
            disabled={step === 0}
          >
            قبلی
          </button>
        )}

        <p className={classes.Survey__step}>
          <span>
            <span>سوال </span>
            <span>{digitsEnToFa(questions[step].id)} </span>
            <span>از </span>
            <span>{digitsEnToFa(questions.length)} </span>
          </span>
        </p>
        {step === questions.length - 1 ? (
          <button className={classes.Survey__btn} onClick={submitClickHandler}>
            ثبت
          </button>
        ) : (
          <button
            className={classes.Survey__btn}
            onClick={nextClickHandler}
            disabled={!canContinue || step === questions.length - 1}
          >
            بعدی
          </button>
        )}
      </div> */}
      </div>
    </div>
  );
}

export default AddProductSurvey;
