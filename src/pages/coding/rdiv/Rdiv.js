// import { Button } from 'bootstrap';
import { useCookies } from "react-cookie";
import { useState, FileReader, React, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./rdiv.css";
// import Code_Editor from '../code_editor/Code_Editor';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";
import { useNavigate } from "react-router-dom";
var axios = require('axios');
var FormData = require('form-data');

function Rdiv( props ) {
  let [lang, updatelang] = useState("c_cpp");
  let [theme, utheme] = useState("monokai");
  let cscore = 100;
  let [cdc, ucdc] = useState("black");
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState([]);
  const [cookies, setCookies] = useCookies(["token"]);
  const [userInpText, setUserInpText] = useState("");
  const navigate = useNavigate();

  const fileu = async (e) => {
    // e.preventDefault();
    // const reader = new FileReader();
    // reader.onload = async (e) => {
    //   const text = e.target.result;
    //   console.log(text);
    //   alert(text);
    // };
    var file = e;
    const reader = new FileReader();
    reader.onload = function(event) {
      // The file's text will be printed here
      console.log(event.target.result)
    };
  
    reader.readAsText(file);
  
  };
  function langc(e) {
    // console.log(lang);/
    updatelang(e.target.value);
    console.log(e.target.value);
    setUserInpText(localStorage.getItem(`${e.target.value}`));
  }
  function themec(e) {
    utheme(e.target.value);
    if (e.target.value === "monokai" || e.target.value === "twilight") {
      ucdc("black");
    }
    else {
      ucdc("");
    }
    console.log(e.target.value);
    // console.log(theme);
  }
  const calcInput = async (dataArr) => {
    var codeInput = " ";
    for await (const str of dataArr){
      codeInput += (" "+str+" ");
    } 
    return codeInput;
  }
  const submitInput = () =>{
    try {
      setLoading(true);

      // console.log("cookies", cookies.token)
      var formdata = new FormData();

      // const myCodeArr =   localStorage.getItem(`${lang}`).split("\n");
      const myCodeArr =   localStorage.getItem(`${lang}`);
      // var codeInput = " ";
      // codeInput = calcInput(myCodeArr)
      // var fcode=myCodeArr.join("    ")
      if(lang === "c"){
        formdata.append("language", "c");
        formdata.append("code", myCodeArr)

        // codeInput = +calcInput();
        // formdata = {
        //   // code: myCodeArr.join(" "),
        //   code: myCodeArr,
        //   language: lang,
        // };

      }else if(lang === "python"){
        formdata.append("language", "python");
        formdata.append("code", myCodeArr)
        // formdata = {
        //   // code: myCodeArr.join("    "),
        //   code: myCodeArr,
        //   language: lang,
        // };

        

      }else if(lang === "c_cpp"){
        formdata.append("language", "c++");
        formdata.append("code", myCodeArr)
        // formdata = {
        //   // code: myCodeArr.join("    "),
        //   code: myCodeArr,
        //   language: "c++",
        // };

      }else{
        console.log("Please enter correct language")
      }
      // formdata.append("code", `${userInpText}`)
      
      // formdata=window.FormData
      // myHeader = formdata.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' };
      var config = {
        method: 'POST',
        url: `http://localhost:8000/RC/submit/${props.qnIdParam}`,
        headers: { 
          'Authorization': `Token ${cookies.token}`,
          // 'Content-Type': `multipart/form-data;boundary=${formdata._boundary}` 
        },
        // withAuthentication:true,
        // body: JSON.stringify(formdata),
        data: formdata 
        
      };
      console.log('question.id - ',props.qnIdParam);
      console.log('formData - ', formdata );
      let result;
      // fetch(`http://localhost:8000/RC/submit/${props.qnIdParam}`, config)
      //   .then(response => response.text())
      //   .then(result2 => {result = result2; 
      //   console.log(JSON.stringify(result2))
      // //   navigate(`/testcase/${props.qnIdParam}`, {state: {
      // //     "cases": [
      // //         "AC"
      // //     ],
      // //     "error": "na"
      // // }})
      // })

      axios(config)
        .then(function (response) {
          console.log('res data',JSON.stringify(response.data));
          navigate(`/testcase/${props.qnIdParam}`, { replace: true, state: response.data })
        })

        .catch(error => console.log('error', error));

      setLoading(false);
      //! look at below navigation if ./sub or /sub or sub only
    } catch (err) {
      console.log('err',err);
    }
  }

  useEffect(() => {
    localStorage.setItem('c', ` `)
    localStorage.setItem('c_cpp', `#include <iostream> \n using namespace std; \n int main(){ \n int t; cin>>t;  \n  cout<<"Hello"; \n return 0; \n}`)
    localStorage.setItem('python', ` `)
    const loadData = async () => {
        setLoading(true);
        console.log("cookies", cookies.token)
        var config = {
            method: 'get',
            url: `http://localhost:8000/RC/user`,
            headers: {
                'Authorization': `Token ${cookies.token}`
            },
        };

        const questionsList = await axios(config)
          .catch(function (err) {
              console.log('err',err);
            });
        console.log('questionsList', questionsList.data)
        //   .then(function (response) {
        //     console.log(JSON.stringify(response.data));
        //   })
        setQuestion(questionsList.data);
        setLoading(false);
    }
    loadData();
}, [])

function onChange(newValue) {
  // console.log("change", newValue);
  localStorage.setItem(`${lang}`, newValue);
}


if (loading) {
    return (
        <>Loadingg....</>
    )
}

  return (
    <Card className="rdiv">
      {/* {lang}{theme} */}
      <Card className="rtopnav bg-t c-w">
        <div className="rtn rtn1">
          <select name="lang" id="lang" onChange={langc} className="bg-t c-w br-2 b-1">
            <option value="c" className="bg-bl c-w">C</option>
            <option value="c_cpp" className="bg-bl c-w">C++</option>
            <option value="python" className="bg-bl c-w">python</option>
          </select>
        </div>
        <div className="rtn rtn2">
          {/* <h5>Your Score :{cscore}</h5> */}
          <h5>Your Score :{question.total_score}</h5>
        </div>
        <div className="rtn rtn3">
          <select name="theme" id="theme" onChange={themec} className="bg-t c-w br-2 b-1">
            <option value="monokai" className="bg-bl c-w ">monokai</option>
            <option value="github" className="bg-bl c-w">github</option>
            <option value="tomorrow" className="bg-bl c-w">tomorrow</option>
            <option value="twilight" className="bg-bl c-w">twilight</option>
          </select>
        </div>
      </Card>
      <Card className="ediv">
        <AceEditor
          mode={lang}
          value={ userInpText }
          onChange={onChange}
          // onLoad={this.onLoad}
          theme={theme}
          name="UNIQUE_ID_OF_DIV"
          style={{ height: "100%", width: "100%", backgroundColor: cdc }}
          resize="True"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 1,
            showPrintMargin: false, // boolean: true if show the vertical print margin
            showGutter: true, // boolean: true if show line gutter
            wrap: true,
            renderValidationDecorations: "on",
          }}
        />
      </Card>
      <Card className="rtopnav rbottomnav bg-t">
        {/* <div >
          <button className="rbn rbn1 bg-t  b-1 c-w br-2 pd-lr-15"><span><i class="fa-solid fa-play"></i> </span>Run</button>
        </div> */}
        <div >
          <button className="rbn rbn2 bg-t  b-1 c-w br-2 pd-lr-15">Load Buffer</button>
        </div>
        <div >
          <label htmlFor="inpfff" className="rbn rbn3 bg-t  b-1 c-w br-2 pd-lr-15">
            {/* Choose File */}
            <span><i class="fa-solid fa-file-arrow-up"></i> </span> Choose File
          </label>  
          <input type="file" accept=".txt,.cpp,.c,.py" name="inpf" id="inpfff" onChange={(e)=> {fileu(e.target.files[0])}} />
        </div>
         <div >
          <input onClick={submitInput} type="submit" value="Submit" className="rbn rbn4 b-b pd-lr-15 bg-t  b-1 c-w br-2" />
        </div>
      </Card>
    </Card>
  );
}

export default Rdiv;
