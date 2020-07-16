import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import almacen from "../../Productos.json";
import './Productos.css'
const Productos = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const products = almacen.filter(
      (products) => products.Categoria === props.categoria
    );
    setProductos(products);
  }, [props.categoria]);
  return (
    <>
      {productos.map((producto) => (
        <Card className="card-prod border-0 m-1 p-1 bg-light align-self-center " key={producto.id}>
          <Card.Img
            className="mx-auto d-block img-prod"
            variant="top"
            src={producto.url}
          />
          <Card.Body className="p-1 mx-auto text-center">
            <Card.Title className="mx-auto">{producto.title}</Card.Title>
            <Card.Text className="mx-auto d-block">
              Descripcion {producto.title}
            </Card.Text>
            <Button variant="primary" className="mx-auto d-block">
              Ver
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Productos;
