import React from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import "./Donji.css";

export default class Example extends React.Component {
  render() {
    return (<div className="col-sm-8 donji">
       <Form>
         
         
          <div className='col-sm-6'>
          <h3>OSTAVI SVOJE PODATKE</h3>
              <FormGroup>
              <Label for="exampleEmail"></Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
              </FormGroup>
          </div>
        
          <div className='col-sm-6'>
            <FormGroup>
              <Label for="examplePassword"></Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
          </div>          
        
          <div className='col-sm-6'>        
            <FormGroup>
              <Label for="exampleText"></Label>
              <Input type="textarea" name="text" id="exampleText" placeholder="Unos teksta"/>
            </FormGroup>  
          </div>
          <div className='col-sm-6'>
        <FormGroup tag="fieldset">  
          
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Nisam robot
          </Label>
        </FormGroup>
        <br />
        <Button>Pošalji</Button>
        </div>
      </Form>
    </div>
     
    );
  }
}