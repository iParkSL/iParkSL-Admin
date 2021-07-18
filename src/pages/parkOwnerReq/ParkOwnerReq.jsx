import React from 'react'
import "./parkownerreq.css";
import { Carousel, Form, Col, Row, Button } from 'react-bootstrap';

import park1 from './Car-park.jpg';
import park2 from './multi-storey-car-park.jpg';
import park3 from './park4.jpeg';
import {Link} from "react-router-dom";

export default function ParkOwnerReq() {
    return (
        <div className="parkOwnerReq">
            <div className="parkcarosel">
                <Carousel fade>
                    
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carouselimg"
                                src={park1}
                                alt="First slide"
                            />
                            {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
                        </Carousel.Item>
                    
                    
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carouselimg"
                            src={park2}
                            alt="Second slide"
                        />

                        {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carouselimg"
                            src={park3}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="formhadle">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="" Value="Nimal Perera" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Park Name</Form.Label>
                            <Form.Control type="text" placeholder="" value="ABC Park" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control type="text" placeholder="" value="No 5 Borella " />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control type="text" placeholder="" value="Colombo 8"/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Facilities</Form.Label>
                            <div className="mb-3">
                                <Form.Check
                                    inline
                                    label="CCTV"
                                    type="checkbox"
                                    checked
                                />
                                <Form.Check
                                    inline
                                    label="WiFi"
                                    type="checkbox"
                                    checked
                                />
                                <Form.Check
                                    inline
                                    label="Water"
                                    type= "checkbox"
                                    checked
                                />
                            </div>
                        </Form.Group>

                    </Row>
                    <div className="buttons">
                    <Link to="/addtomap"> <Button variant="success" type="submit" className="buttonsrearrange">
                            Accept
                        </Button></Link>
                        <Button variant="danger" type="submit" className="buttonsrearrange">
                            Reject
                        </Button>
                    </div>
                    
                </Form>
            </div>
        </div>
    )
}
