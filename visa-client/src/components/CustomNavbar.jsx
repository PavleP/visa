import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Grid, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css'
import intl from 'react-intl-universal';

class CustomNavbar extends Component {
  render() {
    return (
        <Grid>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">
                  <Image src="logo/logo_small.png"/>
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                  {intl.get('SIMPLE')}
                </NavItem>
                <NavItem eventKey={2} componentClass={Link} href="/p_categories" to="/p_categories">
                  Kategorije
                </NavItem>
                <NavItem eventKey={3} componentClass={Link} href="/p_vehicles" to="/p_vehicles">
                  Vozila
                </NavItem>
                <NavItem eventKey={4} componentClass={Link} href="/p_exams" to="/p_exams">
                  Ispiti
                </NavItem>
                <NavItem eventKey={5} componentClass={Link} href="/p_practice" to="/p_practice">
                  Vežba
                </NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={6} componentClass={Link} href="/users" to="/users">
                  Korisnici
                </NavItem>
                <NavItem eventKey={7} componentClass={Link} href="/s" to="/s">
                  Uređivanje
                </NavItem>
                <NavItem eventKey={8} componentClass={Link} href="/login" to="/login">
                  Prijava
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Grid>
    );
  }
}

export default CustomNavbar;
