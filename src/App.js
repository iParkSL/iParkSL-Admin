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
import Login from "./componnet/login/Login";
import ParkOwnerReq from "./pages/parkOwnerReq/ParkOwnerReq";
import AddToMap from "./pages/addToMap/AddToMap";



function App() {
  return (
    <Router>
      {/* <Login/> */}
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
        <Route path="/request">
          <ParkOwnerReq/>
        </Route>
        <Route path="/addtomap">
          <AddToMap/>
        </Route>
      </Switch>
        
    </div>  
  </Router>
  );
}

export default App;
