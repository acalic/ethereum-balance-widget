import { FC } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder: string;
  id: string;
}

const Input: FC<InputProps> = ({ value, onChange, label, placeholder, id }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.inputField}
      />
    </div>
  );
};

export default Input;
