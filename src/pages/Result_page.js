import React, { Fragment } from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap';
import "./Result_page.css"

const Result_page = () => {
    return (
        <Fragment>
            <Row className="heightManage d-flex justify-content-center align-content-center">
                <Col xxl={4} lg={4} md={4} sm={12} xs={12}>
                    <Row className="h-100">
                        {/* <Card border="light" style={{ width: '18rem' }}> */}
                        <Card border="success" bg="light" className="my-auto mx-auto" style={{ width: '18rem' }}>
                            {/* <Card.Header ><h2><u>Username</u></h2><h4>Ankit Badode</h4></Card.Header> */}
                            <Card.Body>
                                {/* <Card.Title>Light Card Title</Card.Title> */}
                                <h1><u>Username</u></h1><h4>ABC XYZ</h4>
                                <br />
                                <Card.Text className="my-3">
                                    <Row>
                                        <Col> <h4><u>Rank</u></h4> <h5>14</h5>
                                        </Col>
                                        <Col><h4><u>Score</u></h4> <h5>21</h5>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
                <Col xxl={8} lg={8} md={8} sm={12} xs={12} >
                    {/* <Row className="h-50"> */}
                    <h2 className="my-auto mx-auto text-light">Winners</h2>
                    {/* <Card border="light" style={{ width: '18rem' }}> */}
                    <Row className="my-3 mx-3 px-3">
                        <div className="d-flex justify-content-center align-content-center">
                            <Card border="success" bg="light" style={{ width: '13rem' }} className="px-2">
                                <Card.Header ><h5>Rank 1</h5></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <span> ABC </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                    <Row className="my-3 mx-3 px-2">
                        <div className="d-flex justify-content-center align-content-around">
                            <Card border="success" bg="light" style={{ width: '13rem' }} className="mx-2 px-2">
                                <Card.Header ><h5>Rank 2</h5></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <span> ABC </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border="success" bg="light" style={{ width: '13rem' }} className="mx-2 px-2">
                                <Card.Header ><h5>Rank 3</h5></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <span> ABC </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                    </Row>
                    {/* </Row> */}
                </Col>
            </Row>
        </Fragment>
    )
}

export default Result_page