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
import Report from "./pages/reports/Report";
import Editprofile from "./pages/editProfile/Editprofile";
import Viewmap from "./pages/viewMap/Viewmap";
import ReceivedPayment from "./pages/receivedPayments/Receivedpayment";
import ViewCustomers from "./pages/viewCustomer/Viewcustomer";
import Requests from "./pages/requests/Requests";


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
        <Route path="/parkownerrequest/:userID">
          <ParkOwnerReq/>
        </Route>
        <Route path="/addtomap">
          <AddToMap/>
        </Route>
        <Route path="/report">
          <Report/>
        </Route>
        <Route path="/editprofile">
          <Editprofile/>
        </Route>
        <Route path="/viewmap">
          <Viewmap/>
        </Route>
        <Route path="/receivedpayments">
          <ReceivedPayment/>
        </Route>
        <Route path="/viewcustomers">
          <ViewCustomers/>
        </Route>
        <Route path="/requests">
          <Requests/>
        </Route>
      </Switch>
        
    </div>  
  </Router>
  );
}

export default App;
