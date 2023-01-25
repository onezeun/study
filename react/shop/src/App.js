import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import './App.css'
import bg from './bg.png'
import shoesData from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';

function App() {
  let [shoes, setShoes] = useState(shoesData);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event') }}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{ backgroundImage: `url(${bg})` }}></div>

      <Routes>
        <Route path='/' element={
          <Container>
            <Row className="justify-content-center">
              <Card shoes={shoes}></Card>
            </Row>
          </Container>} />
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>주소임</div>} />
        </Route>
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path='*' element={<div>없는페이지에여~</div>} />
      </Routes>

    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card({ shoes }) {
  let navigate = useNavigate();
  return (
    shoes.map(function (data, i) {
      return (
        <Col xs={12} md={4} onClick={()=>{ navigate(`/detail/${i}`)} }>
          <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} width="80%" alt="" />
          <h4>{data.title}</h4>
          <p>{data.price}</p>
        </Col>
      )
    })
  )
};

export default App;
