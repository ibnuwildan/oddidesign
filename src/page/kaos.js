import React from "react"
import CardComponent from "../component/card";
// import { Button } from "antd";
import { Container } from "react-bootstrap";
import CarouselContent from "../component/carousel-content";

const Kaos = () => {
    return (
        <div className="kaos">
        <Container>
         <CarouselContent img1={require("../img/carousel/kontent-3.jpg")} img2={require("../img/carousel/konten-2.jpg")} img3={require("../img/carousel/kontent-1.jpg")} />
         <h3 className="text-center fw-bold pt-2">Tsirt</h3>
         <div className=" justify-content-center py-5 d-flex flex-wrap">
        <CardComponent title="hallo" image={require("../img/assets/img/baju/baju-biru.jpeg")} />
        <CardComponent title="hallo" image={require("../img/assets/img/baju/baju-hijau.jpeg")} />
        <CardComponent title="hallo" image={require("../img/assets/img/baju/baju-merah.jpeg")} />
        <CardComponent title="hallo" image={require("../img/assets/img/baju/baju-putih.jpeg")} />
        <CardComponent title="hallo" image={require("../img/assets/img/baju/card10.jpeg")} />
        <CardComponent title="hallo" image={require("../img/assets/img/baju/card6.jpeg")} />
        <CardComponent title="hallo" image={require("../img/assets/img/baju/card3.jpeg")} />
        <CardComponent title="hallo" image={require("../img/assets/img/baju/card4.jpeg")} />
        </div>
        </Container>
        </div>
        
    )
}

export default Kaos