import React, { useEffect, useState } from 'react';
import './TestCases.css'
// import rightSymbol from './Images/rightSymbol.jpg'
import wrongeSymbol2 from './Images/wrongeSymbol2.jfif'
import rightSymbol2 from './Images/rightSymbol2.png'
import { Card, Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useLocation, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const TestCases = () => {
    const [cookies, setCookies] = useCookies(["token"]);
    const [loading, setLoading] = useState(true);
    const {state} = useLocation();
 ;   const [questions, setQuestions] = useState({
        "cases": [],
        "error": ""
    });

    useEffect(() => {
        setLoading(true);
        setQuestions(state);

        console.log("porps result in useEff: ", state);
        setLoading(false);
    }, [])

    console.log("porps state: ", JSON.stringify(state));
    
    // const params = useParams();
    // console.log("params result: ", params);

    if (loading) {
        return (
            <>Loadingg....</>
        )
    }


    return (
        <Container fluid>
            <Row className="heightManage">
                {/* <Row  bg="light" variant="light"> */}
                <Col xxl={4} lg={4} md={4} sm={12} xs={12}>
                    <Row className="h-100">
                        {/* <Card border="light" style={{ width: '18rem' }}> */}
                        <Card border="light" bg="dark" className="my-auto mx-auto text-white" style={{ width: '18rem' }}>
                            <Card.Header style={{ borderBottom: '1px solid white' }} ><h2>Console</h2></Card.Header>
                            <Card.Body>
                                {/* <Card.Title>Light Card Title</Card.Title> */}
                                <Card.Text>
                                    {/* Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                                    {(questions.error != "") ? questions.error : "Compiled Successfully"}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
                <Col xxl={8} lg={8} md={8} sm={12} xs={12} >
                    <Row className="h-100">
                        <h2 className="my-auto mx-auto text-light">Test cases</h2>
                        {/* <Card border="light" style={{ width: '18rem' }}> */}
                        <Row className="px-3">
                            

                            {questions.cases && questions.cases.map((res, idx) => {
                                return (
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12} className="">
                                        <Card border="light" bg="dark" style={{ width: '15rem' }} className=" px-2 text-white ">
                                            <Card.Header style={{ borderBottom: '1px solid white' }} ><h5>Test case {idx+1}</h5></Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <span> <Image src={(res == "Passed") ? rightSymbol2 : wrongeSymbol2} style={{ maxWidth: '30px' }} rounded="true" bg="none" /> {(res == "Passed") ? "Passed" : res } </span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                            {(!questions.cases) ? <div className='text-white'>No Test Cases Received</div> : <></>}
                        </Row>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default TestCases