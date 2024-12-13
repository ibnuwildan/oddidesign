import React from "react";
import { GiSewingMachine } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { TbTools } from "react-icons/tb";
import { BiTimer } from "react-icons/bi";
import { TbMug } from "react-icons/tb";
import { TbBottle } from "react-icons/tb";
import { IoShirtOutline } from "react-icons/io5";
// import { GiTrousers } from "react-icons/gi";
import { GiMonclerJacket } from "react-icons/gi";
import { BsBag } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { SiContactlesspayment } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { Button } from "react-bootstrap";
import CarouselContent from "../component/carousel-content";

const CustomPage = () => {
    return (
        <div className="mycustom pb-5" style={{ textAlign: "justify" }}>
        <div className="container">
          <h1 className="text-center pt-5 pb-5">ODDI CUSTOM GROUP</h1>
          <div className="header-custom">
            <div className="row py-5 mb-5" style={{ borderRadius: "10px", backgroundColor: "#e9e9e9" }}>
              <div className=" hedare-col col-md-6">
                <CarouselContent img1={require("../img/carousel/carousel-konten-custom.jpg")} img2={require("../img/carousel/carousel-konten-custom1.jpg")} img3={require("../img/carousel/carousel-konten-custom-2.jpg")} />
              </div>
              <div className=" hedare-col col-md-6 fs-5" style={{ padding: "5rem" }}>
                <p>
                  Penawaran istimewa dari Oddi untuk pesanan pakaian secara partai atau jumlah banyak. Oddi juga terbuka untuk penambahan detail atau permintaan khusus pada produk yang akan dipesan untuk komunitas atau korporasi.
                  <br /> Tentunya kami memberikan jaminan kecepatan pengerjaan sesuai deadline dan kualitas terbaik untuk setiap produknya. Pemesanan dapat dilakukan dengan cara menghubungin customer service Oddi.
                </p>
              </div>
            </div>
          </div>
  
          <h1 className="text-center pb-5">KEUNGGULAN ODDI CUSTOM GROUP</h1>
          <div className="row text-center fw-bold " style={{ justifyContent: "center" }}>
            <div class="col-3">
              <GiReceiveMoney size="5rem" />
              <p>JAMINAN UANG KEMBALI</p>
            </div>
            <div class="col-3">
              <GiSewingMachine size="5rem" />
              <p>KUALITAS BAHAN & JAHITAN TERJAMIN</p>
            </div>
            <div class="col-3">
              <BiTimer size="5rem" />
              <p>JAMINAN TEPAT WAKTU</p>
            </div>
            <div class="col-3">
              <TbTools size="5rem" />
              <p>CUSTOM LOGO </p>
            </div>
          </div>
          <div className="header-custom2 row text-center pb-5 mt-5" style={{ backgroundColor: "#ececec", justifyContent: "center", borderStyle: "dashed", borderRadius: "10px" }}>
            <h1 className="text-center pt-5 pb-5">ODDI CUSTOM GROUP MENERIMA PESANAN</h1>
            <div className="col-md-2">
              <TbMug size="5rem" />
              <p>MUG</p>
            </div>
            <div className="col-md-2">
              <TbBottle size="5rem" />
              <p>BOTOL</p>
            </div>
            <div className="col-md-2">
              <IoShirtOutline size="5rem" />
              <p>KAOS</p>
            </div>
            <div className="col-md-2">
              <GiMonclerJacket size="5rem" />
              <p>JAKET</p>
            </div>
            <div className="col-md-2">
              <BsBag size="5rem" />
              <p>TOTE BAG</p>
            </div>
          </div>
          <div className=" header-custom2 row text-center pb-5 mt-5" style={{ justifyContent: "center", backgroundColor: "#ececec", borderRadius: "10px" }}>
            <h1 className="text-center pt-5 pb-5">CARA MUDAH PEMESANAN ODDI CUSTOM GROUP </h1>
            <div className="col-md-2">
              <BsHeadset size="5rem" />
              <p>HUBUNGI CUSTOMER SERVICE ODDI</p>
            </div>
            <div className="col-md-2">
              <IoShirtOutline size="5rem" />
              <p>PILIH/REQUEST DESAIN PAKAIAN</p>
            </div>
            <div className="col-md-2">
              <SiContactlesspayment size="5rem" />
              <p>PEMBAYARAN DOWN PAYMENT</p>
            </div>
            <div className="col-md-2">
              <GiSewingMachine size="5rem" />
              <p>PROSES PRODUKSI MASAL</p>
            </div>
            <div className="col-md-2">
              <SiContactlesspayment size="5rem" />
              <p>PELUNASAN SISA PEMBAYARAN</p>
            </div>
            <div className="col-md-2">
              <TbTruckDelivery size="5rem" />
              <p>PENGIRIMAN ORDER PESANAN</p>
            </div>
            <p className="text pt-5">UNTUK INFO & PEMESANAN BISA LANGSUNG HUBUNGIN CUSTOMER CARE ODDI</p>
            <div className="whatsapp-custom col-md-5 p-0">
              <Button href="https://wa.me/6282112714140?text=Hii... Saya mau tanya soal sablon" variant="success">
                <img src={require("../img/whatsapp1.png")} alt="img-fluid" /> Click to Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CustomPage