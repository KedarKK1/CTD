import "./ldiv.css";
import { Card } from 'react-bootstrap';
// import Pagination from 'react-bootstrap/Pagination';
import React, { useState } from 'react';


function ClipboardCopy({ copyText }) {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
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
      {/* <input type="text" value={copyText} readOnly /> */}
      <textarea value={copyText} rows="3" className="clipboardCopy position-relative" />
      <span class="position-absolute top-0 start-100 translate-middle badge bg-light text-dark px-2 py-2">
        <span><button className="border-0" onClick={handleCopyClick}><span>{isCopied ? 'Copied!' : 'Copy'}</span></button></span>
        {/* <i class="fa-solid fa-copy"></i> */}
      </span>

    </div>
  );
}

export default function InputBox() {
  return (
    <div className="inputBox">
      <Card className="inputBoxTitle">
        <Card.Body>
          <Card.Title >Sample Input</Card.Title>
          <ClipboardCopy copyText='1
                                            2 4
                                            3 6' />


        </Card.Body>
      </Card>
    </div>
  )
  // function myFunction() {
  //   var copyText = document.getElementsByClassName("testcases");
  //   copyText.select();
  //   copyText.setSelectionRange(0, 99999);
  //   navigator.clipboard.writeText(copyText.value);
  //   alert("Copied the text: " + copyText.value);
  // }
}
