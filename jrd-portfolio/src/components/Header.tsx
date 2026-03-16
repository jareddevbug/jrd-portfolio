import ThemeToggle from "./ui/ThemeToggle";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#about">
          Jared San Fernando
          <span className={styles.badge}>Available</span>
        </a>
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.href} className={styles.link} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
