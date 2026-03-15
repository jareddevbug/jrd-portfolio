import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faBriefcase,
  faFolderOpen,
  faGraduationCap,
  faInfoCircle,
  faCode
} from "@fortawesome/free-solid-svg-icons";
import BentoCard, { type BentoCardItem } from "./BentoCard";

const bentoItems: BentoCardItem[] = [
  {
    title: "About Me",
    description: "I’m a Software Developer passionate about designing internal enterprise systems that make complex workflows simple and efficient. I specialize in building applications that streamline HR, inventory, and operational processes, helping teams work smarter and reducing friction across the organization.With experience in database-driven systems, process automation, and scalable application design, I focus on delivering solutions that are maintainable, performant, and aligned with business needs. I enjoy turning challenges into practical systems that drive real impact.",
    icon: faInfoCircle,
    tags: [],
    featured: false,
    size: "wide",
    ctaLabel: "Learn More",
    ctaHref: "#",
  },
  {
    title: "What I Build",
    description: "End-to-end business solutions—modernizing legacy HRIS and inventory systems while crafting scalable, high-performance web applications.",
    icon: faArrowTrendUp,
    tags: [],
    featured: false,
    ctaLabel: "Let's Connect",
    ctaHref: "#",
  }
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

interface Tech {
  name: string;
  category: string;
}

const techs: Tech[] = [
  // Frontend
  { name: "HTML5", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },

  // Backend
  { name: "JavaScript", category: "Backend" },
  { name: "TypeScript", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "CakePHP", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "Node.js", category: "Backend" },

  // Databases
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },

  // Tools / Version Control
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Bitbucket", category: "Tools" },
  { name: "Jira", category: "Tools" },
];

const groupedTechs: Record<string, string[]> = techs.reduce((acc, tech) => {
  if (!acc[tech.category]) acc[tech.category] = [];
  acc[tech.category].push(tech.name);
  return acc;
}, {} as Record<string, string[]>);

function BentoGrid() {
  return (
    <section id="projects" className="grid-shell">
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
                <FontAwesomeIcon icon={faCode} className="me-2" />
                Tech Stacks
              </h3>
            </div>
            <div className="list-scroll" style={{maxHeight: '250px'}}>
              {Object.entries(groupedTechs).map(([category, names]) => (
                <div key={category} className="mb-2 text-light">
                  <div><strong>{category}</strong></div>
                  <div className="ms-4 d-flex flex-wrap gap-2">
                    {names.map((name) => (
                      <Badge key={name} className="bento-tag bg-dark">
                        {name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
              <Button className="bento-btn" variant="dark" href="" target="_blank" rel="noreferrer">
              Learn More
              </Button>
            </div>
          </Card.Body>
        </Card>

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

        <Card className="bento-card grid-span-2 projects-card">
          <Card.Body>
            <div className="list-card-head mb-3">
              <h3 className="section-title mb-0">
                <FontAwesomeIcon icon={faFolderOpen} className="me-2" />
                Testimonials
              </h3>
            </div>
            
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default BentoGrid;
