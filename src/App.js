import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Login } from './components/login/Login'
import { Signup} from './components/signup/Signup'
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer'

function App() {


  return (
    <BrowserRouter>
       <div>
        <Navbar className="" />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <div className="main d-flex justify-content-center align-items-center"> 
           <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </div> 
        </Switch>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
