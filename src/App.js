import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Signup } from './components/signup/Signup';
import { Login } from './components/login/Login'
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer';
import projects from './pages/projects';


function App() {


  return (
    <BrowserRouter>
      <div>
        <Navbar className="" />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/contacts' component={Contact} />
          <Route path='/projects' component={projects} />
          <div className="main d-flex justify-content-center align-items-center">
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </div>
        </Switch>
        {/* <Route path="/:about" component={Home} />  */}

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
