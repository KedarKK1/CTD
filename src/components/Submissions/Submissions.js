import { Col, Pagination, ProgressBar} from "react-bootstrap";
import { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import React from 'react';
import "./Submissions.css";
import QueCard from "./QueCard";
import SubCard from "./SubCard";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
// import ReactPaginate from 'react-paginate';

const Submissions = () => {
    // const [queno, setQueno] = useState(1);

    // const [qdetails, setQdetails] = useState([
    //     {id:1, time:'00:00', progress:10 },
    //     {id:2, time:'00:00', progress:70 },]);
    const [qdetails, setQdetails] = useState([{
        "id": 9,
        "q_id": {
          "id": 2,
          "score": 12,
          "code": "print(int(input())-35)",
          "language": "python",
          "title": "Subtract 35 and give the results to compiler",
          "body": "Great question comes from great Minds\r\nSubtract 35 from the given integer and return your ans to submit it to console for processing",
          "description": "Subtract 35 & give results",
          "input_format": "t -> no. of test cases followed\r\ni -> integer",
          "output_format": "j -> integers",
          "constraints": "1<=t<=100\r\n1<=i<=120",
          "sample_input": "3\r\n55\r\n70\r\n25",
          "sample_output": "20\r\n35\r\n-10",
          "explaination": "Test case 1 => 55 - 35 = 20\r\nTest case 2 => 70 - 35 = 35\r\nTest case 3 => 25 - 35 = -10",
          "correct_submissions": 0,
          "total_submissions": 0,
          "accuracy": 0,
          "time_limt": 1,
          "memory_limit": 256
        },
        "p_id": {
          "id": 1,
          "last_login": "2022-10-29T13:50:15.927915+05:30",
          "is_superuser": true,
          "username": "admin",
          "first_name": "",
          "last_name": "",
          "email": "",
          "is_staff": true,
          "is_active": true,
          "date_joined": "2022-09-26T15:32:52.688234+05:30",
          "total_score": -26,
          "groups": [],
          "user_permissions": []
        },
        "time": "2022-10-29T12:21:13.930376+05:30",
        "code": "print(int(input()) + 10)",
        "status": "WA",
        "language": "python"
      }]);
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);

    const [cookies, setCookies] = useCookies(["token"]);

        const params = useParams();
        console.log("qn Testcase Id: ", params.id);

        const navigate = useNavigate();

        useEffect(() => {
            const loadData = async () =>{
                setLoading(true);
                console.log("cookies", cookies.token)
                var config = {
                    method: 'get',
                    // url: `http://localhost:8000/RC/submission/${params.id}`,
                    url: `http://localhost:8000/RC/submission`,
                    headers: { 
                      'Authorization': `Token ${cookies.token}`,
                    }
                  };
                  
                try {
                    const questionsList = await axios(config)
                    //   .catch(function (error) {
                    //       console.log(error);
                    //     });
                    console.log('questionsList',questionsList.data)
                        //   .then(function (response) {
                        //     console.log(JSON.stringify(response.data));
                        //   })
                    // setQuestions(questionsList.data);
                } catch (err) {
                    console.log("err in submission", err)
                }
                setLoading(false);
            }
            loadData();
            }, [cookies.token])    
    
    if(loading){
        return(
            <>Loadingg....</>
        )
    }
  

    return (
        <div className="sub">
            <div className="row my-3">
                <Col className="mt-1 h-100">
                    <Pagination >
                        {[...Array(6).keys()].map((x) => (
                            <Pagination.Item  key={x + 1} active={params.id == x+1} onClick={() => { navigate(`/submission/${x+1}`); window.location.reload(); }} >{x + 1}</Pagination.Item>
                        ))}
                    </Pagination>
                </Col>
            </div>
            
            {/* <ReactPaginate
            previousClassName="hidelabel"
                    nextClassName="hidelabel"
                    pageClassName="chooseque"
    pageCount={6}
    onPageChange={console.log("click")}
    containerClassName={"pagination"}
    subContainerClassName={"pages pagination"}
    activeClassName={"active"} />
          */}
          <div className="ques">
                <QueCard qno={params.id} />
                {qdetails.map((que, idx) => (
                    <div className="que-preview" key={idx}>
                    {que.id!==0 && <SubCard
                    // attemptNo={que.id}
                    // attemptNo={idx+1 + 10*(params.id-1)}
                    attemptNo={idx+1}
                    time={`${que.time.split("T")[0]} : ${que.time.split("T")[1].split(".")[0]}` }
                    progbar={<ProgressBar animated
                        // now={que.progress}
                        // now={70}
                        now={ que.status=="AC" ? 100 : 0 }
                    />}
                
                    />}
                </div>       
                ))}
            </div>


            <div className="space"></div>
        </div>
    );
}
 
export default Submissions;