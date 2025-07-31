import styles from "./AdminLoginBox.module.css";
import { useState } from "react";

const AdminLoginBox = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = () => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch((err) => console.log(err));
    }

    return (
        <div className={ styles["login-box"] }>
            <input
                type="text"
                placeholder="Kullancı Adı"
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="password"
                placeholder="Parola"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={ loginHandler }>
                Giriş Yap
            </button>
            <div className={ styles.message }>Lütfen giriş bilgilerinizi kontrol ediniz</div>
        </div>
    );
}

export default AdminLoginBox;