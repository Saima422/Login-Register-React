import './App.css';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import { LoginContextProvider } from './utils/LoginContext';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {

  return (
    <LoginContextProvider >
      <Router>
      <div className="App">
      <div className="appContainer">
        <Navigation />

          <Switch>

            <Route exact path='/'>
              <LandingPage />
            </Route>

            <ProtectedRoute exact path='/home'>
              <Homepage />
            </ProtectedRoute>

            {/* <Route exact path='/home'>
              <Homepage />
            </Route> */}

            <Route path='/register'>
              <Register />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

          </Switch>

        <Footer />
      </div>
    </div>
    </Router>
    </LoginContextProvider>
  );
}

export default App;
