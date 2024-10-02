import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [userToken, setUserToken] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loggedIn = async () => {
    setIsLoading(true);
    try {
      let token = await AsyncStorage.getItem("userToken");
      setUserToken(token);
      setIsLoggedIn(true);
      const auth = getAuth();
      const res = await signInWithCustomToken(auth, token);
      console.log("RES: ", res);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loggedIn();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        userToken,
        setUserToken,
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        setIsLoading,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
