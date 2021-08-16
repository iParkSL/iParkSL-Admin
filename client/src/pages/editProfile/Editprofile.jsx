
// import car from './business-man.jpg';
import "./editprofile.css";
import Topbar from '../../componnet/topbar/Topbar';
import Sidebar from '../../componnet/sidebar/Sidebar';
import {
    Publish,
  } from "@material-ui/icons";

// class Editprofile extends Component {
    
//     constructor(props) {
//         super(props)
            
//             this.state = {
//                 firstname: '',
            
//         }
//     }
//     handleFirstnameChange = (event) => {
//         this.setState({
//             firstname: event.target.value
//         })
//     }
//     render(){
//         return(
//             <div className="fullcontainer">
//             <Topbar/>
//             <div className="containersidebar">
//                 <Sidebar/>
            
//                 <div className="editprofile">
//                 {/* <h1>Hello world</h1> */}
//                 <form>
//                     <div style={{width:'70%',marginLeft:'15%',marginRight:'15%',paddingBottom:30}}>
//                         <h2 style={{textAlign:'center'}}>Edit Profile</h2>
//                         <div style={{textAlign:'center'}}>
//                             <img  style={{width:'120px',height:'120px',borderRadius:100}} src={car} alt="this is car image" />
//                         </div>
//                         <div style={{width:'60%',display:'table',marginLeft:'20%',marginRight:'20%'}}>
//                             <div style={{display:'table-cell'}}>
//                                 <p>First Name</p>
//                                 <input style={{width:'95%',backgroundColor:'#CBD5E0',height:30,border:'none',borderRadius:10}} type="text" value={this.state.firstname} onChange={this.handleFirstnameChange}></input>
//                             </div>
//                             <div style={{display:'table-cell'}}>
//                                 <p>Last Name</p>
//                                 <input style={{width:'95%',backgroundColor:'#CBD5E0',height:30,border:'none',borderRadius:10}} type="text" value={this.state.firstname} onChange={this.handleFirstnameChange}></input>
//                             </div>
//                         </div>
//                         <div style={{width:'60%',marginLeft:'20%',marginRight:'20%'}}>
//                             <p>Email</p>
//                             <input style={{width:'97.5%',backgroundColor:'#CBD5E0',height:30,border:'none',borderRadius:10}} type="text" value={this.state.firstname} onChange={this.handleFirstnameChange}></input>
//                         </div>
//                         <div style={{width:'60%',marginLeft:'20%',marginRight:'20%'}}>
//                             <p>Contact Number</p>
//                             <input style={{width:'97.5%',backgroundColor:'#CBD5E0',height:30,border:'none',borderRadius:10}} type="text" value={this.state.firstname} onChange={this.handleFirstnameChange}></input>
//                         </div>
//                         <div style={{width:'60%',marginLeft:'20%',marginRight:'20%'}}>
//                             <p>Address</p>
//                             <input style={{width:'97.5%',backgroundColor:'#CBD5E0',height:30,border:'none',borderRadius:10}} type="text" value={this.state.firstname} onChange={this.handleFirstnameChange}></input>
//                         </div>
//                         <div style={{width:'60%',display:'table',marginLeft:'20%',marginRight:'20%'}}>
//                             <div style={{display:'table-cell'}}>
//                                 <p>City</p>
//                                 <input style={{width:'95%',backgroundColor:'#CBD5E0',height:30,border:'none',borderRadius:10}} type="text" value={this.state.firstname} onChange={this.handleFirstnameChange}></input>
//                             </div>
//                             <div style={{display:'table-cell'}}>
//                                 <p>Province</p>
//                                 <input style={{width:'95%',backgroundColor:'#CBD5E0',height:30,border:'none',borderRadius:10}} type="text" value={this.state.firstname} onChange={this.handleFirstnameChange}></input>
//                             </div>
//                         </div>
//                         <div style={{marginTop:20,width:'59%',display:'table',marginLeft:'20%',marginRight:'20%'}}>
//                             <button style={{backgroundColor:'#ffb907',border:'none',padding:10,width:'100%',borderRadius:5}} type='submit'>Submit</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//             </div>
//             </div>
            
//         )
//     }
// }
// export default Editprofile;

import React from 'react'

export default function Editprofile() {
    return (
        <div className="fullcontainer">
            <Topbar/>
            <div className="containersidebar">
                <Sidebar/>
                <div className="editprofile">
                    <div className="editTitle"><h3>Edit Profile</h3></div>
                    <div className="editImg">
                        <img className="updateImg" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <label htmlFor="file">
                            <Publish className="userUpdateIcon" />
                        </label>
                        <input type="file" id="file" style={{ display: "none" }} />
                    </div>
                    <div className="editContainer">
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First Name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="username" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="email" className="form-control" placeholder="email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="password" className="form-control" placeholder="password" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-warning">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
