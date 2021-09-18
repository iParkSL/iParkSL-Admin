import React, { useState, useContext } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./login.css";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../helpers/AuthContext';
import { toast } from 'react-toastify';

toast.configure();

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setAuthState} = useContext(AuthContext);   

    let history = useHistory();

    const login = (e) => {
        e.preventDefault();
        const data = { username: username, password: password };
        // console.log(data);
        axios.post("http://localhost:3001/auth/login", data)
            .then((response) => {
                if(response.data.error){
                    // alert(response.data.error);
                    toast.warn(response.data.error, { autoClose: 3000 });
                }else {
                    localStorage.setItem("accessToken", response.data);
                    // setAuthState(true);
                    history.push("/home");
                    toast.success("Login Success", {
                      autoClose: 3000,
                    });
                }
            });
    };

    return (
        <>
            <Container className="login">
                <h1 className="shadow-sm mt-5 p-3 text-center rounded header">Admin Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" onChange={(e) => {
                                    setUsername(e.target.value);
                                }} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
                            </Form.Group>

                            <Button className="btn-login" variant="warning btn-block" type="submit" onClick={login}>
                                Login
                            </Button>

                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2021 iParkSL. All Rights Reserved.</h6>
            </Container>
        </>
    );
};

export default Login;