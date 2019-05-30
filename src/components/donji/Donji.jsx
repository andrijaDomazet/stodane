import React from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import "./Donji.css";

export default class Example extends React.Component {
  render() {
    return (<div className="col-sm-8 donji">
       <Form>
         <h3>OSTAVI SVOJE PODATKE</h3>
         <div className='row'>
            <div className='col-sm-6'>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
        </div>
            <div className='col-sm-6'></div>
          

         </div>
       
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        
        
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          
          
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Posalji</Button>
      </Form>
    </div>
     
    );
  }
}