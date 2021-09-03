import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import "./viewmap.css";
// import { Carousel, Form, Col, Row, Button } from "react-bootstrap";
import Topbar from "../../componnet/topbar/Topbar";
import Sidebar from "../../componnet/sidebar/Sidebar";

function Map() {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 6.927079, lng: 79.861244 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Viewmap() {
  return (
    <div className="fullcontainer">
      <Topbar />
      <div className="containersidebar">
        <Sidebar />

        <div className="viewmap">
          <div className="viewmapheader">
            <h3 className="mapheadertitle">Current Parking Locations</h3>
          </div>
          <div className="map">
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAPyDwmp-2qLw1C687x0OL5145GkPoojfo`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div style={{ height: `500px`, width: `800px` }} />
              }
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>

          {/* <div className="formhadle">
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
                        
                    </div>
                    
                </Form>
            </div> */}
        </div>
      </div>
    </div>
  );
}
