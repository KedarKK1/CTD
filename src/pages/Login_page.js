import React, { Fragment } from 'react'
import { Button, Card, Form, InputGroup, Row } from 'react-bootstrap';
import "./Login.css"

const Login_page = () => {
    return (
        <Fragment>
            <div>
                <Row className="d-flex justify-content-center align-items-center myCardHeight ">
                    <Card style={{ width: '20rem' }} className="overflow-hidden">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title className="my-3 mb-3">Reverse Coding 2.0</Card.Title>
                            <Card.Text>
                                <InputGroup className="mb-3">
                                    {/* <InputGroup.Text id="inputGroup-sizing-default">
                                        Username
                                    </InputGroup.Text> */}
                                    <Form.Control
                                        className="myInput"
                                        aria-label="Default"
                                        placeholder="Username"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    {/* <InputGroup.Text id="inputGroup-sizing-default">
                                        Password
                                    </InputGroup.Text> */}
                                    <Form.Control
                                        className="myInput"
                                        aria-label="Default"
                                        placeholder="Password"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                                <Button variant="primary">Login</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Row>
            </div>
        </Fragment>
    )
}

export default Login_page