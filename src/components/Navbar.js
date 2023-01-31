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
                <NavLink className="nav-link m-0 p-0" to="/filmes/acao/1">
                  <DropdownItem>Ação</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/filmes/comedia/1">
                  <DropdownItem>Comédia</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/filmes/terror/1">
                  <DropdownItem>Terror</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/filmes/drama/1">
                  <DropdownItem>Drama</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/filmes/romance/1">
                  <DropdownItem>Romance</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/filmes/aventura/1">
                  <DropdownItem>Aventura</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/filmes/animacao/1">
                  <DropdownItem>Animação</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/filmes/fantasia/1">
                  <DropdownItem>Fantasia</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/filmes/familia/1">
                  <DropdownItem>Família</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/filmes/misterio/1">
                  <DropdownItem>Mistério</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/filmes/guerra/1">
                  <DropdownItem>Guerra</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/filmes/ficcao-cientifica/1">
                  <DropdownItem>Ficção Científica</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/filmes/documentario/1">
                  <DropdownItem>Documentário</DropdownItem>
                </NavLink>
                <DropdownItem divider />
                <NavLink className="nav-link m-0 p-0" to="/filmes/top-filmes/1">
                  <DropdownItem>Top Filmes</DropdownItem>
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Séries
              </DropdownToggle>
              <DropdownMenu>
                <NavLink className="nav-link m-0 p-0" to="/series/acao-e-aventura/1">
                  <DropdownItem>Ação e Aventura</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/series/comedia/1">
                  <DropdownItem>Comédia</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/series/drama/1">
                  <DropdownItem>Drama</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/series/animacao/1">
                  <DropdownItem>Animação</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/series/familia/1">
                  <DropdownItem>Família</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/series/misterio/1">
                  <DropdownItem>Mistério</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/series/infantil/1">
                  <DropdownItem>Infantil</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/series/guerra-e-politica/1">
                  <DropdownItem>Guerra e Política</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/series/documentario/1">
                  <DropdownItem>Documentário</DropdownItem>
                </NavLink>
                <NavLink className="nav-link m-0 p-0" to="/series/fantasia-e-ficcao-cientifica/1">
                  <DropdownItem>Fantasia e Ficção Científica</DropdownItem>
                </NavLink>
                <DropdownItem divider />
                <NavLink className="nav-link m-0 p-0" to="/series/top-series/1">
                  <DropdownItem>Top Séries</DropdownItem>
                </NavLink>
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