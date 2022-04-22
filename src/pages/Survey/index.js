import React, { useCallback, useEffect, useState } from "react";
import Button from "../../components/shared/Button";
import MultipleChoicesQuestion from "./MultipleChoicesQuestion";
import Question from "./Question";
import classes from "./Survey.module.scss";

const questions = [
  {
    id: "1",
    title: "بازه سنی خود را اتخاب کنید",
    options: { 1: "زیر 12", 2: "12-18", 3: "18-30", 4: "30-50" },
    isOptionsImage: false,
  },
  {
    id: "2",
    title: "",
    options: { 1: "/statics/img-1.jpg", 2: "/statics/img-1.jpg" },
    isOptionsImage: true,
  },
  {
    id: "3",
    title: "",
    options: {
      1: "/statics/img-1.jpg",
      2: "/statics/img-1.jpg",
    },
    isOptionsImage: true,
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
        <Button onClick={previousClickHandler} disabled={step === 0}>
          Previous
        </Button>
        <p>
          <span>سوال{questions[step].id}از 10</span> <span></span>
        </p>
        <Button
          onClick={nextClickHandler}
          disabled={!canContinue || step === questions.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Survey;
