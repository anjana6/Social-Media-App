import './App.css';
import NavigationBar from './componet/NavBar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import Results from './views/Results/Results';
import Login from './componet/Login/Login';
import UserProfile from './views/UserProfile';
import EditProfile from './views/EditProfile/EditProfile';
import AddResults from './views/AddResults/AddResults';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/results' component={Results} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profile' component={UserProfile} />
          <Route exact path='/Edit-profile' component={EditProfile} />
          <Route exact path='/Add-Results' component={AddResults} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
