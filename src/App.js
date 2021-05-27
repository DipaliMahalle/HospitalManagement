import './App.css';
import Home from './components/Home';
import HomeLogIn from './components/HomeLogIn';
import { Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/HomeLogIn/:username" component={HomeLogIn} />
        </Switch>

      </div>
    </div>
  )
}
export default App;
