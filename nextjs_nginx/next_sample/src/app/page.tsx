"use client";

import { useState } from "react";
import styles from "./page.module.css";

import axios from "axios";

export default function Home() {
    const [data, setData] = useState<string>("");
    const handleAxiosClick = () => {
        axios
            .get("https://localhost/api/users")
            .then((res) => {
                console.log(res.data);
                setData(res.data.result);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <button onClick={handleAxiosClick}>HTTPS 通信</button>
                <div>{data}</div>
            </main>
            <footer className={styles.footer}>
                © 2024 あかちゃんのIT完全に理解した.
            </footer>
        </div>
    );
}
