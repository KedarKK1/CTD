import { Table } from "react-bootstrap";
import ViewCode from './ViewCode'
const SubCard = ({ attemptNo, time, progbar, submittedCode }) => {
    return (
        <div className="subcard">
        <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="card scard">
            <div className="card-body">
            <Table responsive className="table table-borderless">
              <tbody>
                <tr>
                  <td><p className="subtext px-3">{attemptNo}</p></td>
                  <td><p className="subtext px-3">{time}</p></td>
                  <td><p className="progbar px-3">{progbar}</p></td>
                  <td>
                    <ViewCode code={submittedCode}/>
                </td>
                </tr>

              </tbody>
            </Table>
              
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>            
        </div>
      );
}
 
export default SubCard;