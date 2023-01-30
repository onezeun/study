import { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import './App.css';
import bg from './bg.png';
import shoesData from './data';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(shoesData);
  let navigate = useNavigate();

  const More = () => {
    axios.get('https://codingapple1.github.io/shop/data2.json').then((결과) => {
      let copy = [...shoes, ...결과.data];
      setShoes(copy);
    });
  };

  let [탭, 탭변경] = useState(0);

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
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>주소임</div>} />
        </Route>
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path="*" element={<div>없는페이지에여~</div>} />
      </Routes>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => 탭변경(0)}>
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => 탭변경(1)}>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => 탭변경(2)}>
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent 탭={탭} />
    </div>
  );
}

function TabContent({ 탭 }) {
  let [fade, setFade] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 100);
    return () => {
      //useEffect 실행 전에 실행할 코드
      setFade('');
    };
  }, [탭]);

  return (
    <div className={'start ' + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
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
