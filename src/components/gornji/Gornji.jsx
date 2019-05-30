import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Background from "./img/Tesla-9.2+poklon-tablet.jpg"
import "./Gornji.css"
import NavBar from '../navbar/NavBar';
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
            <div className="col-sm-6 text">

              <h3>Gratis tablet za prvih 100</h3>
                <img  src={Slika1} width="60%" alt="slika1"/> 
                <p className='textstyle' >Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                  <p className="lead">
                  <Button color="none">Smartphone 9.2</Button>
                  </p>          
            </div>

            <div className="col-sm-6">
                <img src={Slika2} width="100%" alt="slika2"/> 
            </div>    

          </div>             
        </div>
      </Jumbotron>
  
  );
};

export default Gornji;