import "./App.css";
import Button from "@material-ui/core/Button";
import generate from "./components/FOCA_SM";

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={generate}>
        Generate
      </Button>
    </div>
  );
}

export default App;
