import React from "react";

import styles from "./Home.module.scss";

import { Link, useNavigate } from "react-router-dom";

import { getSearchDetails } from "../../apis/fetch-data-DISCOGS";
import { genresAPI } from "../../apis/fetch-data-genres";

export default function HomePage(props: any) {
    const params = new URLSearchParams(window.location.search);
    const artistParam = params.get("artist");
    const pageParam = params.get("page");
    const styleParam = params.get("style");
    const genreParam = params.get("genre");
    console.log("artistParam", artistParam);
    

    const [artist, setArtist] = React.useState([]);
    const [searchArtist, setSearchArtist] = React.useState(artistParam || "");
    const [searchGenre, setSearchGenre] = React.useState(genreParam || "");
    const [searchStyle, setSearchStyle] = React.useState(styleParam || "");
    const [searchStyles, setSearchStyles] = React.useState("");
    const [currentPage, setCurrentPage] = React.useState((pageParam as string) || "1");
    const [pagesNumber, setPagesNumber] = React.useState();
    const [resultsNumber, setResultsNumber] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);

    const genres = genresAPI;
    const navigate = useNavigate();

    const handleKeyPress = (event: { key: string; target: { value: React.SetStateAction<string> } }) => {
        if (event.key === "Enter" && event.target.value === "") {
            setSearchArtist(event.target.value);
            setCurrentPage("1");
        } else if (event.key === "Enter") {
            setSearchArtist(event.target.value);
        }
    };

    const handlePages = (event: any, value: React.SetStateAction<string>) => {
        setCurrentPage(value);
    };

    React.useEffect(() => {
        // navigate(`/discover?artist=${searchArtist}&page=${currentPage}`);
        getSearchDetails(searchArtist, searchGenre, searchStyle, currentPage).then((data) => {
            console.log(data);
            setResultsNumber(data?.pagination?.items);
            setArtist(data?.results);
            setPagesNumber(data?.pagination?.pages);
            setIsLoading(false);
        });
        return () => console.log("clear");
    }, [searchGenre, searchArtist, searchStyle, currentPage, history, searchStyles]);

    return (
        <div className={styles.home__container}>
            <h1>Home Page</h1>
        </div>
    );
}
