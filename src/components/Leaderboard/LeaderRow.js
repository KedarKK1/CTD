import React from 'react'
// import { Table } from "react-bootstrap";
import "./Leaderboard.css";

const LeaderRow = ({data}) => {
    return ( 
        <div className="leaderrow">
            
                <td>
                    <p className="data">{data.rank}</p>
                </td>
                <td>
                    {/* <p className="datauser">{data.username}</p> */}
                    <p className="data">{data.username}</p>
                </td>
                <td>
                    <p className="data">{data.q1}</p>
                </td>
                <td>
                    <p className="data">{data.q2}</p>
                </td>
                <td>
                    <p className="data">{data.q3}</p>
                </td>
                <td>
                    <p className="data">{data.q4}</p>
                </td>
                <td>
                    <p className="data">{data.q5}</p>
                </td>
                <td>
                    <p className="data">{data.q6}</p>
                </td>
                <td>
                    {/* <p className="datascore">{data.total}</p> */}
                    <p className="data">{data.total}</p>
                </td>
            
        </div>
     );
}

export default LeaderRow;