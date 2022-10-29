import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./DataGrid.module.scss";

interface DataGridProps {
    data: {
        id: string;
        image: string;
        title: string;
        description: string;
    }[];
    type: "link" | "button";
    handler: Function;
}

export const DataGrid: FC<DataGridProps> = ({ data, type, handler }) => {
    return (
        <div className={styles.dataGrid__container}>
            {data.map((item) => {
                const children = (
                    <>
                        <div className={styles.image_text__container}>
                            <img src={item.image} alt="" className={styles.image} />
                            <div>
                                <i />
                            </div>
                        </div>
                        <p>{item.title}</p>
                        {!!item.description && <p>{item.description}</p>}
                    </>
                );

                if (type === "link")
                    return (
                        <div key={item.id}>
                            <Link to={handler(item.id)}>{children}</Link>
                        </div>
                    );

                return (
                    <div key={item.id} className={styles.item__container}>
                        <div onClick={() => handler(item.id)}>{children}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default DataGrid;
