import HeaderPic from "../../assets/images/header20.jpg";
import Logo from "../../assets/images/logo.png";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.header__container}>
            <img src={HeaderPic} alt="Header" className={styles.header__picture} />
            <img src={Logo} alt="Logo" className={styles.header__logo} />
        </div>
    );
};
export default Header;
