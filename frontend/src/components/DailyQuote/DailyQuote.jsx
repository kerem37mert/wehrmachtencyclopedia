import styles from "./DailyQuote.module.css";
import { useEffect, useState } from "react";

const DailyQuote = () => {

    const [quote, setQuote] = useState({});

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/quote`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => setQuote(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className={ styles.container }>
            <q><em>{ quote.quote }</em></q>
            <p className={styles.author}>{ quote.author?.String }</p>
        </div>
    );
}

export default DailyQuote;