import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/images/resurgex_logo.svg";
import Cursor from "../animatedcursor/Cursor";

function Header() {
  return (
    <>
      <Cursor/>
      <header className="sticky-top bg-white">
        <Navbar expand="lg" className="navbar-light p-lg-0">
          <div className="navbar-wrap d-flex justify-content-between align-items-center flex-wrap">
            <Navbar.Brand className="py-0" to="/" as={Link}>
              <img
                src={logo}
                alt="Resurge SX"
                className="img-fluid"
                loading="lazy"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse className="justify-content-end" id="navContent">
              <Nav className="animatednav mb-2 mb-lg-0">
                <Nav.Link
                  className="nav-icon"
                  data-hover="Technology"
                  aria-current="page"
                  as={NavLink}
                  to={"/technology"}
                >
                  Technology
                </Nav.Link>
                <Nav.Link
                  className="nav-icon"
                  data-hover="Solutions"
                  as={NavLink}
                  to={"/solutions"}
                >
                  Solutions
                </Nav.Link>
                <NavDropdown title="Resources">
                  <NavDropdown.Item
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Blogs
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Another action
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="nav-icon" data-hover="About Us" as={NavLink}
                  to={"/about"}> 
                  About Us
                </Nav.Link>
                <Nav.Link
                  className="nav-icon"
                  data-hover="Contact Us" as={NavLink} to={"/contact"}> 
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
