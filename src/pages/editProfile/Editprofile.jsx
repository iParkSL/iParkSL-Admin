import React, { Component } from 'react'
import car from './business-man.jpg';
import "./editprofile.css";

class Editprofile extends Component {
    
    constructor(props) {
        super(props)
            
            this.state = {
                firstname: '',
            
        }
    }
    handleFirstnameChange = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }
    render(){
        return(
            <div className="editprofile">
                {/* <h1>Hello world</h1> */}
                <form>
                    <div style={{width:'70%',marginLeft:'15%',marginRight:'15%',paddingBottom:30}}>
                        <h2 style={{textAlign:'center'}}>Edit Profile</h2>
                        <div style={{textAlign:'center'}}>
                            <img  style={{width:'120px',height:'120px',borderRadius:100}} src={car} alt="this is car image" />
                        </div>
                        <div style={{width:'60%',display:'table',marginLeft:'20%',marginRight:'20%'}}>
                            <div style={{display:'table-cell'}}>
                                <p>First Name</p>
                                <input style={{width:'95%',backgroundColor:'#CBD5E0',height:30,border:'none',borderRadius:10}} type="text" value={this.state.firstname} onChange={this.handleFirstnameChange}></input>
                            </div>
                            <div style={{display:'table-cell'}}>
                                <p>Last Name</p>
                                <input style={{width:'95%',backgroundColor:'#CBD5E0',height:30,border:'none',borderRadius:10}} type="text" value={this.state.firstname} onChange={this.handleFirstnameChange}></input>
                            </div>
                        </div>
                        <div style={{width:'60%',marginLeft:'20%',marginRight:'20%'}}>
                            <p>Email</p>
                            <input style={{width:'97.5%',backgroundColor:'#CBD5E0',height:30,border:'none',borderRadius:10}} type="text" value={this.state.firstname} onChange={this.handleFirstnameChange}></input>
                        </div>
                        <div style={{width:'60%',marginLeft:'20%',marginRight:'20%'}}>
                            <p>Contact Number</p>
                            <input style={{width:'97.5%',backgroundColor:'#CBD5E0',height:30,border:'none',borderRadius:10}} type="text" value={this.state.firstname} onChange={this.handleFirstnameChange}></input>
                        </div>
                        <div style={{width:'60%',marginLeft:'20%',marginRight:'20%'}}>
                            <p>Address</p>
                            <input style={{width:'97.5%',backgroundColor:'#CBD5E0',height:30,border:'none',borderRadius:10}} type="text" value={this.state.firstname} onChange={this.handleFirstnameChange}></input>
                        </div>
                        <div style={{width:'60%',display:'table',marginLeft:'20%',marginRight:'20%'}}>
                            <div style={{display:'table-cell'}}>
                                <p>City</p>
                                <input style={{width:'95%',backgroundColor:'#CBD5E0',height:30,border:'none',borderRadius:10}} type="text" value={this.state.firstname} onChange={this.handleFirstnameChange}></input>
                            </div>
                            <div style={{display:'table-cell'}}>
                                <p>Province</p>
                                <input style={{width:'95%',backgroundColor:'#CBD5E0',height:30,border:'none',borderRadius:10}} type="text" value={this.state.firstname} onChange={this.handleFirstnameChange}></input>
                            </div>
                        </div>
                        <div style={{marginTop:20,width:'59%',display:'table',marginLeft:'20%',marginRight:'20%'}}>
                            <button style={{backgroundColor:'#ffb907',border:'none',padding:10,width:'100%',borderRadius:5}} type='submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Editprofile;