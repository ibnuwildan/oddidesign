import React from "react";
import { GiPencilBrush } from "react-icons/gi";
import { MdOutlineHighQuality } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import CarouselHome from "../component/carousel-home";

const Home = () => {
  return (
    <div className="header container-fluid p-0">
      <img src={require("../img/stikeroddi.png")} style={{ width: "100%" }} className="img-fluid" alt="" />
      <div>
        <h3 className="text-header" style={{ textAlign: "center", paddingTop: "50px" }}>
          CUSTOM PAKAIAN SESUAI IMPIANMU
        </h3>
      </div>
      <div className="header-1 row text-center pt-5 fs-5 fw-bold" style={{ justifyContent: "center" }}>
        <div className="icons col-md-2 col-sm-3 ">
          <GiPencilBrush size="3rem" />
          <p>Desain Sesuai Keinginanmu</p>
        </div>
        <div className="icons col-md-2 col-sm-3">
          <MdOutlineHighQuality size="3rem" />
          <p>Jaminan Kualitas Produk</p>
        </div>
        <div className="icons col-md-2 col-sm-3">
          <AiOutlineFieldTime size="3rem" />
          <p>Jaminan Pengiriman Tepat Waktu</p>
        </div>
        <div className="icons col-md-2 col-sm-3">
          <GiMoneyStack size="3rem" />
          <p>Jaminan Uang kembali</p>
        </div>
      </div>
      <div className="header-2 container pb-5">
        <div className="row text-center">
          <div className="col-md-6 col-sm-12  d-flex">
            <img src={require("../img/suport/jaket.jpg")} className="img-fluid mt-5 " alt="" />
          </div>
          <div className="col-md-6 col-sm-12  d-flex">
            <img src={require("../img/suport/kaos.jpg")} className="img-fluid mt-5" alt="" />
          </div>
        </div>
      </div>
      <div className="header-3 containe">
        <div className="grup col-md-12 text-center pt-2">
          <a href="/custom">
            <img src={require("../img/suport/grup.png")} className="img-fluid" style={{ width: "80rem" }} alt="" />
          </a>
        </div>
      </div>
      <div className="header-4 container">
        <div className="row text-center">
          <div className="col-md-3 pt-5">
            <a href="/jersey">
              <img src={require("../img/suport/3.png")} className="img-fluid" style={{ width: "19rem" }} alt="" />
            </a>
          </div>
          <div className="col-md-3 pt-5">
            <a href="/polo">
              <img src={require("../img/suport/2.png")} className="img-fluid" style={{ width: "19rem" }} alt="" />
            </a>
          </div>
          <div className="col-md-3 pt-5">
            <a href="/reglan">
              <img src={require("../img/suport/4.png")} className="img-fluid" style={{ width: "19rem" }} alt="" />
            </a>
          </div>
          <div className="col-md-3 pt-5">
            <a href="/kaos">
              <img src={require("../img/suport/1.png")} className="img-fluid" style={{ width: "19rem" }} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <CarouselHome />
      </div>
    </div>
  );
};

export default Home;
