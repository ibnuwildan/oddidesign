import Carousel from "react-bootstrap/Carousel";

const CarouselContent = (props) => {
  return (
    <Carousel fade className="pt-3">
      <Carousel.Item>
        <img src={props.img1} alt="img-fluid" style={{ width: "100%", borderRadius: "2%" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.img2} alt="..." style={{ width: "100%", borderRadius: "2%" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.img3} alt="..." style={{ width: "100%", borderRadius: "2%" }} />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContent;
