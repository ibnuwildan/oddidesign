import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer pt-5">
        <div className="container">
        <hr className="md-1" />
          <div className="row">
            <div className="kol1 col-md-4 ">
              <h4 style={{ paddingBottom: "2rem" }}>Support</h4>
              <img src={require("../img/logo4.png")} alt="" />
              <p className="py-3 pe-5 me-5" style={{ fontSize: "17px", paddingBottom: "15px", textAlign: "justify", paddingRight:"10px" }}>
                  Kp.sawah Rt 02 Rw 03, Lengkong Kulon, Pagedangan, Tangerang Banten. 15331
                </p>
            </div>
            <div className="footers col-md-4">
              <h4 style={{ paddingBottom: "2rem" }}>Service</h4>

              <p>
                <a href="/">Home</a>
              </p>
              <p>
                <a href="/about">About As</a>
              </p>
              <p>
                <a href="/custompage">Custom Group</a>
              </p>
            </div>
            <div className="kontak col-md-4" >
              <h4 style={{ paddingBottom: "2rem" }}>Contact</h4>
              <div className="social">     
                <a href="https://wa.me/6282112714140?text=Hii... Saya mau tanya soal sablon">
                  <img src={require("../img/footer/whatsapp1.png")} alt=""/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100069616577649">
                <img src={require("../img/footer/instagram.png")} alt=""/>
                </a>
                <a href="https://www.tiktok.com/@oddidesainproject?_t=8h7tBt0zwRN&_r=1">
                <img src={require("../img/footer/facebook.png")} alt=""/>
                </a>
                <a href="https://www.tiktok.com/@oddidesainproject?_t=8h7tBt0zwRN&_r=1">
                <img src={require("../img/footer/tiktok.png")} alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
