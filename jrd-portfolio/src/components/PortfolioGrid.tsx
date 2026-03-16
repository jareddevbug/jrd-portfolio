import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Tag from "./ui/Tag";
import styles from "./PortfolioGrid.module.css";
import { education, experiences, highlights, projects, techStack } from "../content";

function PortfolioGrid() {
  return (
    <section className={styles.grid} id="projects">
      {highlights.map((item) => (
        <Card key={item.title} className={styles.highlight} variant="accent">
          {/* <p className={styles.eyebrow}>Focus</p> */}
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.cardBody}>{item.description}</p>
          <Button href={item.cta.href} variant="primary">
            {item.cta.label}
          </Button>
        </Card>
      ))}

      <Card className={styles.stackCard}>
        <div className={styles.cardHead}>
          <h3 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faLayerGroup} /> Tech Stack
          </h3>
        </div>
        <div className={styles.stackGrid}>
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className={styles.stackGroup}>
              <p className={styles.stackLabel}>{category}</p>
              <div className={styles.tagRow}>
                {items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className={styles.timelineCard} id="experience">
        <div className={styles.cardHead}>
          <h3 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faBriefcase} /> Experience
          </h3>
        </div>
        <div className={styles.timeline}>
          {experiences.map((item) => (
            <article key={`${item.role}-${item.period}`} className={styles.timelineItem}>
              <div className={styles.timelineTop}>
                <h4>{item.role}</h4>
                <span>{item.period}</span>
              </div>
              <p className={styles.timelineOrg}>{item.org}</p>
              <p className={styles.timelineDetail}>{item.detail}</p>
            </article>
          ))}
        </div>
      </Card>

      <Card className={styles.timelineCard}>
        <div className={styles.cardHead}>
          <h3 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faGraduationCap} /> Education
          </h3>
        </div>
        <div className={styles.timeline}>
          {education.map((item) => (
            <article key={`${item.school}-${item.period}`} className={styles.timelineItem}>
              <div className={styles.timelineTop}>
                <h4>{item.school}</h4>
                <span>{item.period}</span>
              </div>
              <p className={styles.timelineDetail}>{item.detail}</p>
            </article>
          ))}
        </div>
      </Card>

      <Card className={styles.projectsCard}>
        <div className={styles.cardHead}>
          <h3 className={styles.sectionTitle}>
            {/* <FontAwesomeIcon icon={faSparkles} />  */}
            Selected Projects
          </h3>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <article key={project.name} className={styles.projectItem}>
              <img src={project.image} alt={project.name} />
              <div className={styles.projectBody}>
                <h4>{project.name}</h4>
                <p>{project.stack}</p>
                <Button size="sm" href={project.href}>
                  View Project
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Card>
    </section>
  );
}

export default PortfolioGrid;
