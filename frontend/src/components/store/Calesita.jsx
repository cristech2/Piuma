import React from "react";
import { Carousel, Button } from "react-bootstrap";

const Calesita = () => {
  return (
    <>
      <Carousel indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/150/92c952"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Producto 1</h5>

            <Button>Ver</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://via.placeholder.com/150/771796"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h5>Second slide label</h5>
            <Button>Ver</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/150/24f355"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h5>Third slide label</h5>
            <Button>Ver</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Calesita;
