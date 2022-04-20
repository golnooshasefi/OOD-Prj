import React, { useState } from "react";
import Button from "../../components/shared/Button";
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
    id: "sdffddsf",
    title: "",
    options: { 1: "/statics/img-1.jpg", 2: "/statics/img-1.jpg" },
    isOptionsImage: true,
  },
  {
    id: "sdffddsf",
    title: "",
    options: { 1: "/statics/img-1.jpg", 2: "/statics/img-1.jpg" },
    isOptionsImage: true,
  },
];

function Survey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const nextClickHandler = () => {
    if (step === questions.length - 1) return;
    setStep(step + 1);
  };

  const previousClickHandler = () => {
    if (step === 0) return;
    setStep(step - 1);
  };

  console.log(questions);
  return (
    <div className={classes.Survey__container}>
      <h1 className={classes.Survey__header}>سبکینو</h1>
      {/* <div className={classes.Survey__QContainer}> */}
      {/* {questions.map((question) => (
        <Question key={question.id} {...question} onSelect={(id, option) => setAnswers({ ...answers, [id]: option })} />
      )} */}
      <div className={classes.Survey__Question}>
        <Question
          {...questions[step]}
          onSelect={(id, option) => setAnswers({ ...answers, [id]: option })}
          className={classes.Survey__Question}
        />
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
          disabled={step === questions.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Survey;
