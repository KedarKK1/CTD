import React from 'react'
import { Button, Card } from 'react-bootstrap'
import InputBox from './InputBox'
import OutputBox from './OutputBox'

const LBottom = () => {
  return (
    // <div>
      <Card className='row'>
            {/* <Card className="col-md-6 inp bg-t b-2">
                <div className='bg-b'><h5>Custom Input</h5></div>
                <textarea name="" id="" className='inpt bg-t c-w br-2'></textarea>
            </Card> */}
            <Card className="col-9 col-sm-9 col-sx-9 col-md-5 col-lg-5 out bg-t b-2 align-items-center justify-content-center border-0">
                <InputBox />
            </Card>
            <Card className="col-3 col-sm-3 col-sx-3 col-md-2 col-lg-2 out bg-t b-2 align-items-center justify-content-center border-0">
              <button className="rbnRun bg-t  b-1 c-w br-2 pd-lr-15"><span><i class="fa-solid fa-play"></i> </span>Run</button>
            </Card>
            <Card className='col-12 col-sm-12 col-sx-12 col-md-5 col-lg-5 out bg-t b-2  align-items-center justify-content-center border-0'>
                {/* <div className='bg-b c-w'><h5>Custom Output</h5></div>
                <textarea name="" id="" className='outt bg-t c-w br-2' readOnly>{question.sample_output}</textarea> */}
                <OutputBox />
            </Card>
            {/* </div> */}
        </Card>
  )
}

export default LBottom