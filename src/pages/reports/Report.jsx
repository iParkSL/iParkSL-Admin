import React from 'react'
import "./report.css";
import {Button, Col, Container, Form, Row,Table,Dropdown,Nav,NavDropdown} from "react-bootstrap";
function Report() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h2 className="userTitle">Reports</h2>
            </div>
            <div>
        
                <Nav className="justify-content" activeKey="/home">
                
                    <Dropdown className="dropdwon">
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            Select Report
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Report 01</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Report 02</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Report 03</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Report 04</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Report 05</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Report 06</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
          
                    <div className="labelContainer">
                        <label className="label">
                        From                            
                        </label>
                        <input type="Date" name="name" className="input" />
                    
                        <label className="label">
                            To                           
                        </label>
                        <input type="Date" name="name" className="input" />
                    </div>
                    
                
               
                </Nav>

        </div>    
           
            <div className='table'>
            <Table bordered hover>
                <thead>
                    <tr>                    
                    <th>Name</th>
                    <th>Address</th>
                    <th>No of used parks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>10</td>                    
                    </tr>

                    <tr>
                    <td>2</td>
                    <td>19/B,Molligoda,Wadduwa</td>
                    <td>20</td>                                          
                    </tr>
                    
                    <tr>
                    <td>3</td>
                    <td>Kalutara</td>
                    <td>30</td>
                    </tr>

                    <tr>
                    <td>4</td>
                    <td>Panadura</td>
                    <td>30</td>
                    </tr>

                    <tr>
                    <td>5</td>
                    <td>Moratuwa</td>
                    <td>30</td>
                    </tr>

                    <tr>
                    <td>6</td>
                    <td>Waskaduwa</td>
                    <td>30</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </div>
    )
}

export default Report
