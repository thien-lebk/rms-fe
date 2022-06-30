import React, { useCallback, useContext, useEffect, useState, useRef, ReactNode } from "react";

const AuthContext = React.createContext({
    user:{},
});
export const useAuth = () => {
    return useContext(AuthContext);
  };
  interface Props {
    children?: ReactNode
    // any props that come into the component
}

const Global =  ({ ...Props }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [user, setUser] = useState(JSON.parse(localStorage.getItem('keyUser')??''));
    const logout = () => {
        setUser(null);
        localStorage.removeItem('keyUser')
      };
      return (
        <AuthContext.Provider
          value={{
            user,
          }}
        >
         {Props.children}
        </AuthContext.Provider>
      );
}

export default global;