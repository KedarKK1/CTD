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
    const [qdetails, setQdetails] = useState([]);
    const [qdetailLen, setQdetailLen] = useState(0);
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
                    url: `http://localhost:8000/RC/submission/${params.id}`,
                    // url: `http://localhost:8000/RC/submission`,
                    headers: { 
                      'Authorization': `Token ${cookies.token}`,
                    }
                  };
                  
                try {
                    const questionsList = await axios(config).then((res)=>{
                        console.log('res.data.result',res.data.results)
                        setQuestions(res.data.results);
                        setQdetailLen(res.data.results.length)
                        // res.data.results.map((a)=>{
                        //     return(
                        //         setQdetails(qdetails2=>[
                        //             ...qdetails2,
                        //             {   code: a.code,
                        //                 id: a.id,
                        //                 language: a.language,
                        //                 p_id: a.p_id,
                        //                 q_id: a.q_id,
                        //                 status: a.status,
                        //                 time: a.time,
                        //              }]
                        //             )
                        //     )
                        // })

                        setQdetails(qdetails=>[...qdetails,...res.data.results])

                        console.log('qdetails  ',qdetails)
                        // console.log('promise ',Promise.all(moviePromises));
                    })
                    //   .catch(function (error) {
                    //       console.log(error);
                    //     });
                    // console.log('questionsList',questionsList.data.results)
                        //   .then(function (response) {
                        //     console.log(JSON.stringify(response.data));
                        //   })
                    let result1=[]
                    // result1=[...result1,...questionsList.data.results]
                    // console.log('result1  ',result1)
                    // setQuestions(...questions,result1);
                    console.log('questions  ',questions)
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
                            <Pagination.Item className="givePaginationTheme" key={x + 1} active={params.id == x+1} onClick={() => { navigate(`/submission/${x+1}`); window.location.reload(); }} >{x + 1}</Pagination.Item>
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
                    {que.id!==0 && idx+1<=qdetailLen && <SubCard
                    // attemptNo={que.id}
                    // attemptNo={idx+1 + 10*(params.id-1)}
                    attemptNo={idx+1}
                    time={`${que.hours}: ${que.mins}`}
                    // time={`${que.time && que.time.split("T")[0]} : ${que.time.split("T")[1].split(".")[0]}` }
                    progbar={<ProgressBar animated
                        // now={que.progress}
                        // now={70}
                        now={ que.status=="AC" ? 100 : 0 }
                    />}
                    submittedCode={que.code}
                    />}
                </div>       
                ))}
                {!qdetails.length ? <div className="text-white">No Submissions</div> : <div></div>}
            </div>

                        
            <div className="space"></div>
        </div>
    );
}
 
export default Submissions;