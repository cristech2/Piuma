import React, { useState } from "react";
import { ButtonGroup, Button, Container, Col, Row } from "react-bootstrap";
import Productos from "./Productos";
import Ofertas from "./Ofertas";
const Store = () => {
  const [categoria, setCategoria] = useState("");
  const handleAgendaclick = () => {
    setCategoria("Agendas");
  };

  const handleCuadernosClick = () => {
    console.log("cuadernos");
    setCategoria("Cuadernos");
  };

  const handleStickersClick = () => {
    setCategoria("Stickers");
  };
  const handleExtrasClick = () => {
    setCategoria("Extras");
  };
  return (
    <>
      <Container className="text-center mt-5">
        <Row>
          <Col xs={12}>
        
            <ButtonGroup className="mt-5 mb-2">
              <Button
                variant="outline-danger"
                onClick={() => handleCuadernosClick()}
              >
                Cuadernos
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => handleAgendaclick()}
              >
                Agendas
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => handleStickersClick()}
              >
                Stickers
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => handleExtrasClick()}
              >
                Extras
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-wrap  justify-content-around align-items-center" xs={12}>
            {categoria === "" ? (
              <Ofertas />
            ) : (
              <Productos categoria={categoria} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Store;
