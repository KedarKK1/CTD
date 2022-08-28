import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import "./Result_page.css"
const gold = require("../images/gold 3.png")
const silver = require("../images/silver 3.png")
const bronze = require("../images/bronze 3.png")

const Result_page = () => {
    return (
        <Container>
            <Row className="heightManage d-flex justify-content-center align-content-center text-white">
                <Col xxl={4} lg={4} md={4} sm={12} xs={12}>
                    <Row className="h-100">
                        {/* <Card border="light" style={{ width: '18rem' }}> */}
                        <Card border="success" className="my-auto mx-auto myResultCard" >
                            {/* <Card.Header ><h2><u>Username</u></h2><h4>Ankit Badode</h4></Card.Header> */}
                            <Card.Body className="d-flex flex-wrap justify-content-center justify-items-center">
                                {/* <Card.Title>Light Card Title</Card.Title> */}
                                <Row>
                                    <h1 className="mt-3"><u>Username</u></h1><h3>ABC XYZ</h3>
                                </Row>
                                <Row className="my-3 d-flex justify-content-center align-items-center w-100">
                                    <Card.Text className="my-3 d-flex justify-content-center align-items-center">
                                        {/* <Row> */}
                                        <Col xxl={6} lg={6} md={6} sm={12} xs={12}>
                                            <h4><u>Rank</u></h4> <h5>14</h5>
                                        </Col>
                                        <Col xxl={6} lg={6} md={6} sm={12} xs={12}>
                                            <h4><u>Score</u></h4> <h5>21</h5>
                                        </Col>
                                        {/* </Row> */}
                                    </Card.Text>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
                <Col xxl={8} lg={8} md={8} sm={12} xs={12} >
                    {/* <Row className="h-50"> */}
                    <h2 className="my-auto mx-auto text-light">Leaderboard</h2>
                    {/* <Card border="light" style={{ width: '18rem' }}> */}
                    <Row className="my-3 mx-3 px-3 d-flex justify-content-center align-items-center">
                        <Col>
                            {/* <Card border="success" bg="light" style={{ width: '13rem' }} className="px-2">
                                <Card.Header ><h5>Rank 1</h5></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <span> ABC </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card> */}
                            <Image className="myResultImage" draggable="false" src={gold} height="160px" width="160px" />
                            {/* <br /> */}
                            <p className="text-white">Rank 1</p>
                        </Col>
                    </Row>
                    <Row className="my-3 mx-3 px-2">
                        <Col xxl={6} lg={6} md={6} sm={12} xs={12} >
                            {/* <Card border="success" bg="light" style={{ width: '13rem' }} className="mx-2 px-2">
                                <Card.Header ><h5>Rank 2</h5></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <span> ABC </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card> */}
                            <Image className="myResultImage" draggable="false" src={silver} height="160px" width="160px" />
                            {/* <br /> */}
                            <p className="text-white">Rank 2</p>

                            {/* <Card border="success" bg="light" style={{ width: '13rem' }} className="mx-2 px-2">
                                <Card.Header ><h5>Rank 3</h5></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <span> ABC </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card> */}
                        </Col>
                        <Col xxl={6} lg={6} md={6} sm={12} xs={12}>
                            <Image className="myResultImage" draggable="false" src={bronze} height="160px" width="160px" />
                            {/* <br /> */}
                            <p className="text-white">Rank 3</p>
                        </Col>
                    </Row>
                    {/* </Row> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Result_page