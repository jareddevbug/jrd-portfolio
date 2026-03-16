import type { HTMLAttributes } from "react";
import styles from "./Card.module.css";
import cx from "../../utils/cx";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "accent";
};

function Card({ className, variant = "default", ...props }: CardProps) {
  return <div className={cx(styles.card, styles[variant], className)} {...props} />;
}

export default Card;
