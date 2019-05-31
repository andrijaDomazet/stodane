import React from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import "./Donji.scss";

export default class Example extends React.Component {
  render() {
    return (<div className="col-sm-8 donji">
      <Form>
         <div>
            <h3>OSTAVI SVOJE PODATKE</h3>
            <div className='row'>
              <div className='col-sm-6'>                      
       <FormGroup>
          <Label for="exampleDate"></Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="Dan i datum"
          />
        </FormGroup>

       <FormGroup>
        <Label for="exampleEmail"></Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
       </FormGroup>
         <div className="robotDiv">
           <div class="g-recaptcha robot" data-theme="dark" data-sitekey="6LdDeKYUAAAAAJu7nhd4A_s9GiTGed21qDD9PueO"></div>
           </div>
         </div>

         <div className='col-sm-6'>
            <FormGroup>
             <Label for="examplePassword"></Label>
             <Input type="password" name="password" id="examplePassword" placeholder="IMEI" />
            </FormGroup>
            <FormGroup>
            <Label for="exampleText"></Label>
              <div className="unosTeksta">
                   <Input className="unosStyle" type="textarea" name="text" id="exampleText" placeholder="Komentar"/>
              </div>
           
            </FormGroup> 
             </div>    
            </div>
         </div>      
               
      </Form>  <div className="drugo">
          <Button color="none">POŠALJI</Button>
        </div>
    </div>
     
    );
  }
}