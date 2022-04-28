import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({ email: "", auth: false });
export function UserContextProvider({ children }) {
  const [user, setUser] = useState({ email: "", auth: false });
  console.log(user);
  const navigate = useNavigate();

  const login = (email, isSurvey = false) => {
    setUser({
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
