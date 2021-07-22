import { Route, Switch} from 'react-router-dom';
import './App.css';
import { Login } from './components/login/Login'
import { Signup} from './components/signup/Signup'

function App() {


  return (
    <div className="main">
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
