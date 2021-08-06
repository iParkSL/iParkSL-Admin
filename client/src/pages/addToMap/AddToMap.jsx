import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import "./addtomap.css";
import { Carousel, Form, Col, Row, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import Topbar from '../../componnet/topbar/Topbar';
import Sidebar from '../../componnet/sidebar/Sidebar';

function Map(){
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat:6.927079, lng: 79.861244}}
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function AddToMap() {

    return (
        <div className="fullcontainer">
            <Topbar/>
            <div className="containersidebar">
                <Sidebar/>
            
                <div className="addtomap">
            <h3 style={{ textAlign: 'center', marginTop: 10}}> Add Place to Map</h3>
            <div className="map" style={{ marginLeft: 320}}>
                <WrappedMap
                googleMapURL ={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCy9FSNPUvbExrqtBGFDsmIyMS71FwB5qw`}
                loadingElement= { <div style={{ height: `100%` }}/>}
                containerElement= { <div style={{ height: `300px`, width: `600px`}} />}
                mapElement= { <div style={{ height: `100%` }} />}
                />
            </div>
            
            <div className="formhadle">
                <Form>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control type="text" placeholder="Address Line 1" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control type="text" placeholder="Addres Line 2" />
                        </Form.Group>
                    </Row>
                    
                    <div className="buttons">
                        <Button variant="success" type="submit" className="buttonsrearrange">
                            Add To Map
                        </Button>
                       <Link to="/parkownerrequest/:userID"><Button variant="secondary" type="submit" className="buttonsrearrange">
                            Back
                        </Button></Link> 
                        
                    </div>
                    
                </Form>
            </div>
        </div>
            </div>
            </div>
        

    )
}
