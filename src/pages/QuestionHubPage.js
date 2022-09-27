import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cards from '../components/Cards'
import './QuestionHubPage.css';

const QuestionHubPage = () => {

    const questions = [
        {name: "Katya's Maze", Progress: 78, Attempts: 2},
        {name: "Chef's Palindrome", Progress: 25, Attempts: 1},
        {name: "GCD's LCM", Progress: 97, Attempts: 3},
        {name: "Circular Linked Hash", Progress: 35, Attempts: 1},
        {name: "Barinsormer", Progress: 67, Attempts: 5},
        {name: "Natash's Shortest Path", Progress: 45, Attempts: 2},
    ] 

    const questions2 = async () => {
        var requestOptions = {
            method: 'GET',
            headers: {},
            redirect: 'follow'
        };
        await fetch("http://localhost:8000/NCC/question", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        console.log('myQuestions',questions2)
    }
    questions2();
    return (
        <Container className="questionHubContainer d-flex justify-content-center align-items-center px-2 py-2">
            
                <Row className="my-2 qnBorderQnHub">
                    {questions.map((question,i)=>{
                        return(
                        // (
                            <Col key={i} sx={12} sm={6} md={4} lg={4} xl={4} xxl={4} className="py-2 px-2 myQnHover">
                                <Cards index={i+1} questions={questions[i]} />
                            </Col>
                        )
                    })}
                    {/* <Col sm={6} sx={12} md={4} lg={4} xl={4} xxl={4} className="py-2 px-2 myQnHover">
                        <Cards />
                    </Col>
                    <Col sm={6} sx={12} md={4} lg={4} xl={4} xxl={4} className="py-2 px-2 myQnHover">
                        <Cards />
                    </Col>
                    <Col sm={6} sx={12} md={4} lg={4} xl={4} xxl={4} className="py-2 px-2 myQnHover">
                        <Cards />
                    </Col>
                    <Col sm={6} sx={12} md={4} lg={4} xl={4} xxl={4} className="py-2 px-2 myQnHover">
                        <Cards />
                    </Col> */}
                </Row>
            
        </Container>
    )
}

export default QuestionHubPage