import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { FormContainer } from "./components/forms/FormContainer";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <FormContainer />
        </Route>
      </Switch>
    </Router>
  );
};
