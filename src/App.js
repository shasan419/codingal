import { Route, Switch } from "react-router";
import Passengers from "./views/Passengers/Passengers";
import Home from "./views/Home/Home";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <Switch>
      <Route path="/passengers" component={Passengers} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
}

export default App;
