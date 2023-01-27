import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

function Detail(props) {
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(x => x.id == id);

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
          <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} width="100%" />
        </Col>
        <Col className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <Button className="btn-danger">주문하기</Button>
        </Col>
      </Row>
    </Container>
  )
};

export default Detail;