import { Route, Switch} from 'react-router-dom';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Signup } from './components/signup/Signup';
import { Login } from './components/login/Login'
<<<<<<< HEAD
import { Navbar } from './components/Navbar/Navbar';

=======
import { Signup} from './components/signup/Signup'
import { Carousel } from './components/carousel/Carousel'
>>>>>>> a24c087afd9f0f552600d371a072b86d6edaadd9

function App() {


  return (
<<<<<<< HEAD
    <BrowserRouter>
      <div>
        <Navbar className="" />

        <Switch>
          <Route exact path="/" component={Home} />
          <div className="main d-flex justify-content-center align-items-center">
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
=======
      <Switch>
        <Route path="/" exact>
          <Carousel/>
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
    
   
>>>>>>> a24c087afd9f0f552600d371a072b86d6edaadd9
  );
}

export default App;
