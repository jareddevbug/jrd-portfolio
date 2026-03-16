import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Card from "./ui/Card";
import Button from "./ui/Button";
import ThemeToggle from "./ui/ThemeToggle";
import styles from "./ToolsCard.module.css";

function ToolsCard() {
  return (
    <Card className={styles.card}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>Quick Actions</p>
        <ThemeToggle />
      </div>
      <div className={styles.actions}>
        <Button variant="primary" href="/cv.pdf" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faDownload} /> Download CV
        </Button>
        <Button href="mailto:hello@example.com">
          <FontAwesomeIcon icon={faEnvelope} /> Email Me
        </Button>
      </div>
    </Card>
  );
}

export default ToolsCard;
