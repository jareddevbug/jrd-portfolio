import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../theme/ThemeProvider";
import Button from "./Button";
import styles from "./ThemeToggle.module.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <Button className={styles.toggle} onClick={toggleTheme} aria-label="Toggle theme">
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
      <span className={styles.label}>{isDark ? "Light" : "Dark"} mode</span>
    </Button>
  );
}

export default ThemeToggle;
