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
          <div className="row">
            <div className="col-sm-6">
        <h5>Gratis tablet za prvih 100</h5>
            <img src={Slika1} width="60%" alt="slika1"/> 
         <p>Lorem ipsum dolor sit amet.</p>
            <p className="lead">
          <Button color="primary">Smartphone 9.2</Button>
        </p>
            </div>
            <div className="col-sm-6">
     <img src={Slika2} width="100%" alt="slika2"/> 
            </div>
                     
     
          </div>

       
        <div className="row">
        {/* <Kartica1/> */}
        
        </div>

      
         </div>
      </Jumbotron>
  
  );
};

export default Gornji;