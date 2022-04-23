import React, { useCallback, useEffect, useState } from "react";
import Button from "../../components/shared/Button";
import MultipleChoicesQuestion from "./MultipleChoicesQuestion";
import Question from "./Question";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import classes from "./Survey.module.scss";

const questions = [
  {
    id: "1",
    title: "بازه سنی خود را انتخاب کنید:",
    options: {
      1: "زیر ۱۲",
      2: "بین 12 تا 18 سال",
      3: "بین 18 تا 30 سال",
      4: "بین 30 تا 50 سال",
    },
    isOptionsImage: false,
  },
  {
    id: "2",
    title: "رنگ مورد نظر خود را انتخاب کنید",
    options: {
      1: "https://img.dtcn.com/image/themanual/east-dane-hero-image-500x500.jpg",
      2: "https://dkstatics-public.digikala.com/digikala-products/7adc2bbaa968a555893cd3b7336279ce11856319_1644051263.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      3: "https://dkstatics-public.digikala.com/digikala-products/7adc2bbaa968a555893cd3b7336279ce11856319_1644051263.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      4: "https://dkstatics-public.digikala.com/digikala-products/7adc2bbaa968a555893cd3b7336279ce11856319_1644051263.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      5: "https://dkstatics-public.digikala.com/digikala-products/7adc2bbaa968a555893cd3b7336279ce11856319_1644051263.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      // 6: "https://dkstatics-public.digikala.com/digikala-products/7adc2bbaa968a555893cd3b7336279ce11856319_1644051263.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      // 7: "https://dkstatics-public.digikala.com/digikala-products/7adc2bbaa968a555893cd3b7336279ce11856319_1644051263.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    isOptionsImage: true,
  },

  {
    id: "3",
    title: "",
    options: {
      1: "ggfk",
      2: "jfj",
    },
    isOptionsImage: false,
  },
  {
    id: "4",
    title: "",
    options: {
      1: "/statics/img-1.jpg",
      2: "/statics/img-1.jpg",
    },
    isOptionsImage: true,
  },
  {
    id: "5",
    title: "",
    options: {
      1: "/statics/img-1.jpg",
      2: "/statics/img-1.jpg",
    },
    isOptionsImage: true,
  },
  {
    id: "6",
    title: "عنوان سوال",
    options: [
      { key: 1, value: "از ۱۲ تا ۱۵ سال", isChecked: false },
      { key: 2, value: "از ۱۵ تا ۱۸ سال", isChecked: false },
      { key: 3, value: "از ۱۸ تا ۲۰ سال", isChecked: false },
    ],
    isOptionsImage: false,
    selectedOptionsLimit: 3,
    hasPriority: true,
  },
  {
    id: "7",
    title: "عنوان سوال",
    options: [
      { key: 1, value: "از ۱۲ تا ۱۵ سال", isChecked: false },
      { key: 2, value: "از ۱۵ تا ۱۸ سال", isChecked: false },
      { key: 3, value: "از ۱۸ تا ۲۰ سال", isChecked: false },
      { key: 4, value: "از ۲۱ تا ۲۲ سال", isChecked: false },
      { key: 5, value: "از ۲۲ تا ۲۳ سال", isChecked: false },
      { key: 6, value: "از ۲۳ تا ۲۴ سال", isChecked: false },
      { key: 3, value: "از ۱۸ تا ۲۰ سال", isChecked: false },
      { key: 4, value: "از ۲۱ تا ۲۲ سال", isChecked: false },
      { key: 5, value: "از ۲۲ تا ۲۳ سال", isChecked: false },
      { key: 6, value: "از ۲۳ تا ۲۴ سال", isChecked: false },
    ],
    isOptionsImage: false,
    selectedOptionsLimit: 3,
    hasPriority: false,
  },
];

function Survey() {
  const [step, setStep] = useState(0);
  const [canContinue, setCanContinue] = useState(false);
  const [answers, setAnswers] = useState({});

  const canContinueHandler = () => {
    setCanContinue(true);
  };

  const resetCanContinueHandler = () => {
    setCanContinue(false);
  };

  const setAnswerHandler = useCallback((id, option) => {
    setAnswers((answers) => ({ ...answers, [id]: option }));
  }, []);

  const nextClickHandler = () => {
    if (step === questions.length - 1) return;
    setStep(step + 1);
  };

  const previousClickHandler = () => {
    if (step === 0) return;
    setStep(step - 1);
  };

  useEffect(() => {
    resetCanContinueHandler();
  }, [step]);

  return (
    <div className={classes.Survey__container}>
      <h1 className={classes.Survey__header}>سبکینو</h1>
      {/* <div className={classes.Survey__QContainer}> */}
      {/* {questions.map((question) => (
        <Question key={question.id} {...question} onSelect={(id, option) => setAnswers({ ...answers, [id]: option })} />
      )} */}
      <div className={classes.Survey__Question}>
        {step < 5 ? (
          <Question
            {...questions[step]}
            onSelect={setAnswerHandler}
            setCanContinue={canContinueHandler}
            resetCanContinue={resetCanContinueHandler}
            className={classes.Survey__Question}
          />
        ) : (
          <MultipleChoicesQuestion
            {...questions[step]}
            onSelect={setAnswerHandler}
            setCanContinue={canContinueHandler}
            resetCanContinue={resetCanContinueHandler}
          />
        )}
      </div>
      <div className={classes.Survey__footer}>
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
        <button
          className={classes.Survey__btn}
          onClick={nextClickHandler}
          disabled={!canContinue || step === questions.length - 1}
        >
          بعدی
        </button>
      </div>
    </div>
  );
}

export default Survey;
