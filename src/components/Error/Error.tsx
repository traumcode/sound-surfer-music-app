import { FC } from "react";
import styles from './Error.module.scss';

const Error: FC = () => {
    return (
        <div className={styles.error__container}>
            <h1 className={styles.error__text}>Error..something went wrong</h1>
        </div>
    );
};
export default Error;
