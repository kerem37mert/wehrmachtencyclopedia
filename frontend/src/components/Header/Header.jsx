import styles from "./Header.module.css";
import { useEffect, useState } from "react";

const Header = () => {

    const [config, setConfig] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/api/config",
            {
                method: "GET"
            })
            .then(res => res.json())
            .then(data => setConfig(data))
            .catch(err => console.log(err))
    }, []);

    return(
        <div className={ styles.header }>
            <h1 className={ styles.title } >{ config.title }</h1>
            <p className={ styles.subtitle } >{ config.sub_title }</p>
        </div>
    );
}

export default Header;