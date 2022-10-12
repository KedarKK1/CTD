import './Coding.css';
// import AceEditor from "react-ace";

// import "ace-builds/src-noconflict/mode-c_cpp";
// import "ace-builds/src-noconflict/theme-monokai";
// import "ace-builds/src-noconflict/ext-language_tools";
// import { React } from "react";
import Ldiv from './ldiv/Ldiv';
import Rdiv from './rdiv/Rdiv';
import { useCookies } from "react-cookie";
import React, { useState, useEffect } from 'react'
var axios = require('axios');

function Coding(){
    const [cookies] = useCookies(["token"]);
    const [loading, setLoading] = useState(false);

    return(
    <div className='mdiv rows'>
        {/* <AceEditor
        mode="c_cpp"
        theme="monokai"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        /> */}
        <div className="col-12 col-sm-12 col-sx-12 col-md-6 col-l-6 col-lg-6 col-xxl-6">
            <Ldiv />
        </div>
        <div className="col-12 col-sm-12 col-sx-12 col-md-6 col-l-6 col-lg-6 col-xxl-6">
            <Rdiv/>
        </div>
    </div>
    )
}

export default Coding;