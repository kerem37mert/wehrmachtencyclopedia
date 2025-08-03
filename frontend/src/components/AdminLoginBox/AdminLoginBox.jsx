import styles from "./AdminLoginBox.module.css";
import { useContext, useState } from "react";
import { AdminAuthContext } from "../../context/AdminAuthContext.jsx";


const AdminLoginBox = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState({});

    const { setIsAuthenticated } = useContext(AdminAuthContext);

    const loginHandler = () => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
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
            .then(data => {
                setResult(data)
                if(data.success) {
                    localStorage.setItem("user", data.token);
                    setIsAuthenticated(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
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
            {
                !result.success && (
                    <div className={ styles.message }>{ result.error }</div>
                )
            }
        </div>
    );
}

export default AdminLoginBox;