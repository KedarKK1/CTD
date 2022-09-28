import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cards from '../components/Cards'
import './QuestionHubPage.css';
import { useCookies } from "react-cookie";
var axios = require('axios');

const QuestionHubPage = () => {
    const [cookies] = useCookies(["token"]);
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);

    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Token b50fc4b4d49e0d4989e1c3341f915b66d10bf48f");

    // var requestOptions = {
    // method: 'GET',
    // headers: myHeaders,
    // redirect: 'follow'
    // };

    // fetch("http://localhost:8000/RC/question", requestOptions)
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));

    // const questions = [
    //     {title: "Katya's Maze", Progress: 78, Attempts: 2},
    //     {title: "Chef's Palindrome", Progress: 25, Attempts: 1},
    //     {title: "GCD's LCM", Progress: 97, Attempts: 3},
    //     {title: "Circular Linked Hash", Progress: 35, Attempts: 1},
    //     {title: "Barinsormer", Progress: 67, Attempts: 5},
    //     {title: "Natash's Shortest Path", Progress: 45, Attempts: 2},
    // ] 

    useEffect(() => {
        const loadData = async () =>{
            setLoading(true);
            console.log("cookies", cookies.token)
            var config = {
                method: 'get',
                url: 'http://localhost:8000/RC/question',
                headers: { 
                  'Authorization': `Token ${cookies.token}`
                }
              };
              
            const questionsList = await axios(config)
            //   .catch(function (error) {
            //       console.log(error);
            //     });
            console.log('questionsList',questionsList.data)
                //   .then(function (response) {
                //     console.log(JSON.stringify(response.data));
                //   })
            setQuestions(questionsList.data);
            setLoading(false);
        }
        loadData();
        }, [cookies.token])    

    if(loading){
        return(
            <>Loadingg....</>
        )
    }

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