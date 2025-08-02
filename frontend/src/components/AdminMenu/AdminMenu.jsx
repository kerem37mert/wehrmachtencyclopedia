import styles from "./AdminMenu.module.css";
import { Link } from "react-router";
import { useContext } from "react";
import { AdminAuthContext } from "../../context/AdminAuthContext.jsx";

const AdminMenu = () => {

    const { setIsAuthenticated } = useContext(AdminAuthContext);

    const logOut = () => {
        localStorage.removeItem("user");
        setIsAuthenticated(false);
    }

    return (
        <div className={ styles["menu-container"] }>
            <div className={ styles["link-container"] }>
                <Link to="/admin">Ana Sayfa</Link>
                <Link to="/admin">Sözlük</Link>
                <Link to="/admin">Generaller</Link>
            </div>
            <div className={ styles["menu-bottom"] } onClick={ logOut }>
                Çıkış yap
            </div>
        </div>
    );
}

export default AdminMenu;