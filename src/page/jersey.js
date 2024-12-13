import React from "react";
import { Container } from "react-bootstrap";
import CardComponent from "../component/card";
import CarouselContent from "../component/carousel-content";

const Jersey = () => {
    return (
    <Container>
    <CarouselContent img1={require("../img/carousel/konten-5.jpg")} img2={require("../img/carousel/konten-6.jpg")} img3={require("../img/carousel/kontent-7.jpg")} />
      <h3 className="text-center fw-bold pt-2">Jersey</h3>
      <div className=" justify-content-center d-flex flex-wrap">
        <CardComponent image={require("../img/assets/img/jersey/jersey1.jpeg")} />
        <CardComponent image={require("../img/assets/img/jersey/jersey10.jpeg")} />
        <CardComponent image={require("../img/assets/img/jersey/jersey11.jpeg")} />
        <CardComponent image={require("../img/assets/img/jersey/jersey12.jpeg")} />
        <CardComponent image={require("../img/assets/img/jersey/jersey2.jpeg")} />
        <CardComponent image={require("../img/assets/img/jersey/jersey3.jpeg")} />
        <CardComponent image={require("../img/assets/img/jersey/jersey4.jpeg")} />
        <CardComponent image={require("../img/assets/img/jersey/jersey5.jpeg")} />
      </div>
    </Container>
    )
}

export default Jersey