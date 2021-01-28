import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { AuthProvider } from "./context/authContext";
import { PrivateRoute } from "./components/routes/PrivateRoute";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <PrivateRoute path="/dashboard">
            <div>Witam</div>
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
};
