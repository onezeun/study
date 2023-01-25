import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function Detail(props) {

  let {id} = useParams();

  return (
    <Container>
      <Row>
        <Col className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${Number(id)+1}.jpg`}width="100%" />
        </Col>
        <Col className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <Button className="btn-danger">주문하기</Button>
        </Col>
      </Row>
    </Container>
  )
};

export default Detail;