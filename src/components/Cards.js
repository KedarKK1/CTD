import React, { Fragment } from 'react';
import { Card, Button, ProgressBar, Row, Col } from 'react-bootstrap';
import "./Cards.css"

const Cards = () => {
    const now = 60;
    return (
        <Fragment>
            <Card className="text-center giveMinHeight">
                {/* <Card.Header><h4>1. GCD's Palindrome</h4></Card.Header> */}
                <Card.Body>
                    <h4>1. GCD's Palindrome</h4>
                    <hr />
                    {/* <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    <Row>
                        <Col md={12} xl={12} sm={12} sx={12} className="d-flex flex-row align-items-center">
                            <p className="d-inline pe-2 mb-0">Progress: </p>
                            <ProgressBar className="w-100" animated now={now} label={`${now}%`} />
                        </Col>
                    </Row>
                    <p className="d-inline pe-2 mb-0">Attempts: 6</p>
                    <br />
                    <Button variant="primary" className="my-2">Attempts</Button>
                </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>

        </Fragment>
    )
}

export default Cards