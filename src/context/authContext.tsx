import React, { createContext, useReducer } from "react";

type Action =
  | {
      type: "addJWT";
      payload: string;
    }
  | {
      type: "deleteJWT";
    };

type State = {
  jwt: string | undefined;
};

type Dispatch = (action: Action) => void;

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthStateContext = createContext<State | undefined>(undefined);
export const AuthDispatchContext = createContext<Dispatch | undefined>(
  undefined
);

const authReducer = (_state: State, action: Action) => {
  switch (action.type) {
    case "addJWT": {
      return { jwt: action.payload };
    }
    case "deleteJWT": {
      return { jwt: undefined };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, { jwt: undefined });

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
