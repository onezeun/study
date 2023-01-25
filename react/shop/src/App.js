import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import './App.css'
import bg from './bg.png'
import shoesData from './data';


function App() {
  let [shoes, setShoes] = useState(shoesData);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{ backgroundImage: `url(${bg})` }}></div>

      <Container>
        <Row className="justify-content-center">
          <Card shoes={shoes}></Card>
        </Row>
      </Container>
    </div>
  );
}

function Card({ shoes }) {
  return (
    shoes.map(function (data, i) {
      return (
        <Col xs={12} md={4}>
          <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="80%" alt="" />
          <h4>{data.title}</h4>
          <p>{data.price}</p>
        </Col>
      )
    })
  )
}

export default App;
