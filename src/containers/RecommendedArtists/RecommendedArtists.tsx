import React from "react";
import { useState } from "react";
import styles from "./SearchBar.module.scss";


const RecommendedArtists = () => {
    const [searchTerm, setSearchTerm] = useState("");

