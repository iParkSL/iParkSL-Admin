import React, {useEffect, useState} from 'react'
import "./parkownerreq.css";
import { Carousel, Form, Col, Row, Button } from 'react-bootstrap';
import {Image} from "cloudinary-react";

// import park1 from './Car-park.jpg';
// import park2 from './multi-storey-car-park.jpg';
// import park3 from './park4.jpeg';
import {useParams} from "react-router-dom";
import Topbar from '../../componnet/topbar/Topbar';
import Sidebar from '../../componnet/sidebar/Sidebar';
import axios from 'axios';

export default function ParkOwnerReq() {

    let { id } = useParams();
    const [reqDetails, setReqDetails] = useState({});
    const [reqPark, setReqPark] = useState({});
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/owners/byId/${id}`).then((response)=>{
            setReqDetails(response.data);
        });
        axios.get(`http://localhost:3001/req/byId/${id}`).then((response)=>{
            setReqPark(response.data);
        });
    }, []);
    
    const handleAccept = (e) => {
        e.preventDefault();
        const email = `${reqDetails.email}`;
        const message = `${reqDetails.firstname} your parking request is accepted`;
        
        const data = { email: email, message: message }

        // console.log(data);
        
        axios.post("http://localhost:3001/sendconfirm/send", data).then((response) => {
            if (response.data.status === 'success') {
                alert("Accepted");
            } else if (response.data.status === 'fail') {
                alert("Couldn't accept try again later");
            }
        });
    }
    const handleReject = (e) => {
      e.preventDefault();
      const email = `${reqDetails.email}`;
      const message = `${reqDetails.firstname} your parking request is rejected`;

      const data = { email: email, message: message };

      // console.log(data);

      axios
        .post("http://localhost:3001/sendconfirm/sendreject", data)
        .then((response) => {
          if (response.data.status === "success") {
            alert("Accepted");
          } else if (response.data.status === "fail") {
            alert("Couldn't accept try again later");
          }
        });
    };


    return (
      <div className="fullcontainer">
        <Topbar />
        <div className="containersidebar">
          <Sidebar />

          <div className="parkOwnerReq">
            {/* <div className="imageSide"> */}
            <div className="parkcarosel">
              <Carousel fade>
                <Carousel.Item>
                  {/* <img
                                        className="d-block w-100 carouselimg"
                                        src={park1}
                                        alt="First slide"
                                    /> */}
                  <Image
                    className="d-block w-100 carouselimg"
                    cloudName="kalana96"
                    publicId={reqPark.image1}
                  />
                </Carousel.Item>

                <Carousel.Item>
                  {/* <img
                                        className="d-block w-100 carouselimg"
                                        src={park2}
                                        alt="Second slide"
                                    /> */}
                  <Image
                    className="d-block w-100 carouselimg"
                    cloudName="kalana96"
                    publicId={reqPark.image2}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  {/* <img
                                        className="d-block w-100 carouselimg"
                                        src={park3}
                                        alt="Third slide"
                                    /> */}
                  <Image
                    className="d-block w-100 carouselimg"
                    cloudName="kalana96"
                    publicId={reqPark.image3}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            {/* </div> */}
            {/* <div className="detailsSide"> */}
            <div className="formhadle">
              {/* <div className="row">
                                <label htmlFor="">Owner Name:</label>
                                <div>{reqDetails.firstname}</div>
                            </div>
                            <div className="row">
                                <label htmlFor="">Park Name:</label>
                                <div>{reqPark.parkname}</div>
                            </div>
                            <div className="row">
                                <label htmlFor="">Address:</label>
                                <div>{reqPark.address_line1}</div>
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput" class="form-label">Example label</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" value={reqPark.address_line2}/>
</div>
                                <div class="mb-3">
                                    <label for="formGroupExampleInput2" class="form-label">Another label</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
</div> */}
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      value={reqDetails.firstname}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Park Name</Form.Label>{" "}
                    <div>{reqDetails.parkname}</div>
                    <Form.Control
                      type="text"
                      placeholder=""
                      value={reqPark.parkname}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Address Line 1</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      value={reqPark.address_line1}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Address Line 2</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      value={reqPark.address_line2}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Facilities</Form.Label>
                    <div className="mb-3">
                      <Form.Check inline label="CCTV" type="checkbox" checked />
                      <Form.Check inline label="WiFi" type="checkbox" checked />
                      <Form.Check
                        inline
                        label="Water"
                        type="checkbox"
                        checked
                      />
                      <Form.Check
                        inline
                        label="Toilets"
                        type="checkbox"
                        checked
                      />
                    </div>
                  </Form.Group>
                </Row>
                <div className="buttons">
                  <Button
                    variant="success"
                    type="submit"
                    className="buttonsrearrange"
                    onClick={handleAccept}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="danger"
                    type="submit"
                    className="buttonsrearrange-red"
                    onClick={handleReject}
                  >
                    Reject
                  </Button>
                </div>
              </Form>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
}
