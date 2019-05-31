import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Slika3 from "./img/Tesla-logo.png";
import "./NavBar.css";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{ marginTop: "-6%" }} light expand="md">
          <img src={Slika3} width="8%" alt="slika2" />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Link1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Link2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Link3</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
