import { MouseEvent } from "react";
import styles from "./button.module.scss";

type ButtonProps = {
  onClick: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void | undefined;
  type: "submit" | "button";
  children: React.ReactNode;
};

export const Button = ({ onClick, type, children }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={styles.button}>
      {children}
    </button>
  );
};
