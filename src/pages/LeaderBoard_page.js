import React from 'react'
import { Table, Button, ProgressBar, Pagination } from 'react-bootstrap';
import "./LeaderBoard.css";

const LeaderBoard_page = () => {
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
  
    return (
      <>
        <table className="text-white leaderboard table table-bordered">
          <thead>
            <tr>
              <td rowSpan="2">Rank</td>
              <td rowSpan="2">Username</td>
              <th colspan="6">Questions</th>
              <td rowSpan="2">Total score</td>
            </tr>
            <tr>
              <td>Q1</td>
              <td>Q2</td>
              <td>Q3</td>
              <td>Q4</td>
              <td>Q5</td>
              <td>Q6</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>KedarKK1</td>
              <td>7</td>
              <td>5</td>
              <td>4</td>
              <td>22</td>
              <td>76</td>
              <td>53</td>
              <td> 750 </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jitesh</td>
              <td>7</td>
              <td>5</td>
              <td>4</td>
              <td>22</td>
              <td>76</td>
              <td>53</td>
              <td> 750 </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Kriplani</td>
              <td>7</td>
              <td>5</td>
              <td>4</td>
              <td>22</td>
              <td>76</td>
              <td>53</td>
              <td> 750 </td>
            </tr>
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

      </>
    );
}

export default LeaderBoard_page