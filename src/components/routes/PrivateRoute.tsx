import { Redirect, Route } from "react-router-dom";
import { useAuthState } from "../../hooks/auth";

type PrivateRouteProps = {
  children: React.ReactNode;
  path: string;
};

export const PrivateRoute = ({ children, ...rest }: PrivateRouteProps) => {
  const auth = useAuthState();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        )
      }
    />
  );
};
