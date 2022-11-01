import React, { useState } from 'react';
import "./Instructions.css";
// import {Card, Button, Row, Col, Container} from 'react-bootstrap';
import { Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Instructions = () => {
    const navigate = useNavigate();
    const [state, setState] = useState(false);

    const onClick2 = () =>{
        navigate("/question_hub");
    }
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <div className="my-2 qnBorder">
                <h2 className="instructionTitle">
                    Instructions
                </h2>
                <p className="instructionContent">
                    <ul className="myUL">
                        <li className="myLI">
                            <div className="liTitle" style={{ "--accent-color": "#1B5F8C" }}>Instruction 1</div>
                            <div className="titleDescription">
                                Possession the unpleasing simplicity her uncommonly. Off say yet ample ten ought hence.Off say yet ample ten ought hence.
                            </div>
                        </li>

                        <li className="myLI">
                            {/* <div className="liTitle" style={{ "--accent-color": "#FBCA3E" }}>Instruction 2</div> */}
                            <div className="liTitle" style={{ "--accent-color": "#1B5F8C" }}>Instruction 2</div>
                            <div className="titleDescription">
                                Contest will contain 5-6 problems that need to be coded in Python, C++, or C.
                            </div>
                        </li>

                        <li className="myLI">
                            {/* <div className="liTitle" style={{ "--accent-color": "#E24A68" }}>Instruction 3</div> */}
                            <div className="liTitle" style={{ "--accent-color": "#1B5F8C" }}>Instruction 3</div>
                            <div className="titleDescription">
                                Single Participant event.
                            </div>
                        </li>

                        <li className="myLI">
                            {/* <div className="liTitle" style={{ "--accent-color": "#1B5F8C" }}>Instruction 4</div> */}
                            <div className="liTitle" style={{ "--accent-color": "#1B5F8C" }}>Instruction 4</div>
                            <div className="titleDescription">
                                For the first correct submission of a question, you will receive the points currently available on that question.
                            </div>
                        </li>

                        <li className="myLI">
                            {/* <div className="liTitle" style={{ "--accent-color": "#4CADAD" }}>Instruction 5</div> */}
                            <div className="liTitle" style={{ "--accent-color": "#1B5F8C" }}>Instruction 5</div>
                            <div className="titleDescription">
                                For each wrong submission before the correct submission, 10 points will be deducted. If the question was already solved before, no points will be deducted for that question.
                            </div>

                        </li>

                        <li className="myLI">
                            {/* <div className="liTitle" style={{ "--accent-color": "#4CADAD" }}>Instruction 5</div> */}
                            <div className="liTitle" style={{ "--accent-color": "#1B5F8C" }}>Instruction 5</div>
                            <div className="titleDescription">
                                For each wrong submission before the correct submission, 10 points will be deducted. If the question was already solved before, no points will be deducted for that question.
                            </div>

                        </li>

                    </ul>
                </p>
                <div className="instructionButton">
                    <Form className="py-2">
                        {/* {['checkbox'].map((type) => (
                        <div key={type} className="mb-3">
                        <Form.Check type={type} id={`check-api-${type}`}>
                            <Form.Check.Input type={type} isValid />
                            <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
                            <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                        </Form.Check>
                        </div>
                    ))} */}
                        <Form.Check.Input type="checkbox" onChange={e => setState({ value: !state.value })} value={state.value} isValid />
                        <Form.Check.Label className="px-2" style={!state.value ? { "color": "red" } : {}} >{`I have read all the instructions carefully`}</Form.Check.Label>
                    </Form>
                    {/* <Button variant="primary" className="proceed" disabled={!state.value} style={ !state.value ? {"background-color":"red"} : {"background-color":"green"}} >Proceed</Button> */}
                    {/* <button variant={!state.value ? "dark" : "primary"} className="proceed myButton3" disabled={!state.value} >Proceed</button> */}
                    <button className="proceed myButton3" disabled={!state.value} onClick={onClick2} >Proceed</button>
                </div>
            </div>
        </Container>
    )
}

export default Instructions;