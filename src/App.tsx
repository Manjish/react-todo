import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./routes/Routes";
import "./styles/app.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
