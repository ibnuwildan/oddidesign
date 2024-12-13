import React from "react";
import { Container } from "react-bootstrap";
import CardComponent from "../component/card";
import CarouselContent from "../component/carousel-content";

const Polo = () => {
    return (
    <div className="polo">
    <Container>
      <CarouselContent img1={require("../img/carousel/konten-13.png")} img2={require("../img/carousel/konten-12.png")} img3={require("../img/carousel/karosel11.png")} />
      <h3 className="text-center fw-bold pt-2">Polo</h3>
      <div className=" justify-content-center d-flex flex-wrap">
        <CardComponent image={require("../img/assets/img/polo/polo1.jpeg")} />
        <CardComponent image={require("../img/assets/img/polo/polo2.jpeg")} />
        <CardComponent image={require("../img/assets/img/polo/polo3.png")} />
        <CardComponent image={require("../img/assets/img/polo/polo4.jpeg")} />
      </div>
    </Container>
    </div>
   
    )
}

export default Polo