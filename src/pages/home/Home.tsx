import React, { useContext } from "react";
import SearchBar from "../../components/SearchBar";
import useSWR from "swr";
import Error from "../../components/Error/Error";

import { getHomeContent } from "../../apis/fetch-home-data-SPOTIFY";
import { PlayerContext } from "../../context/PlayerContext";

import styles from "./Home.module.scss";
import DataGrid from "../../components/DataGrid/DataGrid";

export default function HomePage(props: any) {
    const { setPlayerId, setIsPlayerIdChanged } = useContext(PlayerContext);

    const { data, error } = useSWR("home", () => getHomeContent(), {
        revalidateOnFocus: false,
        revalidateIfStale: false,
    });

    if (error) return <Error />;
    if (!data) return "looooooooo";

    return (
        <div className={styles.home__container}>
            <SearchBar onSearch={props.onSearch} placeholder="Search for an artist" />
            <div className={styles.artists__container}>
                <div className={styles.artists__container__recommended}>
                    <h1>Recommended Artists</h1>
                    <DataGrid
                        type="button"
                        handler={(id: string) => {
                            setPlayerId(id);
                            setIsPlayerIdChanged(true);
                        }}
                        data={data!.recommendations.tracks
                            .filter((track) => track.name)
                            .map((track) => ({
                                id: track.id,
                                image: (track as any)?.album?.images?.[0]?.url,
                                title: track.name,
                                description: track?.artists.map((artist) => artist.name).join(", "),
                            }))}
                    />
                </div>
            </div>
        </div>
    );
}
