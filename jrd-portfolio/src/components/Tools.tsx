import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGithub, FaLinkedin, FaInstagram, FaFileDownload, FaMoon } from "react-icons/fa";
import { useState } from "react";

const Tools = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="bento-card d-flex flex-row align-items-start gap-2">
      <ButtonGroup vertical>
        <Button variant={darkMode ? "secondary" : "dark"} className="d-flex align-items-center" onClick={toggleDarkMode}>
          <FaMoon className="me-2" /> {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>

        <Button className="d-flex align-items-center" href="/cv.pdf" target="_blank" variant="dark">
          <FaFileDownload className="me-2" /> Download CV
        </Button>

        <Button variant="dark" className="d-flex align-items-center" href="https://github.com/yourusername" target="_blank">
          <FaGithub className="me-2" /> GitHub
        </Button>

        <Button variant="dark" className="d-flex align-items-center" href="https://linkedin.com/in/yourusername" target="_blank">
          <FaLinkedin className="me-2" /> LinkedIn
        </Button>

        <Button variant="dark" className="d-flex align-items-center" href="https://instagram.com/yourusername" target="_blank">
          <FaInstagram className="me-2" /> Instagram
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Tools;