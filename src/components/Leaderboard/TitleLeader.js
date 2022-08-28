import React from 'react';
import "./Leaderboard.css"
// import { Table } from "react-bootstrap";

const TitleLeader = () => {
  return (
    <div className="text-white leaderrow">
        <tr className="tabletitle">
            <td rowSpan="2"><p className="data trank">Rank</p></td>
            <td rowSpan="2"><p className="datauser tuser">Username</p></td>
            <td colSpan="6"><p className="data">Questions</p></td>
            <td rowSpan="2"><p className="datascore tscore">Total Score</p></td>
        </tr>
        <tr className="tabletitle">
            <td><p className="data">1</p></td>
            <td><p className="data">2</p></td>
            <td><p className="data">3</p></td>
            <td><p className="data">4</p></td>
            <td><p className="data">5</p></td>
            <td><p className="data">6</p></td>
        </tr>
    </div>
  )
}

export default TitleLeader