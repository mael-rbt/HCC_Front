import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducers/reducer";

const TokenContext = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TokenContext.Provider value={[state, dispatch]}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, Provider };
