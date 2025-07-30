import styles from "./AdminLoginBox.module.css";
import {useState} from "react";

const AdminLoginBox = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

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
            <button>Giriş Yap</button>
            <div className={ styles.message }>Lütfen giriş bilgilerinizi kontrol ediniz</div>
        </div>
    );
}

export default AdminLoginBox;