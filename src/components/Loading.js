import React from 'react';
// Gif
import gif from "../gif/Hourglass.gif"
// Styles
import styles from "./Loading.module.css"

const Loading = () => {
    return (
        <section className={styles["loader-container"]}>
            <img src={gif} alt="loader" />
        </section>
    );
};

export default Loading;