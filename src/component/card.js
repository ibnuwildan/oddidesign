import React from "react";
import { Image } from "antd";

const Card = (props) => {
  return (
    <div class="card" style={{ width: "18rem", margin: "15px" }}>
      <Image src={props.image} class="card-img-top" alt="..." />
      {/* <div class="card-body">
        <p class="card-text">{props.title}</p>
      </div> */}
    </div>
  );
};

export default Card;
