import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type BentoCardItem = {
  title: string;
  description: string;
  icon: IconDefinition;
  tags: string[];
  featured?: boolean;
  size?: "normal" | "wide";
  ctaLabel?: string;
  ctaHref?: string;
};

type BentoCardProps = {
  item: BentoCardItem;
};

function BentoCard({ item }: BentoCardProps) {
  return (
    <Card className={`bento-card h-100 ${item.featured ? "featured-card" : ""}`}>
      <Card.Body className="d-flex flex-column">
        <div className="bento-card-icon">
          <FontAwesomeIcon icon={item.icon} />
        </div>
        <Card.Title className="bento-card-title">{item.title}</Card.Title>
        <Card.Text className="bento-card-text">{item.description}</Card.Text>

        <div className="d-flex flex-wrap gap-2 mt-auto mb-3">
          {item.tags.map((tag) => (
            <Badge key={tag} className="bento-tag bg-dark">
              {tag}
            </Badge>
          ))}
        </div>

        {item.ctaLabel && item.ctaHref ? (
          <Button className="bento-btn" variant="dark" href={item.ctaHref} target="_blank" rel="noreferrer">
            {item.ctaLabel}
          </Button>
        ) : null}
      </Card.Body>
    </Card>
  );
}

export default BentoCard;
