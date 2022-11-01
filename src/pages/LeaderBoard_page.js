import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, Button, ProgressBar, Pagination, Col } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import "./LeaderBoard.css";

const LeaderBoard_page = () => {
  const [cookies] = useCookies(["token"]);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  const now = 60;
  const now2 = 10;
  const now3 = 90;

  // let active = 2;
  // let items = [];
  // for (let number = 1; number <= 5; number++) {
  //   items.push(
  //     <Pagination.Item key={number} active={number === active}>
  //       {number}
  //     </Pagination.Item>,
  //   );
  // }

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
          console.log('res.data',res.data.results) 
          const datas = [...res.data.results]
          setQuestions(data =>[...datas]);
          console.log('datas',datas)
          console.log('questions',questions)

        }).catch(function (err) {
              console.log('err',err);
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
    <>    
      <h2 className='text-white py-3'>Leaderboard</h2>      
      <div className="giveHt">
        <table className="text-white leaderboard table table-bordered giveTableCss">
          <thead>
            <tr className="giveRowCss">
              <th className="giveTbHeaderCss" scope="col" rowSpan="1">Rank</th>
              <th className="giveTbHeaderCss" scope="col" rowSpan="1">Username</th>
              <th className="giveTbHeaderCss" scope="col" colSpan="6">Questions</th>
              <th className="giveTbHeaderCss" scope="col" rowSpan="1">Total score</th>
            </tr>
            <tr className="giveRowCss">
              <td className="giveTdCss"></td>
              <td className="giveTdCss"></td>
              <td className="giveTdCss">Q1</td>
              <td className="giveTdCss">Q2</td>
              <td className="giveTdCss">Q3</td>
              <td className="giveTdCss">Q4</td>
              <td className="giveTdCss">Q5</td>
              <td className="giveTdCss">Q6</td>
              <td className="giveTdCss"></td>
            </tr>
            <tr className="giveRowCss">
              <td className="giveTdCss">Ankit Joshti</td>
              <td className="giveTdCss">Sukanya Awards</td>
              <td className="giveTdCss">-55</td>
              <td className="giveTdCss">-35</td>
              <td className="giveTdCss">-57</td>
              <td className="giveTdCss">46</td>
              <td className="giveTdCss">57</td>
              <td className="giveTdCss">45</td>
              <td className="giveTdCss">80</td>
            </tr>
            <tr className="giveRowCss">
              <td className="giveTdCss">Ankit Joshti</td>
              <td className="giveTdCss">Sukanya Awards</td>
              <td className="giveTdCss">-55</td>
              <td className="giveTdCss">-35</td>
              <td className="giveTdCss">-57</td>
              <td className="giveTdCss">46</td>
              <td className="giveTdCss">57</td>
              <td className="giveTdCss">45</td>
              <td className="giveTdCss">80</td>
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
                    <tr className="giveRowCss" key={idx2+1 + 10*(params.id-1)}>
                      <td className="giveTdCss">{idx2+1 + 10*(params.id-1)}</td>
                      <td className="giveTdCss">{user2[0] || 'UNKNOWN'}</td>
                      <td className="giveTdCss">{user2[1][1] || '0'}</td>
                      <td className="giveTdCss">{user2[1][2] || '0'}</td>
                      <td className="giveTdCss">{user2[1][3] || '0'}</td>
                      <td className="giveTdCss">{user2[1][4] || '0'}</td>
                      <td className="giveTdCss">{user2[1][5] || '0'}</td>
                      <td className="giveTdCss">{user2[1][6] || '0'}</td>
                      <td className="giveTdCss">{user2[1].total_score || '0'}</td>
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
        {/* <Pagination className="d-flex justify-content-center">
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
        </Pagination> */}

              <div className="row my-3">
                  <Col className="mt-1 h-100">
                      <Pagination >
                          {[...Array(10).keys()].map((x) => (
                              <Pagination.Item className="givePaginationTheme"  key={x + 1} active={params.id == x+1} onClick={() => { if( params.id != x+1){navigate(`/leaderboard/${x+1}`); window.location.reload();} }} >{x + 1}</Pagination.Item>
                          ))}
                      </Pagination>
                  </Col>
              </div>

      </div>
    </>
  );
}

export default LeaderBoard_page