import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Alluser from './pages/Allusers/Alluser';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import SignIn from './pages/SignIn/SignIn';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/Sign-In'>
          <SignIn/>
        </Route>
        <Route path='/dashboard'>
          <Dashboard/>
        </Route>
        <Route path='/all-users'>
          <Alluser/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
