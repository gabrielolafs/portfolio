import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/TopNavBar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TopNavBar = () => {
  return (
    <>
      <Navbar expand="md" sticky="top" className={styles.navbarCustom}>
        <Navbar.Brand as={Link} to="/" className={styles.navbarBrand}>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={"justify-content-end pe-3"}
        >
          <Nav>
            <Nav.Link as={Link} to="/home" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/document" className={styles.navLink}>
              Document
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNavBar;
