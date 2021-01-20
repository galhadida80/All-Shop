import { useContext } from "react";
import jwt_decode from "jwt-decode";

import AuthContext from "./AuthUserProvider";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (authToken) => {
    const user = jwt_decode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, login, logout };
};
