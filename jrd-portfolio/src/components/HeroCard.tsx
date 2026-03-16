import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Card from "./ui/Card";
import Tag from "./ui/Tag";
import styles from "./HeroCard.module.css";

function HeroCard() {
  return (
    <Card className={styles.card}>
      <div className={styles.avatarWrap}>
        <img src="/jrd-vector-beard.png" alt="Jared San Fernando" className={styles.avatar} />
      </div>
      <h1 className={styles.title}>Jared San Fernando</h1>
      <div className={styles.meta}>
        <span>
          <FontAwesomeIcon icon={faCode} /> Software Developer
        </span>
        <span>
          <FontAwesomeIcon icon={faLocationDot} /> Manila, Philippines
        </span>
      </div>
      <p className={styles.summary}>
        I design enterprise-ready systems that simplify complex HR and inventory workflows.
        Focused on clear UX, scalable architecture, and dependable delivery.
      </p>
      <div className={styles.tags}>
        <Tag>Systems</Tag>
        <Tag>Automation</Tag>
        <Tag>Full Stack</Tag>
      </div>
    </Card>
  );
}

export default HeroCard;
