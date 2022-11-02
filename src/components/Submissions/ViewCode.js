import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import "./Submissions.css";


const ViewCode = (submittedCode) => {
  
  const [isCopied, setIsCopied] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleView = () => setShow(true);
  // console.log("viewcode ", submittedCode.code)
      // This is the function we wrote earlier

    const copyTextToClipboard = async (text) => {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(text);
        } else {
          return document.execCommand('copy', true, text);
        }
      }
    
      // onClick handler function for the copy button
      const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(submittedCode.code)
          .then(() => {
            // If successful, update the isCopied state value
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
          });
      }

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
          <Button  onClick={handleCopyClick} variant="default" className=" btn copybtn"><i class="far fa-clipboard"></i> {isCopied ? "Copied!" : "Copy"}</Button>
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