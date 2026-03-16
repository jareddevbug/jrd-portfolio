import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <p>© {new Date().getFullYear()} Jared San Fernando. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
