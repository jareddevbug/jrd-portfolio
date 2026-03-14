import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Stack from "react-bootstrap/Stack";

type ToolsCardProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

function ToolsCard({ isDark, onToggleTheme }: ToolsCardProps) {
  return (
    <Card className="tools-card bento-card">
      <Card.Body className="d-grid gap-2">
        <h3 className="section-title mb-1"></h3>
        <Stack direction="horizontal" gap={2} className="social-row">
        <Button className="bento-btn" onClick={onToggleTheme} variant="dark">
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="me-2" />
          {isDark ? "" : ""}
        </Button>
        <Button className="bento-btn" href="/cv.pdf" target="_blank" rel="noreferrer" variant="dark">
          <FontAwesomeIcon icon={faDownload} className="me-2" />
          CV
        </Button>
        </Stack>
        <Stack direction="horizontal" gap={2} className="social-row">
          <Button
            className="icon-btn"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            variant="dark"
          ><FontAwesomeIcon icon={faGithub}/>
          </Button>
          <Button className="icon-btn" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" variant="dark">
            <FontAwesomeIcon icon={faLinkedin} />
          </Button>
          <Button className="icon-btn" href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" variant="dark">
            <FontAwesomeIcon icon={faXTwitter} />
          </Button>
          <Button className="icon-btn" href="mailto:hello@example.com" aria-label="Email" variant="dark">
            <FontAwesomeIcon icon={faEnvelope} />
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default ToolsCard;
