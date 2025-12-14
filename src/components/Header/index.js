import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import './header.css';
export const Header=(props)=> {
  let navigate=useNavigate();
  const email=localStorage.getItem('email');
  const handleLoginClick = () => {
    navigate('/login')
  }
  const handleLogoutClick = () => {
    localStorage.removeItem('email');
    navigate('/login');
  }
  const handleFindCoachClick = () => {
    navigate('/find-coach')

  }

  return (
    <Navbar expand="lg" fixed={`${props.fixed}`} className='navbar-header'>
      <Container fluid>
        <Navbar.Brand href="/" className="header-heading">BetterUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/about" className='action'>About</Nav.Link>
            <Nav.Link href="/individual" className='action'>For individual</Nav.Link>
            <NavDropdown  className='action' title="Coaching" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/career"> Carrer Coaching</NavDropdown.Item>
              <NavDropdown.Item href="/communication"> Communication Coaching </NavDropdown.Item>
              <NavDropdown.Item href="#action5"> Personal Coaching </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {!email&&<Button variant="outline-success" className='login-btn' onClick={handleLoginClick} >Login</Button>}
          {email&&<Button variant="outline-success" className='login-btn' onClick={handleLogoutClick} >Logout</Button>}
          <Button variant="outline-danger" className='coach-btn' onClick={handleFindCoachClick}>Find your coach</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
