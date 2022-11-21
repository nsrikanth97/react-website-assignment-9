import { createContext, ReactNode, useContext, useState } from "react";
import { FC } from "react";

interface AppContextInterface {
  loginState: boolean;
  fullName: string;
  setFullName : Function;
  setLoginState: Function;
  subscribe:boolean;
  setSubscribe :Function;
}

interface BaseLayoutProps {
  children?: ReactNode;
}

const StateContext = createContext({} as AppContextInterface);

export const StateContextProvider: FC<BaseLayoutProps> = ({ children }) => {
  const [fullName, setFullName] = useState("");
  const [loginState, setLoginState] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const value: AppContextInterface = {
    loginState,
    fullName,
    setFullName,
    setLoginState,
    setSubscribe,
    subscribe
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
};
