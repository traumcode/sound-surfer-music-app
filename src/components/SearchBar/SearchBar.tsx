import * as React from "react";
import { useState } from "react";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
    placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <div className={styles.search__container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" name="name" className={styles.question} id="nme" placeholder={placeholder} onChange={handleChange} />
                <label htmlFor="nme">
                    <span>search some waves to surf ~</span>
                </label>
            </form>
        </div>
    );
};

export default SearchBar;