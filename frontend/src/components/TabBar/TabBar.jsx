import styles from "./TabBar.module.css"
import { useEffect, useState } from "react";

const TabBar = ({ active, onChange }) => {

    const [branches, setBranches] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/branches`)
            .then(res => res.json())
            .then(data => setBranches(data))
            .catch(err => console.log(err));

    }, []);

    return (
        <div className={ styles["tab-bar"] }>
            { branches.map((branch) => (
                <a
                    key={ branch.id }
                    className={ branch.id === active ? styles["tab-bar-item"] + " " + styles.active : styles["tab-bar-item"] }
                    href="javascript:void(0)"
                    onClick={ () => onChange(branch.id) }
                >
                    { branch.name }
                </a>
            )) }
        </div>
    );
}

export default TabBar;