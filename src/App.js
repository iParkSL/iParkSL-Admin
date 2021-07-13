import Topbar from "./componnet/topbar/Topbar";
import Sidebar from "./componnet/sidebar/Sidebar"
import Home from "./pages/home/Home";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";



function App() {
  return (
    <Router>
      <Topbar/>
      <div className="containersidebar">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/users">
            <UserList/>
          </Route>
          <Route path="/user/:userID">
            <User/>
          </Route>
        </Switch>
          
      </div>  
    </Router>
  );
}

export default App;
