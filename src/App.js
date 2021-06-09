import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Switch>
              <Route>
                    <Navbar/>
              </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
