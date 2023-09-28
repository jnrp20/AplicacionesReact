import React, { createRef, useRef } from "react";
import "../COMPONENTS/ComponentImagenes.css";

import { Button } from "react-bootstrap"; // hay que importar el elemento de boostrap que queramos usar
import Carousel from "react-bootstrap/Carousel";

import Portada from "../image/portada1.jpg";
import Portada2 from "../image/portada2.jpg";
import Portada3 from "../image/portada3.jpg";
import Portada4 from "../image/portada4.jpg";
import Portada5 from "../image/portada5.jpg";
import Portada6 from "../image/portada6.jpg";
function ComponentImagenes() {
  return (
    <div className="padrePortada">
      <Carousel>
        {" "}
        {/*SE PUEDE AÑADIR "data-bs-theme="dark" PARA QUE LAS BARRAS INFERIORES DE EL CARRUSEL SE VEAN NEGRAS */}
        <Carousel.Item interval={2000}>
          {" "}
          {/*EL INTERVAL CONTROLA EL TIEMPO QUE DURA EN CAMBIAR LA IMAGEN */}
          <img className="d-block w-100" src={Portada} alt="First slide" />
          {/* el  <Carousel.Caption> es para agregarle una leyenda en la parte inferior de la foto */}
          {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={Portada2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={Portada3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={Portada4} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={Portada5} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={Portada6} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ComponentImagenes;
