import type { HTMLAttributes } from "react";
import styles from "./Tag.module.css";
import cx from "../../utils/cx";

type TagProps = HTMLAttributes<HTMLSpanElement>;

function Tag({ className, ...props }: TagProps) {
  return <span className={cx(styles.tag, className)} {...props} />;
}

export default Tag;
