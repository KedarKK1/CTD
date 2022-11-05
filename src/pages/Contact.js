import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ContactCard from '../components/Contact/ContactCard';
import './Contact.css'

const Contact = () => {

  let contactUs = [
    {
      name: 'John Doe',
      phoneNo: '1234653424',
    },
    {
      name: 'Harry Williamson',
      phoneNo: '3554653424',
    },
    {
      name: 'Charles Hammer',
      phoneNo: '8794653424'
    },
    {
      name: 'Allen Parker',
      phoneNo: '9534653424'
    }
  ]

  return (
    <div className="contactUs">
      <h2 className="contactTitle">
        Contact Us
      </h2>
      <div className="cardDiv ">
        <Row className="justify-content-evenly mx-2" >
          {contactUs.map((item) => {
            console.log(item.name);
            return (
              <Col xxl={4} xl={4} lg={4} md={4} sm={5} xs={11} className=" px-3"><ContactCard name={{ namex: item.name, contact: item.phoneNo }} /></Col>
            )
            // (
            //   <Col className="myBorders"><ContactCard name={{ namex: item.name, contact: item.phoneNo }} /></Col>
            // )
          })}
          {/* <Col xxl={12} xl={12} lg={12} md={3} sm={3} className="myBorders"><ContactCard name={{ namex: "Cristiano Ronaldo", contact: "1234567890" }} /></Col>
          <Col xxl={12} xl={12} lg={12} md={3} sm={3} className="myBorders"><ContactCard name={{ namex: "Lionel Messi", contact: "5678901234" }} /></Col>
          <Col xxl={12} xl={12} lg={12} md={3} sm={3} className="myBorders"><ContactCard name={{ namex: "Rafed Nadal", contact: "1029384756" }} /></Col> */}
        </Row>
      </div>
    </div>
  )
}

export default Contact