
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInfo from './Components/UserInfo/UserInfo';
import SideBar from './Components/SideBar/SideBar';
import Admin from './Components/AdminPage/Admin';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <Router>

<Switch>
  
  <Route path='/user'>
    <UserInfo/>
  </Route>
  <Route exact path='/'>
    <SideBar/>
  </Route>
</Switch>
   </Router>
      

  

  );
}

export default App;
