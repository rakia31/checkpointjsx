import "./App.css";
import { Navbar, Nav , NavDropdown, Container } from "react-bootstrap";
export function Rakia(){
    return(
        
     
      <div>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Avion</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">landing</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">transport world wide </h1>
          <br />
          <p> inner cockpit </p>
          <img padding ={20 }
               width = {320}
               height= {240} 
          className= "image1"  controls src ="https://airbus-h.assetsadobe2.com/is/image/content/dam/products-and-solutions/commercial-aircraft/a220-family/a220-300/airbus-a220-300-cockpit.jpg?wid=1920&fit=fit,1&qlt=85,0" alt="avion"/>
          <br/>
          <p> landing runway </p>
          <img width={320} height={240} 
          className="image2" controls src="https://i.ytimg.com/vi/xNJ8jfB4Oac/maxresdefault.jpg" alt="interieur avion" />
          <br />
        </div>
        <p> this video will explain more</p>
        <video width={320} height={240} controls id="videoo">
          <source src="https://www.youtube.com/watch?v=w7ejDZ8SWv8" type="video/mp4" />
        </video>
      </div>
    );
  }
;
    