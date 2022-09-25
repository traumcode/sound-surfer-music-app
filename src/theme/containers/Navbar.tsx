import { FC, FormEvent, SetStateAction, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import Logo from "../../assets/images/logo.png";

import styles from "./Navbar.module.scss";

import { LoadingBars } from "../../components/LoadingBars";
import SignInModal from "../../components/SignInModal";

const Navbar: FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [isConnected, setIsConnected] = useState(true);
    const [isSpotifyConnected, setIsSpotifyConnected] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (inputValue.trim()) {
            setInputValue("");
            navigate(`/search?q=${encodeURIComponent(inputValue.trim())}`);
        }
    };

    useEffect(() => {
        setIsActive(false);
    }, [location.pathname, location.search]);

    return (
        <>
            <div className={styles.rainbow}></div>
            <header className={styles.header}>
                <section className={styles.section}>
                    {/* <div className={styles.logo_container}>
                        <img src={Logo} alt="Logo" className={styles.logo} />
                        <a href="https://www.linkedin.com/in/sutharmayur" id="logo" className={styles.logo_text} target="_blank">
                            sound surfer
                        </a>
                    </div> */}

                    <input type="checkbox" id="toggle-1" className={styles.matra} />

                    <nav className={styles.nav__container}>
                        <ul className={styles.ul}>
                            <li className={styles.list_item}>
                                <a href="#explore" className={styles.list_item__a}>
                                    explore
                                </a>
                            </li>
                            <li className={styles.list_item}>
                                <a className={styles.list_item__a} href="#shop">
                                    shop
                                </a>
                            </li>
                            <li className={styles.list_item}>
                                <a className={styles.list_item__a} href="#events">
                                    events
                                </a>
                            </li>
                            <li className={styles.list_item}>
                                <a className={styles.list_item__a} href="#manifest">
                                    manifest
                                </a>
                            </li>
                            {/* <li className={styles.list_item}>{searchBox(handleFormSubmit, isActive, inputValue, setInputValue)}</li> */}
                        </ul>
                    </nav>
                    <nav className={styles.signinup__container}>
                        {isConnected ? (
                            <>
                                <div className={styles.signinup__button} onClick={() => setShowModal(true)}>
                                    sign in
                                </div>
                            </>
                        ) : (
                            <div>log out</div>
                        )}
                        <TbGridDots className={styles.signinup__icon} />
                    </nav>
                </section>
            </header>
            <SignInModal show={showModal} onHide={() => setShowModal(false)} />
        </>
    );
};

export default Navbar;

function searchBox(
    handleFormSubmit: (e: FormEvent) => void,
    isActive: boolean,
    inputValue: string,
    setInputValue: { (value: SetStateAction<string>): void; (arg0: string): void }
) {
    return (
        <div className={styles.box}>
            <form onSubmit={handleFormSubmit}>
                <input
                    className={styles.search__input}
                    value={inputValue}
                    onKeyDown={(e) => e.stopPropagation()}
                    onKeyUp={(e) => e.stopPropagation()}
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    onMouseOut={(e) => setInputValue("")}
                />
            </form>
            <FiSearch className={styles.search__icon} />
        </div>
    );
}
