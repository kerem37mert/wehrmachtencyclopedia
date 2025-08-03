import styles from "./AdminGeneralList.module.css";
import AdminGeneralCard from "../AdminGeneralCard";
import { useEffect, useState } from "react";

const AdminGeneralList = () => {

    const [generals, setGenerals] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/generals`)
            .then(res => res.json())
            .then(data => setGenerals(data))
            .catch(err => console.log(err));
    }, );

    return (
        <div className={ styles.container }>
            {
                generals.map((general) => (
                    <AdminGeneralCard
                        key={general.id}
                        general={general}
                        onDelete={(id) => setGenerals(prev => prev.filter(g => g.id !== id))}
                    />
                ))
            }
        </div>
    );
}

export default AdminGeneralList;