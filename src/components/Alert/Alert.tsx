import { FC } from "react";
import styles from "./Alert.module.scss";

interface AlertProps {
  type: "success" | "error";
  message: string;
}

const Alert: FC<AlertProps> = ({ type, message }) => {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      {message}
    </div>
  );
};

export default Alert;
