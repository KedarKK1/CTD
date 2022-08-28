// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, Container, NavDropdown, Row, Image, Button } from 'react-bootstrap';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import Result_page from './pages/Result_page';
// import Submission_page from './pages/Submission_page';
// import LeaderBoard_page from './pages/LeaderBoard_page';
import QuestionHub_page from './pages/QuestionHub_page';
import Coding from './pages/coding/Coding';
import Loginpage from './pages/Login_page';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Instructions from './components/Instructions/Instructions';
import Submissions from './components/Submissions/Submissions';
import pisbLogo from './images/pisblogo.png';
import rclogo from './images/rclogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ maxHeight: '60px' }}>
        <div className="container-xxl" style={{ maxHeight: '50px' }}>
          <Navbar.Brand href="./question_hub"> <Image src={pisbLogo} alt="PISB_LOGO" style={{ maxHeight: '50px' }} className="pisbLogo" /> </Navbar.Brand>
          <Navbar.Brand href="./question_hub" className="navTimer"> TIMER: 03:15:48 </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto pt-auto pb-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav> */}

              <Nav.Link className="d-flex align-items-center navbarFont" eventKey={1} href="./question_hub"><span><i className="fa fa-list-alt px-1" aria-hidden="true" /></span>QUESTION HUB</Nav.Link>
              <Nav.Link className="d-flex align-items-center navbarFont" eventKey={2} href="./submission"><i className="fa fa-file-code px-1" aria-hidden="true" />SUBMISSIONS</Nav.Link>
              <Nav.Link className="d-flex align-items-center navbarFont" eventKey={3} href="./leaderboard"><i className="fa fa-duotone fa-flag-checkered px-1" aria-hidden="true" />LEADERBOARD</Nav.Link>
              <Nav.Link className="d-flex align-items-center navbarFont" eventKey={4} href="./"><button className="myButtonNavBar"><i className="fa fa-sign-out" aria-hidden="true"></i> LOG OUT</button></Nav.Link>
              <Nav.Link><Image src={rclogo} alt="RC_LOGO" style={{ maxHeight: '50px' }} /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* margin auto for table not to go outside container */}
      {/* <Row className="py-2 tableCss" style={{margin: "auto"}}> */}
      {/* <Submission_page /> */}
      {/* <QuestionHub_page /> */}
      {/* <LeaderBoard_page /> */}
      {/* <Result_page /> */}
      {/* </Row> */}

      {/* <div className="d-flex justify-content-center align-content-center " > */}
      {/* <Login_page /> */}
      {/* </div> */}
      <div className="container-fluid">

        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/instruction" element={<Instructions className="mx-3" />} />
          <Route path="/question_hub" element={<QuestionHub_page />} >
          </Route>
            <Route path="/question_hub/:id" element={<Coding /> } >
          </Route>
          {/* <Route path="/submission" element={<Submission_page />} /> */}
          <Route path="/submission" element={<Submissions />} />
          <Route path="/result" element={Result_page} />
          {/* <Route path="/leaderboard" element={<LeaderBoard_page />} /> */}
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>


      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container className="flex-row justify-content-center">
          <h6 className='text-center text-white'> &#169; PISB IEEE STUDENT BRANCH || Developed by PISB <span className="text-success"> Web team</span> </h6>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
