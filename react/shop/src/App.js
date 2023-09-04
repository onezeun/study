import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import './App.css';
import bg from './bg.png';
import shoesData from './data';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import axios from 'axios';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import Improvement from './pages/Improvement';

function App() {
  let [shoes, setShoes] = useState(shoesData);
  let navigate = useNavigate();

  const More = () => {
    axios.get('https://codingapple1.github.io/shop/data2.json').then((결과) => {
      let copy = [...shoes, ...결과.data];
      setShoes(copy);
    });
  };

  let result = useQuery('작명', () =>
    axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
      return a.data;
    }),
  );

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/improvement');
              }}
            >
              성능개선테스트
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/about');
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/event');
              }}
            >
              Event
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/cart');
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading && '로딩중'}
            {result.error && '에러남'}
            {result.data && result.data.name}
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}></div>

      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Row className="justify-content-center">
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i}></Card>;
                })}
                <Button onClick={More}>더보기</Button>
              </Row>
            </Container>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/improvement" element={<Improvement />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>주소임</div>} />
        </Route>
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path="*" element={<div>없는페이지에여~</div>} />
        <Route path="/cart" element={<Cart />} />
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
  );
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card({ shoes, i }) {
  let navigate = useNavigate();
  return (
    <Col
      xs={12}
      md={4}
      onClick={() => {
        navigate(`/detail/${i}`);
      }}
    >
      <img
        src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
        width="80%"
        alt=""
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </Col>
  );
}

export default App;
