import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({
  type: "",
  username: "",
  phoneNumber: "",
  email: "",
  auth: false,
});
export function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    type: "",
    username: "",
    phoneNumber: "",
    email: "",
    auth: false,
  });
  console.log(user);
  const navigate = useNavigate();

  const login = (type, username, phoneNumber, email = "", isSurvey = false) => {
    setUser({
      type: type,
      username: username,
      phoneNumber: phoneNumber,
      email: email,
      auth: true,
    });
    // navigate(isSurvey ? "/survey" : "-1", { replace: true });
    // navigate(-1);
  };
  const logout = () => {
    setUser({
      email: "",
      auth: false,
    });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;
