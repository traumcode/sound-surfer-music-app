import { FC } from "react";
import styles from "./LoadingCircle.module.scss";

const LoadingCircle: FC = () => {
  return (
    <div className={styles.loading__container}>
        <span className={styles.spinner}></span>
    </div>
  );
};

export default LoadingCircle;
