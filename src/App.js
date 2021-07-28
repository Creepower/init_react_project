import { Route, Switch} from 'react-router-dom';
import './App.css';
import { Login } from './components/login/Login'
import { Signup} from './components/signup/Signup'
import { Home } from './components/pages/home/Home'

function App() {


  return (
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <div className="main">
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </div>
      </Switch>
    
   
  );
}

export default App;
