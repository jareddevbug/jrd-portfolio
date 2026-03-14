import {Navbar} from "react-bootstrap";
// import Badge from "react-bootstrap/Badge";

function HeaderBar() {
  return (
    <Navbar className="site-header" expand="lg">
      {/* <Container>
        <Navbar.Brand className="brand-mark d-flex align-items-center gap-2" href="#">
          Jared SF
          <Badge className="status-badge">Available</Badge>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-nav" />
        <Navbar.Collapse id="portfolio-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container> */}
    </Navbar>
  );
}

export default HeaderBar;
