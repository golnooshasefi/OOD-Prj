import React, { useState } from "react";

const questions = [
  {
    id: "sdffddsf",
    title: "",
    options: { 1: "hey", 2: "hey 2", 3: "hey 3" },
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

  return (
    <div>
      <h1>Survey</h1>
      {/* {questions.map((question) => (
        <Question key={question.id} {...question} onSelect={(id, option) => setAnswers({ ...answers, [id]: option })} />
      )} */}
      <Question
        {...questions[step]}
        onSelect={(id, option) => setAnswers({ ...answers, [id]: option })}
      />
      <Button onClick={previousClickHandler} disabled={step === 0}>
        Previous
      </Button>
      <Button
        onClick={nextClickHandler}
        disabled={step === questions.length - 1}
      >
        Next
      </Button>
    </div>
  );
}

export default Survey;
