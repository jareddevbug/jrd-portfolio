import ThemeToggle from "./ui/ThemeToggle";
import styles from "./Header.module.css";

// const navLinks = [
//   { label: "Work", href: "#projects" },
//   { label: "Experience", href: "#experience" },
//   { label: "Contact", href: "#contact" },
// ];

const getAvailability = () => {
  const now = new Date();
  const hour = now.getHours(); // 0–23
  return hour >= 8 && hour < 17 ? "Working" : "Available";
};

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#about">
          Jrd.dev
          <span className={styles.badge}>{getAvailability()}</span>
        </a>
        {/* <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.href} className={styles.link} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav> */}
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
