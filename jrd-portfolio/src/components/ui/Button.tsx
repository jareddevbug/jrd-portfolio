import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import cx from "../../utils/cx";

type CommonProps = {
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  className?: string;
};

type ButtonProps =
  | (CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

function Button({ variant = "ghost", size = "md", className, ...props }: ButtonProps) {
  const classes = cx(styles.button, styles[variant], styles[size], className);

  if ("href" in props && props.href) {
    return <a className={classes} {...props} />;
  }

  const { type, ...restProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button className={classes} type={type ?? "button"} {...restProps} />;
}

export default Button;
