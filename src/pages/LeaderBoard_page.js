import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, Button, ProgressBar, Pagination } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import "./LeaderBoard.css";

const LeaderBoard_page = () => {
  const [cookies] = useCookies(["token"]);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  const now = 60;
  const now2 = 10;
  const now3 = 90;

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  useEffect(() => {
    const loadData = async () =>{
        setLoading(true);
        // console.log("cookies", cookies.token)
        var config = {
            method: 'get',
            url: 'http://localhost:8000/RC/allranks',
            headers: { 
              'Authorization': `Token ${cookies.token}`
            }
          };
          
        const questionsList = await axios(config).then(res => {
          // console.log('res.data',res.data) 
          setQuestions([...questions, res.data]);
          console.log('questions',questions)

        }).catch(function (error) {
              console.log(error);
            });
            //   .then(function (response) {
            //     console.log(JSON.stringify(response.data));
            //   })
        setLoading(false);
    }
    loadData();
    }, [])    

  if(loading){
    return(
        <>Loadingg....</>
    )
  } 

  return (
    <div className="h-100">
      <table className="text-white leaderboard table table-bordered">
        <thead>
          <tr>
            <th scope="col" rowSpan="1">Rank</th>
            <th scope="col" rowSpan="1">Username</th>
            <th scope="col" colSpan="6">Questions</th>
            <th scope="col" rowSpan="1">Total score</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Q1</td>
            <td>Q2</td>
            <td>Q3</td>
            <td>Q4</td>
            <td>Q5</td>
            <td>Q6</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          
          {/* {questions[0] && Object.entries(questions[0]).length && Object.entries(questions).map((user, idx)=>{
          <tr>
            <td>{idx}</td>
            <td>{user[0]}</td>
            <td>7</td>
            <td>5</td>
            <td>4</td>
            <td>22</td>
            <td>76</td>
            <td>53</td>
            <td>{user[1].total_score}</td>
          </tr>
          })} */}


          {questions[0] && questions.length > 0 && 
              (Object.entries(questions[0]).map((user2, idx2)=>{
                return(
                  <tr key={idx2+1}>
                    <td>{idx2+1}</td>
                    <td>{user2[0] || 'UNKNOWN'}</td>
                    <td>{user2[1][1] || '0'}</td>
                    <td>{user2[1][2] || '0'}</td>
                    <td>{user2[1][3] || '0'}</td>
                    <td>{user2[1][4] || '0'}</td>
                    <td>{user2[1][5] || '0'}</td>
                    <td>{user2[1][6] || '0'}</td>
                    <td>{user2[1].total_score || '0'}</td>
                  </tr>
                  )
                })
              )
          }

          {/* {questions && questions.length > 0 && questions.map((user, idx)=>{
            return (              
            <tr>
              <td>{idx}</td>
              <td>{user[0]}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            )
          })} */}

        </tbody>
      </table>
      <Pagination className="d-flex justify-content-center">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>

    </div>
  );
}

export default LeaderBoard_page