import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Background from "./img/Tesla-9.2+poklon-tablet.jpg"
import "./Gornji.css"
import NavBar from '../navbar/NavBar';
import Kartica1 from '../kartica1/Kartica1';
import Slika1 from "./img/sto-da-ne-naslov.png";
import Slika2 from "./img/Telefon-tablet-slider.png";

var sectionStyle = {
  width: "auto",
  height: "100vh",
  backgroundImage:`url(${Background})`
};
const Gornji = (props) => {
  return (
    
      <Jumbotron style={ sectionStyle }>
        <NavBar/>
        <div className="jumbostyle">
          <img src={Slika1} width="50%" alt="slika1"/>
          <img src={Slika2} width="50%" alt="slika2"/>
        <div className="row">
        <Kartica1/>
        
        </div>

        <p className="lead">
          <Button color="primary">Smartphone 9.2</Button>
        </p> 
         </div>
      </Jumbotron>
  
  );
};

export default Gornji;