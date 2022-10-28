import { ProgressBar} from "react-bootstrap";
import { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import React from 'react';
import "./Submissions.css";
import QueCard from "./QueCard";
import SubCard from "./SubCard";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
// import ReactPaginate from 'react-paginate';

const Submissions = () => {
    // const [queno, setQueno] = useState(1);

    const [qdetails, setQdetails] = useState([
        {id:1, time:'00:00', progress:10 },
        {id:2, time:'00:00', progress:70 },]);
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);

    const [cookies, setCookies] = useCookies(["token"]);

        const params = useParams();
        console.log("qn Testcase Id: ", params.id);

        useEffect(() => {
            const loadData = async () =>{
                setLoading(true);
                console.log("cookies", cookies.token)
                var config = {
                    method: 'get',
                    url: `http://localhost:8000/RC/submission/${params.id}`,
                    headers: { 
                      'Authorization': `Token ${cookies.token}`
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
                    setQuestions(questionsList.data);
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
                {qdetails.map((que) => (
                    <div className="que-preview" key={que.id}>
                    {que.id!==0 && <SubCard
                    attemptNo={que.id}
                    time={que.time}
                    progbar={<ProgressBar animated
                        now={que.progress}
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