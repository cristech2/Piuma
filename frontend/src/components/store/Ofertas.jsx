import React from "react";
import Calesita from "./Calesita";
import { Container, Row, Col } from "react-bootstrap";

const Ofertas = () => {
  return (
    <>
      <Container fluid className="mt-5">
        <Row className="justify-content-center">
          <Col xs="12" md="6" lg="6" className="mt-5">
          <h4 className="text-center mb-3">Ofertas</h4>
          <Calesita />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Ofertas;
