import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Alert, Nav } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(x => x.id === id);

  useEffect(() => {
    let a = setTimeout(() => { setAlert(false) }, 2000)
    return () => {
      clearTimeout(a)
    }
  }, []);

  return (
    <Container>
      {alert === true ? <Alert className='alert-warning'>2초이내 구매시 할인</Alert> : null}
      {/* {count}
      <Button onClick={() => { setCount(count + 1) }}>버튼</Button> */}
      <Row>
        <Col className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} width="100%" alt="상품이미지"/>
        </Col>
        <Col className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <Button className="btn-danger">주문하기</Button>
        </Col>
      </Row>

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
    </Container>
  )
};


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


export default Detail;