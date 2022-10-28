// import React from 'React';
import { Card, Col, Pagination, Row } from 'react-bootstrap';
import './ldiv.css';
// import AceEditor from "react-ace";
import { useCookies } from "react-cookie";
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
var axios = require('axios');

function Ldiv( props ) {
    //    let [qdisp,updateq]=useState("hello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehe");
    // let [qdisp] = useState("hello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehe");
    const [state, setState] = useState(props.qnIdParam);
    const [cookies, setCookies] = useCookies(["token"]);
    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            console.log('params', props.qnIdParam)
            // console.log("location", location);
            // const myArray = location2.pathname.split("/question_hub/");
            // let qnId = myArray[1];
            // console.log("qnId ", qnId);
            console.log("cookies", `http://localhost:8000/RC/question/${props.qnIdParam}`)
            var config = {
                method: 'get',
                url: `http://localhost:8000/RC/question/${props.qnIdParam}`,
                headers: {
                    'Authorization': `Token ${cookies.token}`
                }
            };

            const questionsList = await axios(config)
            //   .catch(function (error) {
            //       console.log(error);
            //     });
            console.log('questionsList', questionsList.data)
            //   .then(function (response) {
            //     console.log(JSON.stringify(response.data));
            //   })
            setQuestion(questionsList.data);
            setLoading(false);
        }
        loadData();
    }, [])

    if (loading) {
        return (
            <>Loadingg....</>
        )
    }

    return (
        <Card className='ldiv bg-t'>
            {/* <Card className='ques bg-t b-1 c-w'>
            <div className='qno'><h5>1</h5></div>
            <div className='qno'><h5>2</h5></div>
            <div className='qno '><h5>3</h5></div>
            <div className='qno'><h5>4</h5></div>
            <div className='qno'><h5>5</h5></div>
            <div className='qno'><h5>6</h5></div>
        </Card> */}
            <div className="row mb-3">
                <Col className="mt-1 h-100">
                    <Pagination >
                        {[...Array(6).keys()].map((x) => (
                            <Pagination.Item  key={x + 1} active={props.qnIdParam == x+1} onClick={() => { navigate(`/question_hub/${x+1}`); window.location.reload(); }} >{x + 1}</Pagination.Item>
                        ))}
                    </Pagination>
                </Col>
            </div>
            <div className="row my-2 QuestionBox">

                {/* <Card className='qdisp bg-t b-2'>
                <textarea name="" className='qdispt bg-t c-w 'id="qdispt" readOnly>{qdisp}</textarea>
            </Card> */}
                <Card className="myQuestionCard">
                    <Card.Body  >
                        <Card.Title className="questionTitle" style={{ textAlign: "center" }}><h3>{question.id}. {question.title}</h3></Card.Title>
                        <hr />
                        {/* <Form.Group className="body">
                <Form.Control value="Chairs Requirement">
                Chef's coding class is very famous in Chefland.

                This year X students joined his class and each student will require one chair to sit on. Chef already has Y chairs in his class. Determine the minimum number of new chairs Chef must buy so that every student is able to get one chair to sit on.
                Input Format
                The first line contains a single integer T — the number of test cases. Then the test cases follow.
                The first and only line of each test case contains two integers X and Y — the number of students in the class and the number of chairs Chef already has.

                Output Format
                For each test case, output the minimum number of extra chairs Chef must buy so that every student gets one chair.
                </Form.Control>
            </Form.Group> */}
                        <Card.Text>
                            {/* Chef's coding class is very famous in Chefland.

                            This year X students joined his class and each student will require one chair to sit on. Chef already has Y chairs in his class. Determine the minimum number of new chairs Chef must buy so that every student is able to get one chair to sit on. */}
                            Description - {question.description}
                            <br />
                            <b><h4><u>Input Format</u> - </h4></b>
                            {/* The first line contains a single integer T — the number of test cases. Then the test cases follow.
                            The first and only line of each test case contains two integers X and Y — the number of students in the class and the number of chairs Chef already has. */}
                            {/* <ul>{question.input_format.map((item) => {
                                return (
                                    <li>{item}</li>
                                )
                            })}</ul> */}
                            {question.input_format}
                            {/* <ul>{question.input_format?.map((item, i)=>{return (
                                <li key={i}>{item}</li>
                            )})}
                            </ul> */}
                            <br />
                            <b><h4><u>Output Format</u> - </h4></b>
                            {/* For each test case, output the minimum number of extra chairs Chef must buy so that every student gets one chair. */}
                            <ul>{question.output_format}</ul>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
            {/* <div className="row ipop bg-t">  */}
            <Card className='row ipop bg-t'>
                <Card className="col-md-6 inp bg-t b-2">
                    <div className='bg-b'><h5>Custom Input</h5></div>
                    <textarea name="" id="" className='inpt bg-t c-w br-2'>{question.sample_input}</textarea>
                </Card>
                <Card className='col-md-6 out bg-t b-2 '>
                    <div className='bg-b c-w'><h5>Custom Output</h5></div>
                    <textarea name="" id="" className='outt bg-t c-w br-2' readOnly>{question.sample_output}</textarea>
                </Card>
            </Card>
            {/* </div> */}
        </Card>
    )
}

export default Ldiv;