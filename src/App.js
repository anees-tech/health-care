import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>


          <Route path="/home">
            <Home></Home>
          </Route>


          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
