import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";

const UserContext = createContext({
  type: "",
  username: "",
  phoneNumber: "",
  email: "",
  balance: "",
  score: "",
  auth: false,
});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    type: "",
    username: "",
    phoneNumber: "",
    email: "",
    balance: "",
    score: "",
    auth: false,
  });
  console.log(user);
  const navigate = useNavigate();

  const login = (type, username, phoneNumber, email , balance, score, isSurvey = false) => {
    setUser({
      type: type,
      username: username,
      phoneNumber: phoneNumber,
      email: email,
      balance: balance,
      score: score,
      auth: true,
    });
    localStorage.setItem(
      "userInformation",
      JSON.stringify({
        type: type,
        username: username,
        phoneNumber: phoneNumber,
        email: email,
        balance: balance,
        score: score,
        auth: true,
      })
    );
    
  };

  const updateName = (username = user.username) => {
    setUser((prev) => ({ ...prev, username }));
    localStorage.removeItem("userInformation");
    localStorage.setItem("userInformation", JSON.stringify(user));
  };

  const updatePhone = (phoneNumber = user.phoneNumber) => {
    setUser((prev) => ({ ...prev, phoneNumber }));
    localStorage.removeItem("userInformation");
    localStorage.setItem("userInformation", JSON.stringify(user));
  };

  const updateScore = (score = user.score) => {
    setUser((prev) => ({ ...prev, score }));
    localStorage.removeItem("userInformation");
    localStorage.setItem("userInformation", JSON.stringify(user));
  };

  const checkLogin = () => {
    if (localStorage.getItem("access_token") !== null) {
      console.log("test");
      axiosInstance
        .post(`accounts/api/token/verify/`, {
          token: localStorage.getItem("access_token"),
        })
        .then((res) => {
          console.log("res" + res);
          if (res.status === 200) {
            console.log(res);
            console.log(localStorage.getItem("userInformation"));
            setUser(JSON.parse(localStorage.getItem("userInformation")));
          } else {
            console.log("logout checklogin");
            logout();
          }
        });
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("userInformation");
    setUser({
      type: "",
      username: "",
      phoneNumber: "",
      email: "",
      balance: "",
      score: "",
      auth: false,
    });
  };

  return (
    <UserContext.Provider
      value={{ user, login, logout, checkLogin, updateName, updatePhone, updateScore }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;
