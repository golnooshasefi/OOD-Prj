import React, { useCallback, useEffect, useState } from "react";
import Button from "../../components/shared/Button";
import MultipleChoicesQuestion from "./MultipleChoicesQuestion";
import Question from "./Question";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import classes from "./Survey.module.scss";
import axiosInstance from "../../axios";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const questions = [
  {
    id: "1",
    title: "بازه سنی خود را انتخاب کنید:",
    options: {
      1: "زیر 15 سال",
      2: "بین 15 تا 30 سال",
      3: "بین 30 تا 45 سال",
      4: "بالای 45",
    },
    isOptionsImage: false,
  },
  {
    id: "2",
    title: "کدام طیف رنگی را برای پوشاک خود می‌پسندید.",
    options: {
      1: "./images/q2/6.jpg",
      2: "./images/q2/2.png",
      3: "./images/q2/3.png",
      4: "./images/q2/4.png",
      5: "./images/q2/5.png",
      // 6: "https://dkstatics-public.digikala.com/digikala-products/7adc2bbaa968a555893cd3b7336279ce11856319_1644051263.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      // 7: "https://dkstatics-public.digikala.com/digikala-products/7adc2bbaa968a555893cd3b7336279ce11856319_1644051263.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    isOptionsImage: true,
  },

  {
    id: "3",
    title: "از بین لباس‌های زیر کدام یک به سلیقه شما نزدیک‌تر است؟",
    options: {
      1: "ggfk",
      2: "jfj",
      3: "jfj",
    },
    isOptionsImage: true,
  },
  {
    id: "4",
    title: "از بین لباس‌های زیر کدام یک به سلیقه شما نزدیک‌تر است؟",
    options: {
      1: "./images/q7/2.jpg",
      2: "./images/q7/2.jpg",
      3: "./images/q7/2.jpg",
    },
    isOptionsImage: true,
  },
  {
    id: "5",
    title: "از بین لباس‌های زیر کدام یک به سلیقه شما نزدیک‌تر است؟",
    options: {
      1: "/statics/img-1.jpg",
      2: "/statics/img-1.jpg",
      3: "/statics/img-1.jpg",
      4: "/statics/img-1.jpg",
    },
    isOptionsImage: true,
  },
  {
    id: "6",
    title: "در انتخاب پوشاک خود به ترتیب به کدام ویژگی اهمیت بیشتری می‌دهید؟",
    options: [
      { key: 1, value: "رسمی - غیررسمی", isChecked: false },
      { key: 2, value: "طرح‌دار و ساده", isChecked: false },
      { key: 3, value: "تنگی - گشادی", isChecked: false },
    ],
    isOptionsImage: false,
    selectedOptionsLimit: 3,
    hasPriority: true,
  },
  {
    id: "7",
    title:
      "از بین سبک‌های زیر ۳ مورد  که با سلیقه شما بیشترین همخوانی را دارد، انتخاب کنید. ",
    options: [
      {
        key: 1,
        value: "./images/q7/1.jpg",
        isChecked: false,
      },
      { key: 2, value: "./images/q7/2.jpg", isChecked: false },
      { key: 3, value: "./images/q7/3.jpg", isChecked: false },
      { key: 4, value: "./images/q7/4.jpg", isChecked: false },
      { key: 5, value: "./images/q7/5.jpg", isChecked: false },
      { key: 6, value: "./images/q7/6.jpg", isChecked: false },
      { key: 7, value: "./images/q7/7.jpg", isChecked: false },
      { key: 8, value: "./images/q7/8.jpg", isChecked: false },
      { key: 9, value: "./images/q7/9.jpg", isChecked: false },
      { key: 10, value: "./images/q7/10.PNG", isChecked: false },
      { key: 11, value: "./images/q7/11.jpg", isChecked: false },
      { key: 12, value: "./images/q7/12.jpg", isChecked: false },
    ],
    isOptionsImage: true,
    selectedOptionsLimit: 3,
    hasPriority: false,
  },
  // {
  //   id: "8",
  //   title: "عنوان سوال",
  //   options: [
  //     { key: 1, value: "از ۱۲ تا ۱۵ سال", isChecked: false },
  //     { key: 2, value: "از ۱۵ تا ۱۸ سال", isChecked: false },
  //     { key: 3, value: "از ۱۸ تا ۲۰ سال", isChecked: false },
  //     { key: 4, value: "از ۲۱ تا ۲۲ سال", isChecked: false },
  //     { key: 5, value: "از ۲۲ تا ۲۳ سال", isChecked: false },
  //     { key: 6, value: "از ۲۳ تا ۲۴ سال", isChecked: false },
  //     { key: 7, value: "از 24 تا 25 سال", isChecked: false },
  //     { key: 8, value: "از 26 تا 26 سال", isChecked: false },
  //     { key: 9, value: "از 27 تا 28 سال", isChecked: false },
  //     { key: 10, value: "از 28 تا 29 سال", isChecked: false },
  //   ],
  //   isOptionsImage: false,
  //   selectedOptionsLimit: 3,
  //   hasPriority: false,
  // },
];

function Survey() {
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

      // const newValue = Array.isArray(value) ? value.join(",") : value;
      // console.log(newValue);
      // newAnswers = [...newAnswers, newValue];
    }
    // const api = "http://mmoslemifar.pythonanywhere.com/"
    // axios
    //   .post("http://mmoslemifar.pythonanywhere.com/questions/submit/", {
    //     data: newAnswers,
    //     headers: {
    //       Authorization: "Bearer " + localStorage.getItem("access_token"),
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    axiosInstance
      .post(`questions/submit/`, {
        data: newAnswers,
      })
      .then((res) => {
        // login(formData.email);
        navigate("/product", { replace: true });
        //   // history.push("/login");
        //   // console.log("axios");
        // console.log(res);
        // console.log(res.data);
      });
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
      </div>
    </div>
  );
}

export default Survey;
