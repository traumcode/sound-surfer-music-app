import React from "react";
import { getGenres } from "../../apis/fetch-genres-SPOTIFY";
import styles from "./Genres.module.scss";

export default function Genres() {
    const [genres, setGenres] = React.useState([]);

    const allowedGenres = [
        "rock",
        "hip-hop",
        "jazz",
        "techno",
        "ambient",
        "electronic",
        "idm",
        "experimental",
        "breakbeat",
        "chill",
        "deep-house",
        "detroit-techno",
        "drum-and-bass",
        "dub",
        "garage",
        "house",
        "trip-hop",
    ];

    React.useEffect(() => {
        getGenres().then((data) => setGenres(data.genres as []));
    }, []);

    return (
        <div className={styles.genres__container}>

    
        </div>
    );
}
