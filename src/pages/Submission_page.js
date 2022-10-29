import React from 'react'
import { Table, Button, ProgressBar, Pagination } from 'react-bootstrap';

const Submission_page = () => {
  const [cookies] = useCookies(["token"]);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const now = 60;
  const now2 = 10;
  const now3 = 90;

  let active = 2;
let items = [];
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
      console.log("cookies", cookies.token)
      var config = {
          method: 'get',
          url: 'http://localhost:8000/RC/submission',
          headers: { 
            'Authorization': `Token ${cookies.token}`
          }
        };
        
      const questionsList = await axios(config)
      //   .catch(function (error) {
      //       console.log(error);
      //     });
      console.log('questionsList',questionsList.data)
          //   .then(function (response) {
          //     console.log(JSON.stringify(response.data));
          //   })
      setQuestions(questionsList.data);
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
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Sr no.</th>
            <th>Time</th>
            <th>Progess</th>
            <th>See Submission</th>
          </tr>
        </thead>
        <tbody>
          <tr className="my-2">
            <td>1</td>
            <td>00:49</td>
            <td> <ProgressBar animated now={now} label={`${now}%`} /> </td>
            <td> <Button variant="primary">View</Button> </td>
          </tr>
          <tr className="my-2">
            <td>2</td>
            <td>01:45</td>
            <td> <ProgressBar animated now={now2} label={`${now2}%`} /> </td>
            <td> <Button variant="primary">View</Button> </td>
          </tr>
          <tr className="my-2">
            <td>3</td>
            <td>03:21</td>
            <td> <ProgressBar animated now={now3} label={`${now3}%`} /> </td>
            {/* <td colSpan={2}>Larry the Bird</td> */}
            <td> <Button variant="primary">View</Button> </td>
          </tr>
        </tbody>
      </Table>
      <Pagination className="d-flex justify-content-center">{items}</Pagination>
    </>
  );
}

export default Submission_page