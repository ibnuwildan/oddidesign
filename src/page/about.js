import React from "react";
import CarouselContent from "../component/carousel-content";

const About = () => {
  return (
    <div className="myabout py-5" style={{ textAlign: "justify" }}>
      <div className="container  pb-5 px-5" style={{ backgroundColor: "#e9e9e9", borderRadius: "2%" }}>
        <div className="about row">
          <div className="col-lg-6 p-0 order-1">
            <img src={require("../img/about/about5.png")} alt="" style={{ width: "100%", borderRadius: "20px" }} />
          </div>
          <div className="col-lg-6 col-sm-6 order-2" style={{ padding: "5rem" }}>
            <h1>ODDI</h1>
            <p className="fs-5">
              berdiri pada September tahun 2018. Berawal dari 4 orang. Kini, Oddi semakin percaya diri untuk terus bekembangdan menjadi salah satu brand yang dapat memberi alasan pada konsumen "kenapa kalian harus memilih custom clothing".
              Kami tumbuh bersama, berusaha fokus pada satu titik,yaitu membawa oddi menjadi perusahaan teknologi yang berkomoditas di bidang pakaian. Bagi kami, kerja keras yang di lakukan semata-mata kami apresiasikan untuk konsumen.{" "}
            </p>
          </div>

          <div class="w-100 d-none d-md-block p-3"></div>
          <div className=" col-lg-6  p-0 order-4">
            <CarouselContent img1={require("../img/about/about8.JPG")} img2={require("../img/carousel/about-carousel-1.jpg")} img3={require("../img/carousel/about-carousel.jpg")} />
          </div>
          <div className="col-lg-6 col-sm-3 order-3" style={{ padding: "5rem", textAlign: "justify" }}>
            <h1>KEPUASAN KONSUMEN</h1>
            <p className="fs-5">
              Kepuasan konsumen adalah nomor satu! Sebuah moto yang selalu kami junjung di internal perusahaan Oddi. Demi menjaga kepercayaan dan kepuasan konsumen, Oddi memberikan layanan garansi uang kembali. Layanan tersebut adalah
              bentuk tanggung jawab kami demi memberikan layanan yang terbaik bagi konsumen kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
