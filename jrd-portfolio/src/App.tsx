import { useEffect, useState } from "react";
import { Col, Container, Row, Card, Badge } from "react-bootstrap";
import "./App.css";
import HeaderBar from "./components/HeaderBar";
import BentoGrid from "./components/BentoGrid";
import ToolsCard from "./components/ToolsCard";
import FooterBar from "./components/FooterBar";
//ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocation,
  faCode
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`app-shell theme-${theme}`}>
      <HeaderBar />
      <Container className="main-layout" id="about">
        <Row className="g-4">
          <Col lg={4} xl={3}>
            <Card className="bento-card intro-card">
              <Card.Body>
                <div className="profile-card-img d-flex flex-column align-items-center justify-content-center">
                  <img src="./jrd-vector-beard.png" alt="jrd.sf"/>
                </div>
                <h2 className="hero-title text-left mt-2">Jared San Fernando 
                   <i className="bi bi-patch-check-fill text-primary ms-1"></i>
                </h2>
                <p className="eyebrow"><FontAwesomeIcon icon={faCode} className="me-2"/>Software Developer</p>
                <p className="eyebrow"><FontAwesomeIcon icon={faMapLocation} className="me-2"/>Manila, Philippines</p>
                <p className="hero-subtitle">
                  Building solutions from curiosity, logic, and a little bit of caffeine.
                </p>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <Badge className="bento-tag bg-dark">Software Development</Badge>
                  <Badge className="bento-tag bg-dark">Human Resources Information Systems</Badge>
                  <Badge className="bento-tag bg-dark">Inventory Management Systems</Badge>
                </div>
              </Card.Body>
            </Card>
            <ToolsCard isDark={theme === "dark"} onToggleTheme={toggleTheme} />
          </Col>
          <Col lg={8} xl={9}>
            <BentoGrid />
          </Col>
        </Row>
      </Container>
      <FooterBar />
    </div>
  );
}

export default App;
