import React from "react";
import { Card } from "react-bootstrap";

const CardHome = (props) => {
    return(
        <Card className="card-home">
      <img src={props.image} className="card-img-top" alt="..." />
        <Card.Body>
          <Card.Title style={{fontSize: "22px"}}>{props.title}</Card.Title>
          <Card.Text style={{fontSize: "17px"}}>
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>       
    )
}

export default CardHome