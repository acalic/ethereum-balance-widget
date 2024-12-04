import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ onClick, children, disabled }) => {
  return (
    <button 
      onClick={onClick} 
      className={styles.button}
      disabled={disabled}
    >
        {children}
    </button>
  );
};

export default Button;
