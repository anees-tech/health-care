import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServiceDetails from './components/Services/ServiceDetails';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>


            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/logIn">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>


            <Route path="*">
              <NotFound></NotFound>
            </Route>
            
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
