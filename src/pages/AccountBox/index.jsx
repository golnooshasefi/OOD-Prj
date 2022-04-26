import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 575px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;

  @media (min-width: 400px) {
    width: 400px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 8.5em;

  @media (min-width: 400px) {
    margin-top: -5px;
    padding-bottom: 10em;
  }
`;

const BackDrop = styled(motion.div)`
  z-index: 5;
  width: 168%;
  height: 500px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  // background: rgb(241, 196, 15);
  // background: linear-gradient(
  //   58deg,
  //   rgba(241, 196, 15, 1) 20%,
  //   rgba(243, 172, 18, 1) 100%
  // );
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #9389bd 0%, #5e4d9b 100%);

  @media (min-width: 400px) {
    width: 139%;
    transform: rotate(20deg);
    margin-left: -10px;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  direction: rtl;
  font-size: 36px;
  /* font-weight: 500; */
  /* line-height: 1.24; */
  color: #fff;
  z-index: 10;
  margin: 0;
  text-align: center;
`;

const BigText = styled.h5`
  direction: rtl;
  color: #fff;
  font-weight: 500;
  font-size: 24px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const SmallText = styled.h5`
  direction: rtl;
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const AppContainer = styled.div`
  /* font-family: Vazir; */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// function getBackdropVariants() {
//   return {
//     expanded: {
//       width: "233%",
//       height: "1050px",
//       borderRadius: "20%",
//       transform: "rotate(60deg)",
//     },
//     collapsed: {
//       width: window.matchMedia("(min-width: 400px)").matches ? "139%" : "168%",
//       height: "500px",
//       borderRadius: "50%",
//       transform: window.matchMedia("(min-width: 400px)").matches
//         ? "rotate(20deg)"
//         : "rotate(60deg)",
//     },
//   };
// }

function getBackdropVariants() {
  return {
    expanded: {
      width: "233%",
      height: "1050px",
      borderRadius: "20%",
      transform: "rotate(60deg)",
    },
    collapsed: {
      width: window.innerWidth >= 400 ? "139%" : "168%",
      height: "500px",
      borderRadius: "50%",
      transform: window.innerWidth >= 400 ? "rotate(20deg)" : "rotate(60deg)",
    },
  };
}

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export default function AccountBox(props) {
  console.log("render");
  let backdropVariants = getBackdropVariants();
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");
  // const [backdropVariants, setBackdropVariants] = useState(
  //   getBackdropVariants()
  // );
  // const [curWidth, setCurWidth] = useState(window.innerWidth);
  const [biggerThan400, setBiggerThan400] = useState(
    window.innerWidth >= 400 ? true : false
  );
  // console.log(curWidth);

  // const [curWidth, setCurWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      // const curWidth = window.innerWidth >= 400 ? true : false;
      // if (curWidth !== biggerThan400) setBiggerThan400(curWidth);
      // console.log(curWidth);
      setBiggerThan400(window.innerWidth >= 400 ? true : false);
      // backdropVariants = getBackdropVariants();
    }
    window.addEventListener("resize", handleResize);
  });
  // const [isMinWidth, setMinWidth] = useState(
  //   window.matchMedia("(min-width: 400px)").matches
  // );
  // const [isGreaterThan400px, setIsGreaterThan400px] = useState(true);
  // const [curBackdropVariants, setBackdropVariants] = useState(backdropVariants);

  // useEffect(() => {
  //   console.log(window.innerWidth);
  // }, [window.innerWidth !== curWidth]);

  // useEffect(() => {
  //   console.log(isMinWidth);
  //   function handleResize() {
  //     if (window.innerWidth > 900) {
  //       setIsGreaterThan400px(true);
  //     } else {
  //       setIsGreaterThan400px(false);
  //     }
  //   }

  //   handleResize();

  //   window.addEventListener("resize", handleResize);
  // }, [isMinWidth]);

  // useEffect(() => {
  //   console.log(isMinWidth);
  // }, [isMinWidth]);

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <AppContainer>
        <BoxContainer>
          <TopContainer>
            <BackDrop
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={backdropVariants}
              transition={expandingTransition}
            />
            {active === "signin" && (
              <HeaderContainer>
                <HeaderText>سبکینو</HeaderText>
                <BigText>خوش آمدید</BigText>
                <SmallText>
                  لطفا برای ادامه، وارد حساب کاربری خود شوید.
                </SmallText>
              </HeaderContainer>
            )}
            {active === "signup" && (
              <HeaderContainer>
                <HeaderText>سبکینو</HeaderText>
                <BigText>خوش آمدید</BigText>
                <SmallText>
                  لطفا برای ادامه، حساب کاربری خود را بسازید.
                </SmallText>
              </HeaderContainer>
            )}
          </TopContainer>
          <InnerContainer>
            {active === "signin" && <LoginForm />}
            {active === "signup" && <SignupForm />}
          </InnerContainer>
        </BoxContainer>
      </AppContainer>
    </AccountContext.Provider>
  );
}
