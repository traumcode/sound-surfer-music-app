import { Route, Routes, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LoadingBars } from "../components/LoadingBars";
import client from "../shared/spotify-client";
import { PlayerContext } from "../context/PlayerContext";
import "./App.scss";

import Layout from "../theme/Layout";
import Home from "../pages/home";

enum LoadingStates {
    loading,
    finished,
    error,
}

export default function App() {
    const [loadingState, setLoadingState] = useState(LoadingStates.loading);

    const location = useLocation();

    const { playerId } = useContext(PlayerContext);

    useEffect(() => {
        localStorage.setItem("sound-surfer", playerId);
    }, [playerId]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                Authorization: `Basic ${btoa(`${import.meta.env.VITE_CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`)}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "grant_type=client_credentials",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.access_token) {
                    setTimeout(() => {
                        setLoadingState(LoadingStates.finished);
                    }, 1000);
                    client.setAccessToken(data.access_token);
                } else setLoadingState(LoadingStates.error);
            })
            .catch((err) => {
                console.log(err);
                setLoadingState(LoadingStates.error);
            });
    }, []);

    if (loadingState === LoadingStates.loading)
        return (
            <div className="main__container">
                <div className="main__container__loading">
                    <LoadingBars />
                </div>
            </div>
        );

    if (loadingState === LoadingStates.error) return <div>Something went wrong</div>;

    return (
        <>
            <div className="main__container">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                </Routes>
            </div>
            {!!playerId && <Player key={playerId} />}
        </>
    );
}
