// import logo from './logo.svg';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, Container, NavDropdown, Row, Image, Button } from 'react-bootstrap';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import ResultPage from './pages/ResultPage';
// import Submission_page from './pages/Submission_page';
import LeaderBoard_page from './pages/LeaderBoard_page';
import QuestionHubPage from './pages/QuestionHubPage';
import Coding from './pages/coding/Coding';
import Loginpage from './pages/Login_page';
// import Leaderboard from './components/Leaderboard/Leaderboard';
import Instructions from './components/Instructions/Instructions';
import Submissions from './components/Submissions/Submissions';
import pisbLogo from './images/pisblogo.png';
import rclogo from './images/rclogo.png';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"
import './App.css';
import RequireAuth from './components/RequireAuth';
import { useEffect } from 'react';
import TestCases from './components/Test Cases/TestCases';

function App() {
  // const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookies] = useCookies(["token"]);

  const handleLogOut = () => {
    // setCookie("token", "null", { path: "/" });
    // setCookie("token", "", { path: "/", maxAge: 4320 });
    if(cookies){
      console.log(" ")
    } 
    setCookies("token", "", { path: "/" }).then(()=>{
      fetch("./result")
        .then(() => {
          navigate("./result")  
          removeCookies("token", "", { path: "/" });
        }).catch(error => console.log('error', error));
    });
  }
  
    const location = useLocation()
    // const [{ route }] = matchRoutes(routes, location)
  
    // return route.path
    
  useEffect(() => {
    // console.log(location.pathname)
  }, [location])
  
    
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ maxHeight: '60px' }}>
        <div className="container-xxl" style={{ maxHeight: '50px' }}>
          <Navbar.Brand href="./question_hub"> <Image src={pisbLogo} alt="PISB_LOGO" style={{ maxHeight: '40px' }} className="pisbLogo" /> </Navbar.Brand>
          {(location.pathname!=="/" && location.pathname!=="/result" && location.pathname!=="/instruction") ? <Navbar.Brand href="./question_hub" className="navTimer"> TIMER: 03:15:48 </Navbar.Brand> : <></>}
            
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

              {(location.pathname!=="/" && location.pathname!=="/result") ? <>
                  <Nav.Link className="d-flex align-items-center navbarFont" eventKey={1} href="../instruction"><span><i className="fa fa-list-alt px-1" aria-hidden="true" /></span>INSTRUCTIONS</Nav.Link>
                {location.pathname==="/instruction" ? <>
                  <Nav.Link disabled className="d-flex align-items-center navbarFont" eventKey={1} href="/question_hub"><span><i className="fa fa-list-alt px-1" aria-hidden="true" /></span>QUESTION HUB</Nav.Link>
                  <Nav.Link disabled className="d-flex align-items-center navbarFont" eventKey={2} href="/submission"><i className="fa fa-file-code px-1" aria-hidden="true" />SUBMISSIONS</Nav.Link>
                  {/* <Nav.Link disabled className="d-flex align-items-center navbarFont" eventKey={5} href="/testcase/1"><i className="fa fa-duotone fa-flag-checkered px-1" aria-hidden="true" />TEST CASES</Nav.Link> */}
                  <Nav.Link disabled className="d-flex align-items-center navbarFont" eventKey={3} href="/leaderboard/1"><i className="fa fa-duotone fa-flag-checkered px-1" aria-hidden="true" />LEADERBOARD</Nav.Link>
                  <Nav.Link className="d-flex align-items-center navbarFont" eventKey={4} href="/result"><button className="myButtonNavBar" onClick={handleLogOut}><i className="fa fa-sign-out" aria-hidden="true"></i> LOG OUT</button></Nav.Link>
                </> : <> 
                  <Nav.Link className="d-flex align-items-center navbarFont" eventKey={1} href="/question_hub"><span><i className="fa fa-list-alt px-1" aria-hidden="true" /></span>QUESTION HUB</Nav.Link>
                  <Nav.Link className="d-flex align-items-center navbarFont" eventKey={2} href="/submission/1"><i className="fa fa-file-code px-1" aria-hidden="true" />SUBMISSIONS</Nav.Link>
                  {/* <Nav.Link className="d-flex align-items-center navbarFont" eventKey={5} href="/testcase/1"><i className="fa fa-duotone fa-flag-checkered px-1" aria-hidden="true" />TEST CASES</Nav.Link> */}
                  <Nav.Link className="d-flex align-items-center navbarFont" eventKey={3} href="/leaderboard/1"><i className="fa fa-duotone fa-flag-checkered px-1" aria-hidden="true" />LEADERBOARD</Nav.Link>
                  <Nav.Link className="d-flex align-items-center navbarFont" eventKey={4} href="/result"><button className="myButtonNavBar" onClick={handleLogOut}><i className="fa fa-sign-out" aria-hidden="true"></i> LOG OUT</button></Nav.Link>
                </> 
                }
              </>  : <>
                <Nav.Link className="d-flex align-items-center navbarFont" eventKey={1} href="./"><span></span><button className="myLoginButtonNavBar" onClick={handleLogOut}>LOGIN</button></Nav.Link>
              
              </>}

              
              <Nav.Link><Image src={rclogo} alt="RC_LOGO" style={{ maxHeight: '50px' }} /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* margin auto for table not to go outside container */}
      {/* <Row className="py-2 tableCss" style={{margin: "auto"}}> */}
      {/* <Submission_page /> */}
      {/* <QuestionHubPage /> */}
      {/* <LeaderBoard_page /> */}
      {/* <Result_Page /> */}
      {/* </Row> */}

      {/* <div className="d-flex justify-content-center align-content-center " > */}
      {/* <Login_page /> */}
      {/* </div> */}
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route element={<RequireAuth />}>
            <Route path="/instruction" element={<Instructions className="mx-3" />} />
            <Route path="/question_hub" element={<QuestionHubPage />} >
            </Route>
            <Route path="/question_hub/:id" element={<Coding />} >
            </Route>
            {/* <Route path="/submission" element={<Submission_page />} /> */}
            <Route path="/submission/:id" element={<Submissions />} />
            <Route path="/testcase/:id" element={<TestCases />} />
            <Route path="/leaderboard/:id" element={<LeaderBoard_page />} />
            {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
          </Route>
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
