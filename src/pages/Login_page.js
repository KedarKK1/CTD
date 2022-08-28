import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import "./Login.css"

const Login_page = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [alertMessage, setAlertMessage] = React.useState({
        message: "",
        icon: "d-none ",
        wholeAlert: "alert d-none alert-success"
    })
    const [formValue, setFormValue] = React.useState({
        username: "",
        password: ""
    })
    const onChange1 = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
        setAlertMessage({
            message: "",
            icon: "d-none ",
            wholeAlert: "alert d-none alert-success"
        })
        // console.log("name",e.target.name,"e.target.value",e.target.value)
    }

    const validate = () => {
        setLoading(true);
        if (formValue.username === "") {
            setAlertMessage({
                ...alertMessage,
                message: "Username can't be empty!",
                icon: "fa fa-exclamation-triangle",
                wholeAlert: "alert d-block alert-danger"
            })
        } else if (formValue.password === "") {
            setAlertMessage({
                ...alertMessage,
                message: "Password can't be empty!",
                icon: "fa fa-exclamation-triangle",
                wholeAlert: "alert d-block alert-danger"
            })
        } else {
            navigate("/instruction")
        }
        setLoading(false);
    }

    if (loading) {
        return (
            <Container>
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </Container>
        )
    }


    return (
        <Container>
            <div>
                {/* <div className="d-flex justify-content-around align-items-center"> */}
                <Row className="d-flex justify-content-around align-items-center">
                    <Col xxl={6} xl={6} lg={6} md={6} sm={0} xs={0} >
                        <div className="RCTEXT">Reverse Coding 2.0</div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className="myLoginColumn" >

                        <Card className="overflow-hidden myLoginCard">
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <div className={alertMessage.wholeAlert} role="alert">
                                    <i className={alertMessage.icon} aria-hidden="true" />
                                    <span> {alertMessage.message}</span>
                                </div>
                                <Card.Text>
                                    <div className="logintitle text-white">LOGIN</div>
                                    {/* <InputGroup className="mb-3"> */}
                                    {/* <InputGroup.Text id="inputGroup-sizing-default">
                                                Username
                                            </InputGroup.Text> */}
                                    {/* <Form.Control
                                                className="myInput"
                                                aria-label="Default"
                                                placeholder="Username"
                                                aria-describedby="inputGroup-sizing-default"
                                            />
                                        </InputGroup> */}
                                    {/* <div className="formInput"> */}
                                    {/* </div> */}
                                    <span><label className="form-check-label text-white pe-2" htmlFor="username">
                                        <i className="fa fa-user" aria-hidden="true" />
                                    </label></span>
                                    <input name="username" value={formValue.username} type="text" className="myInput" placeholder="Username" id="username" onChange={onChange1} />

                                    {/* <InputGroup className="mt-3"> */}
                                    {/* <InputGroup.Text id="inputGroup-sizing-default">
                                                Password
                                            </InputGroup.Text> */}
                                    {/* <Form.Control
                                                className="myInput"
                                                aria-label="Default"
                                                placeholder="Password"
                                                aria-describedby="inputGroup-sizing-default"
                                            />
                                        </InputGroup> */}
                                    <br />
                                    <label className="form-check-label text-white pe-2" htmlFor="password">
                                        <i className="fa-solid fa-key" />
                                    </label>
                                    <span><input name="password" value={formValue.password} type="password" id="password" className="myInput" placeholder="Password" onChange={onChange1} /></span>
                                    <button onClick={validate} className="myButton text-white">Login</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* </div> */}
            </div>
        </Container>
    )
}

export default Login_page