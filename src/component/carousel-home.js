import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CardHome from "./card-carousel";

const CarouselHome = ()=> {
    return(
        <div>
            <h3 className="title-carousel text-center py-5">KATA MEREKA TENTANG KAMI</h3>
        <Carousel className="carousel-home">
        <Carousel.Item >
        <div className=" justify-content-center d-flex flex-wrap">
        <CardHome title="@ibnu_wildan" image={require("../img/carousel/ibnu.jpg")} text="Tampil percaya diri dengan produk oddi. Karena bisa bebas pilih warna & ukuran." />
        <CardHome title="@odadrendy" image={require("../img/carousel/dado.jpg")} text="akaian yang saya pesan sangat nyaman, ukuran sesuai dengan yang dipesan"/>
        <CardHome title="@jakdidik" image={require("../img/carousel/didik.jpg")} text="Proses belanja gak ribet, fast respon dan kualitas barang sesuai ekspektasi."/>
        <CardHome title="@okhieoct" image={require("../img/carousel/oki.jpg")} text= "Belanjanya mudah, simple dan jaminan garansi uang kembali. Seneng bgt sama jaketnya!"/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className=" justify-content-center d-flex flex-wrap">
        <CardHome title="@iqbalol" image={require("../img/carousel/iqbal.jpg")} text="Kualitas terbaik dengan hsil yang memuaskan!! pelayanan cepat."/>
        <CardHome title="@indahkumalaa" image={require("../img/carousel/indah.jpg")} text="Puas bgt sama produk lokal yg satu ini. Sesuai selera yg bisa kita custom."/>
        <CardHome title="@wildaninu" image={require("../img/card/profil 2.jpg")} text="Kualitasnya bagus, nyaman dipakai, packingannya rapi :D, next bakal belanja lagi" />
        <CardHome title="@robotkucin" image={require("../img/card/profil 1.jpg")} text="Tampil percaya diri dengan produk oddi. Karena bisa bebas pilih warna & ukuran." />
        </div>
        </Carousel.Item>
      </Carousel>
        </div>
    )
}

export default CarouselHome