import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Row } from 'react-bootstrap';
import Submission_page from './pages/Submission_page';
import LeaderBoard_page from './pages/LeaderBoard_page';
import QuestionHub_page from './pages/QuestionHub_page';
import Login_page from './pages/Login_page';
import Result_page from './pages/Result_page';
function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container-xxl">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* your page here */}


            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* margin auto for table not to go outside container */}
    <Row className="py-2 tableCss" style={{margin: "auto"}}>
      {/* <Submission_page /> */}
      {/* <QuestionHub_page /> */}
      {/* <LeaderBoard_page /> */}
      {/* <Result_page /> */}
    </Row>

      {/* <div className="d-flex justify-content-center align-content-center " >
        <Login_page />
      </div> */}


      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container className="flex-row justify-content-center">
          <h5 className='text-success text-center'>footer</h5>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
