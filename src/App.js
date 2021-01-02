import "./App.css";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard"
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router >
      <Switch>
      <Route path="/dashboard"><Dashboard /></Route>
      <Route path="/">
      <SignIn />
        </Route>
        </Switch>
    </Router>
  )
}

export default App;
