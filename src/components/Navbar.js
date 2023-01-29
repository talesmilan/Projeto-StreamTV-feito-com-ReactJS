import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import {NavLink} from 'react-router-dom'

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" expand="md">
        <NavbarBrand href="/">StreamTV</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">Página Inicial</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Filmes
              </DropdownToggle>
              <DropdownMenu>
              <NavLink className="nav-link m-0 p-0" to="/filmes/acao">
                <DropdownItem>Ação</DropdownItem>
              </NavLink>
              <NavLink className="nav-link m-0 p-0" to="/filmes/comedia">
                <DropdownItem>Comédia</DropdownItem>
              </NavLink>
              <NavLink className="nav-link m-0 p-0" to="/filmes/terror">
                <DropdownItem>Terror</DropdownItem>
              </NavLink>
                <DropdownItem>Ficção</DropdownItem>
                <DropdownItem>Drama</DropdownItem>
                <DropdownItem>Romance</DropdownItem>
                <DropdownItem>Suspence</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Recomendados</DropdownItem>
                <DropdownItem>Top Filmes</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Séries
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Ação</DropdownItem>
                <DropdownItem>Comédia</DropdownItem>
                <DropdownItem>Terror</DropdownItem>
                <DropdownItem>Ficção</DropdownItem>
                <DropdownItem>Drama</DropdownItem>
                <DropdownItem>Romance</DropdownItem>
                <DropdownItem>Suspence</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Recomendados</DropdownItem>
                <DropdownItem>Top Séries</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className="nav-link" to="/contato">Contato</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/sobre">Sobre</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;