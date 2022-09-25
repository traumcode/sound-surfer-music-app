import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import Modal, { ModalProps } from "react-bootstrap/Modal";

import { BsFacebook } from "react-icons/bs";
import { ImGoogle3 } from "react-icons/im";

import styles from "./SignInModal.module.scss";

export default function SignInModal(
    props: JSX.IntrinsicAttributes &
        Omit<
            Pick<
                React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
                "key" | keyof React.HTMLAttributes<HTMLDivElement>
            > & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined },
            BsPrefixProps<"div"> & ModalProps
        > &
        BsPrefixProps<"div"> &
        ModalProps & { children?: React.ReactNode }
) {
    const [modalStyle, setModalStyle] = React.useState("");
    const changeModalStyle = () => {
        console.log("you just clicked");

        if (modalStyle !== styles.right_panel_active) {
            setModalStyle(styles.right_panel_active);
        } else {
            setModalStyle("");
        }
    };

    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body>
                <div className={`${styles.container} ${modalStyle}`} id="container" onClick={() => changeModalStyle()}>
                    <div className={`${styles.form_container} ${styles.sign_up_container}`}>
                        <form action="#" className={styles.forma}>
                            <h1>Create Account</h1>
                            <div className={`${styles.social_container}`}>
                                <a href="#" className={styles.social}>
                                    <BsFacebook />
                                </a>
                                <a href="#" className={styles.social}>
                                    <ImGoogle3 />
                                </a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className={`${styles.form_container} ${styles.sign_in_container}`}>
                        <form action="#">
                            <h1>Sign in</h1>
                            <div className={`${styles.social_container}`}>
                                <a href="#" className={styles.social}>
                                    <BsFacebook />
                                </a>
                                <a href="#" className={styles.social}>
                                    <ImGoogle3 />
                                </a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className={styles.overlay_container}>
                        <div className={styles.overlay}>
                            <div className={`${styles.overlay_panel} ${styles.overlay_left}`}>
                                <h1>Welcome Back, Surfer!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className={styles.ghost} id="signIn">
                                    Sign In
                                </button>
                            </div>
                            <div className={`${styles.overlay_panel} ${styles.overlay_right}`}>
                                <h1>Hello, Surfer!</h1>
                                <p>Enter your personal details and start surfing the waves~~~</p>
                                <button className="ghost" id="signUp">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ocean}>
  <div className={styles.wave}></div>
  <div className={styles.wave}></div>
  <div className={styles.wave}></div>
</div>
                </div>

            </Modal.Body>
        
        </Modal>
    );
}
