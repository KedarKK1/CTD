import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import "./Submissions.css";


const ViewCode = (submittedCode) => {
  
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleView = () => setShow(true);
  // console.log("viewcode ", submittedCode.code)
return (
  <div>
        <Button variant="default" className=" btn btn1 sub-button" onClick={handleView}>
          View
        </Button>
        <Modal
          className="codemodal"
          show={show}
          onHide={handleClose}
          centered
          keyboard={false}
          size="lg"
          scrollable
        >
          <Modal.Header closeButton>
          <Modal.Title>Submission</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Button variant="default" className=" btn copybtn"><i class="far fa-clipboard"></i> Copy</Button>
          <p className="codemodaltext">
          {/* Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. 
          Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. */}
          {submittedCode.code}
              
        </p>
          
          </Modal.Body>
            
        </Modal>
        </div>
     );
}
 
export default ViewCode;