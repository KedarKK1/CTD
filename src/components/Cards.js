import React, { Fragment } from 'react';
// import { Card, Button, ProgressBar, Row, Col } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
// import { Line, Circle } from 'rc-progress';
import "./Cards.css"

const Cards = (props) => {
    return (
        <>
            <div className="container text-white px-3 d-flex flex-wrap justify-content-center align-items-center">
                <figure>
                    <figcaption>
                        <h2>{props.index}. {props.questions.title}</h2>
                        <hr />
                        <Row className="mb-2">
                            <Col lg={3} md={3} xl={3} sm={12} sx={12} className="d-flex flex-wrap flex-row align-items-center px-3">
                                <h6 className="d-inline pe-2 qnHubTitle">Progress: </h6>
                                {/* <svg width="100" height="100" stroke="green" stroke-width="6" fill="#3c526c">  
                                <circle className="bg" cx="50" cy="50" r="30" />
                            </svg> */}
                                {/* <Circle className="questionHubCircle" percent={60} strokeWidth={7} strokeColor="green" />  */}
                            </Col>
                            <Col lg={3} md={5} xl={9} sm={12} sx={12} className="d-flex flex-wrap flex-row align-items-center px-3">
                                {/* <ProgressBar style={{backgroundColor:"grey"}} className="w-100" animated now={now} label={`${now}%`} /> */}
                                {/* <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                        <span className="sr-only">70% Complete</span>
                                    </div>
                                </div> */}
                                <span><progress id="file" value={props.questions.accuracy} max="100" className="myProgressBar"> {props.questions.accuracy} </progress></span>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <h6 className="d-inline pe-2 mb-0">Attempts : <b>{props.questions.total_submissions}</b></h6>
                        </Row>
                        <button className="myButtonQnHub"><a href={`question_hub/${props.index}`} >Attempt</a></button>
                    </figcaption>
                </figure>
                {/* <figure>
                <figcaption>
                <h2>Демо</h2>
                <p>Описание</p>
                </figcaption>
            </figure>
            <figure>
                <figcaption>
                <h2>Демо</h2>
                <p>Описание</p>
                </figcaption>
            </figure> */}
            </div>

        </>
    )
}

export default Cards