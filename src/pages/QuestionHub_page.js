import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import Cards from '../components/Cards'
import './QustionHub_page.css';

const QuestionHub_page = () => {
  return (
    <Fragment>
        <div className="border qnBorder px-3 py-3">
            <Row>
                <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4} className="py-2">
                    <Cards />
                </Col>
                <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4} className="py-2">
                    <Cards />
                </Col>
                <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4} className="py-2">
                    <Cards />
                </Col>
                <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4} className="py-2">
                    <Cards />
                </Col>
                <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4} className="py-2">
                    <Cards />
                </Col>        
            </Row>
        </div>
    </Fragment>
  )
}

export default QuestionHub_page