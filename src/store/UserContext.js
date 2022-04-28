import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({ name: "", auth: false });
export function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: "", auth: false });
  const navigate = useNavigate();

  const login = (name, isSurvey = false) => {
    setUser({
      name: name,
      auth: true,
    });
    // navigate(isSurvey ? "/survey" : "-1", { replace: true });
    navigate(-1);
  };
  const logout = () => {
    setUser({
      name: "",
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
