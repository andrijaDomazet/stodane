import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Slika2 from "./img/sto-da-ne-naslov.png";
import "./Kartica1.css";

const Kartica1 = (props) => {
  return (
    <div className="col-sm-6 ">
      <Card className="kartica1">
        <CardImg top width="100%" src={Slika2} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Kartica1;