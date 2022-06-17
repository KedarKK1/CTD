import React from 'react';
import './ContactCard.css';

const ContactCard = (props) => {

  const phoneNo = `tel:+91${props.name.contact}`
  return (
    <>
        <div className="box2">
          {/* check img with other images size */}
          <img className="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="img" />
            <div className="box-content">
              <div className="inner-content">
                  <h3 className="title">{props.name.namex}</h3>
                  <span className="post">Phone No: {props.name.contact}</span>
                  <ul className="icon">
                      <li><a href={phoneNo}><i className="fa fa-phone big-icon"></i></a></li>
                      {/* <li><a href="#"><i className="fa fa-link"></i></a></li> */}
                  </ul>
              </div>
            </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default ContactCard;