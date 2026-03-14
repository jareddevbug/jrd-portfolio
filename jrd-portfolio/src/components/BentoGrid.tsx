import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faBriefcase,
  // faCode,
  faDatabase,
  faFolderOpen,
  faGraduationCap,
  // faLaptopCode,
  // faPalette,
} from "@fortawesome/free-solid-svg-icons";
import BentoCard, { type BentoCardItem } from "./BentoCard";

const bentoItems: BentoCardItem[] = [
  {
    title: "HRIS Platform",
    description: "Role-based employee lifecycle platform focused on fast workflows and clear data visibility.",
    icon: faBriefcase,
    tags: ["React", "PHP", "MySQL"],
    featured: false,
    size: "wide",
    ctaLabel: "View Project",
    ctaHref: "#",
  },
  {
    title: "Inventory System",
    description: "Operational inventory dashboard with real-time stock movement and reporting tools.",
    icon: faDatabase,
    tags: ["TypeScript", "Laravel", "REST API"],
    featured: false,
    ctaLabel: "View Project",
    ctaHref: "#",
  },
  {
    title: "What I Build",
    description: "From legacy HRIS and Inventory Systems to modern web apps.",
    icon: faArrowTrendUp,
    tags: ["Productivity", "UX", "Performance"],
  },
];

const experiences = [
  {
    role: "Full Stack Developer",
    period: "2021 - Present",
    org: "Government HRIS + Inventory Systems",
    detail: "Built role-based workflow modules, analytics views, and scalable internal tools.",
  },
  {
    role: "Freelance Projects",
    period: "2022 - 2023",
    org: "Client-Based Work",
    detail: "Designed and developed landing pages and Point-of-Sale (POS) systems for web and desktop applications.",
  },
  {
    role: "Hello World! 👋🏻",
    period: "2020",
    org: "",
    detail: "Wrote my first line of code",
  },
];

const education = [
  {
    level: "",
    period: "2020 - 2024",
    school: "Colegio De Montalban",
    detail: "Bachelor of Science in Information Technology - President's Lister, Dean's Lister",
  },
  {
    level: "",
    period: "2018 - 2019",
    school: "Asian Institute of Computer Studies",
    detail: "ICT Strand",
  },
  {
    level: "",
    period: "2013-2017",
    school: "General Licerio Memorial National High School",
    detail: "",
  },
  {
    level: "",
    period: "2011-2016",
    school: "Talisay Elementary School (Camarines Norte)",
    detail: "",
  },
];

const projects = [
  { name: "TrendyBrew", stack: "React, PHP, MySQL", href: "#" , image:"./src/assets/project-imgs/trendy-brew.png"},
  { name: "Alarm Based Study Routine Guide System", stack: "Visual Basic .NET, MySQL", href: "#" , image:"./src/assets/project-imgs/alarm-study-routine.png"},
  { name: "Capsgen", stack: "Visual Basic .NET, MySQL", href: "#" , image:"./src/assets/project-imgs/capsgen.png"},
];

function BentoGrid() {
  return (
    <section id="projects" className="grid-shell">
      {/* <div className="section-head mb-3">
        <p className="eyebrow mb-1">Selected Work</p>
        <h2 className="section-heading mb-0">Projects & Capabilities</h2>
      </div> */}
      <div className="bento-grid-custom">
        {bentoItems.map((item) => (
          <div key={item.title} className={item.size === "wide" ? "grid-span-2" : undefined}>
            <BentoCard item={item} />
          </div>
        ))}

        <Card className="bento-card list-card">
          <Card.Body>
            <div className="list-card-head">
              <h3 className="section-title mb-0">
                <FontAwesomeIcon icon={faBriefcase} className="me-2" />
                Experiences
              </h3>
            </div>
            <div className="list-scroll">
              {experiences.map((item) => (
                <article key={`${item.role}-${item.period}`} className="timeline-item">
                  <div className="d-flex justify-content-between gap-2 align-items-start">
                    <h4 className="grid-title">{item.role}</h4>
                    <Badge className="bento-tag bg-dark">{item.period}</Badge>
                  </div>
                  <p className="timeline-org">{item.org}</p>
                  <p className="timeline-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </Card.Body>
        </Card>

        <Card className="bento-card list-card">
          <Card.Body>
            <div className="list-card-head">
              <h3 className="section-title mb-0">
                <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
                Education
              </h3>
            </div>
            <div className="list-scroll">
              {education.map((item) => (
                <article key={`${item.level}-${item.period}`} className="timeline-item">
                  <div className="d-flex justify-content-between gap-2 align-items-start">
                    <h4 className="grid-title">{item.school}</h4>
                    <Badge className="bento-tag bg-dark">{item.period}</Badge>
                  </div>
                  <p className="timeline-org">{item.level}</p>
                  <p className="timeline-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </Card.Body>
        </Card>

        <Card className="bento-card grid-span-2 projects-card">
          <Card.Body>
            <div className="list-card-head mb-3">
              <h3 className="section-title mb-0">
                <FontAwesomeIcon icon={faFolderOpen} className="me-2" />
                Projects
              </h3>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.name} className="project-item">
                <img
                  src={project.image}
                  alt="sample"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    objectPosition: "top center"
                  }}
                />
                  <h4 className="grid-title">{project.name}</h4>
                  <p>{project.stack}</p>
                  <Button className="bento-btn btn-sm" variant="dark" href={project.href}>
                    Open Project
                  </Button>
                </article>
              ))}
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default BentoGrid;
