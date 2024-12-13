import { Container } from "react-bootstrap";
import CardComponent from "../component/card";
import CarouselContent from "../component/carousel-content";

const Reglan = () => {
  return (
    <Container>
      <CarouselContent img1={require("../img/carousel/konten-reglan.png")} img2={require("../img/carousel/konten-reglan1.png")} img3={require("../img/carousel/konten-reglan2.png")} />
      <h3 className="text-center fw-bold pt-2">Reglan</h3>
      <div className=" justify-content-center py-5 d-flex flex-wrap">
        <CardComponent image={require("../img/assets/img/reglan/reglan1.jpeg")} />
        <CardComponent image={require("../img/assets/img/reglan/reglan2.png")} />
        <CardComponent image={require("../img/assets/img/reglan/reglan3.jpeg")} />
        <CardComponent image={require("../img/assets/img/reglan/reglan4.jpeg")} />
        <CardComponent image={require("../img/assets/img/reglan/reglan5.png")} />
        <CardComponent image={require("../img/assets/img/reglan/reglan6.jpeg")} />
        <CardComponent image={require("../img/assets/img/reglan/reglan7.jpeg")} />
        <CardComponent image={require("../img/assets/img/reglan/reglan8.jpeg")} />
      </div>
    </Container>
  );
};
export default Reglan;
