import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Background from "./img/Tesla-9.2+poklon-tablet.jpg"
import "./Gornji.scss"
import NavBar from '../navbar/NavBar';
import Slika1 from "./img/sto-da-ne-naslov.png";
import Slika2 from "./img/Telefon-tablet-slider.png";

var sectionStyle = {
  width: "auto",
  height: "auto",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage:`url(${Background})`
};
const Gornji = (props) => {
  return (
    
      <Jumbotron style={ sectionStyle }>
        <NavBar/>

        <div className="jumbostyle">
          <div className="row">
            <div className="col-sm-6 text">
             <div className="unutrasnjiDiv">
               <h4>Gratis tablet za prvih 100</h4>
                <img src={Slika1} width="70%" alt="slika1"/> 
                <p className='textstyle' >Budite među prvih 100 kupaca Tesla Smartphone-a 9.2, <br></br> jer na poklon dobijate Tesla Tablet L7.1! <br></br> <strong>Dva uređaja po ceni jednog - pa STO da ne?</strong>  </p>
                  <p className="lead">
                  <Button color="none">SMARTPHONE 9.2</Button>
                  </p>  
</div>
                      
            </div>

            <div className="col-sm-5 telefon">
                <img src={Slika2}  alt="slika2" className="slikaTelefona"/> 
            </div>    

          </div>             
        </div>
      </Jumbotron>
  
  );
};

export default Gornji;