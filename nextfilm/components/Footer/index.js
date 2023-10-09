import Link from "next/link";
import React from "react";

import styles from "../Footer/styles.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <span style={{ color: "white" }}>made with by &nbsp;</span>
            <Link href="https://www.instagram.com/karaytumut/" target="_blank" style={{ color: "white" }}>
umut karaytu            </Link>
        </footer>
    );
}

export default Footer;
