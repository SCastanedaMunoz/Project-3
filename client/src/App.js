import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TestPage from "./pages/TestPage";

function App() {

  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path="/dashboard" exact component={Dashboard}><Dashboard /></Route>
          <Route path="/" exact component={SignIn}><SignIn /></Route>
          <Route path="/SignUp" exact component={SignUp}><SignUp /></Route>
          <Route path="/test" exact component={TestPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
