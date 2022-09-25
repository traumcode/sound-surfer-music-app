import React from "react";

import styles from "./Home.module.scss";

import Genres from "../../containers/Genres";

import SearchBar from "../../components/SearchBar";

export default function HomePage(props: any) {
    return (
        <div className={styles.home__container}>
            {/* <Genres/> */}
            <SearchBar onSearch={props.onSearch} placeholder="Search for an artist" />
            <div className={styles.recommended_artists__container}>
                <h1>Recommended Artists</h1>
            </div>
        </div>
    );
}
